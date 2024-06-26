import library from "../resources/books.json";
import Book from "../components/Book";
import { useState, useEffect } from "react";
import FilterBar from "../components/FilterBar";
import SearchBar from "../components/SearchBar";
import { BookOpen } from "lucide-react";
import ReadingListModal from "../components/ReadingList";
import BookDetailsModal from "../components/BookDetailsModal";
import PageRangeFilter from "../components/PageRangeSlider";
import BackgroundPattern from "../components/BackgroundPattern";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Home() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [readingList, setReadingList] = useState(() => {
    const savedList = localStorage.getItem("readingList");
    return savedList ? JSON.parse(savedList) : [];
  });
  const [isReadingListModalOpen, setIsReadingListModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isBookDetailsModalOpen, setIsBookDetailsModalOpen] = useState(false);
  const [availableBooks, setAvailableBooks] = useState([]);

  const [maxPages, setMaxPages] = useState(2000);

  useEffect(() => {
    const initialBooks = library.library.map((item) => item.book);
    setBooks(initialBooks);
    setFilteredBooks(initialBooks);

    const savedReadingList =
      JSON.parse(localStorage.getItem("readingList")) || [];
    setReadingList(savedReadingList);
  }, []);

  useEffect(() => {
    const results = books.filter(
      (book) =>
        (selectedGenre === "Todos" || book.genre === selectedGenre) &&
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        book.pages <= maxPages
    );
    setFilteredBooks(results);
  }, [selectedGenre, searchTerm, books, maxPages]);

  useEffect(() => {
    if (readingList.length > 0) {
      localStorage.setItem("readingList", JSON.stringify(readingList));
    } else {
      localStorage.removeItem("readingList");
    }
  }, [readingList]);

  // Sincronizacion de datos entre pestañas
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "readingList") {
        const newReadingList = e.newValue ? JSON.parse(e.newValue) : [];
        setReadingList(newReadingList);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Calculo de numero de libros disponibles
  useEffect(() => {
    const newAvailableBooks = filteredBooks.filter(
      (book) => !readingList.some((item) => item.ISBN === book.ISBN)
    );
    setAvailableBooks(newAvailableBooks);
  }, [filteredBooks, readingList]);

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleToggleReadingList = (book) => {
    setReadingList((prevList) => {
      if (prevList.some((item) => item.ISBN === book.ISBN)) {
        return prevList.filter((item) => item.ISBN !== book.ISBN);
      } else {
        return [...prevList, book];
      }
    });
  };

  const handleRemoveFromReadingList = (book) => {
    setReadingList((prevList) =>
      prevList.filter((item) => item.ISBN !== book.ISBN)
    );
  };

  const handleOpenBookDetails = (book) => {
    setSelectedBook(book);
    setIsBookDetailsModalOpen(true);
  };

  const handleMaxPagesChange = (newMaxPages) => {
    setMaxPages(newMaxPages);
  };

  return (
    <HelmetProvider>
    <div className="w-[95%] mx-auto font-sans">
      <Helmet>
        <title>Catálogo de libros</title>
        <meta
          name="description"
          content="Explora nuestra colección de libros y encuentra tu próxima lectura favorita."
        />
        <meta
          name="keywords"
          content="libros, biblioteca, lectura, géneros, búsqueda"
        />
        <meta name="locale" content="es_ES" />
      </Helmet>
      <BackgroundPattern />
      <h1 className="text-3xl font-bold mb-6 mt-2 text-center md:text-left">
        Catálogo de libros
      </h1>
      <div className="flex flex-col mb-3">
        <div className="flex justify-center md:justify-between flex-col md:flex-row items-center mb-3 gap-2 md:gap-0">
          <SearchBar onSearch={handleSearch} />
          <button
            onClick={() => setIsReadingListModalOpen(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg inline-flex items-center transition-colors duration-300"
          >
            <BookOpen className="mr-2" size={18} />
            Lista de lectura ({readingList.length})
          </button>
        </div>
        <div className="flex justify-center md:justify-between flex-col md:flex-row md:items-start items-center mb-3 gap-2 md:gap-0">
          <FilterBar
            genres={[
              "Todos",
              ...new Set(library.library.map((book) => book.book.genre)),
            ]}
            selectedGenre={selectedGenre}
            onGenreChange={handleGenreChange}
          />
          <PageRangeFilter
            minPages={0}
            maxPages={2000}
            onRangeChange={handleMaxPagesChange}
          />
        </div>
      </div>
      <div>
        <p className="text-lg mb-6">
          {availableBooks.length !== 0
            ? `Tenemos ${availableBooks.length} ${
                availableBooks.length === 1
                  ? "libro disponible"
                  : "libros disponibles"
              } para ti`
            : "No tenemos libros disponibles que coincidan con tu búsqueda"}
        </p>
      </div>
      <div className="flex md:flex-wrap md:flex-row flex-col gap-x-4 gap-y-8 md:justify-between justify-center">
        {filteredBooks.map((book) => (
          <Book
            key={book.ISBN}
            book={book}
            onToggleReadingList={() => handleToggleReadingList(book)}
            isInReadingList={readingList.some(
              (item) => item.ISBN === book.ISBN
            )}
            onOpenDetails={handleOpenBookDetails}
          />
        ))}
      </div>
      <ReadingListModal
        isOpen={isReadingListModalOpen}
        onClose={() => setIsReadingListModalOpen(false)}
        readingList={readingList}
        onRemoveBook={handleRemoveFromReadingList}
      />

      <BookDetailsModal
        isOpen={isBookDetailsModalOpen}
        onClose={() => setIsBookDetailsModalOpen(false)}
        book={selectedBook}
      />
    </div>
    </HelmetProvider>
  );
}

export default Home;
