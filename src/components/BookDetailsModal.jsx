import {
  X,
  BookMarked,
  BookOpenText,
  CalendarDays,
  Barcode,
  LibraryBig,
} from "lucide-react";

function BookDetailsModal({ book, isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 pt-2 max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-end items-start mb-3">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={32} />
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={book.cover}
            alt={book.title}
            className="w-full md:w-1/4 rounded-lg shadow-md"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-bold flex gap-2 items-center mb-2">
              <BookMarked size={24} />
              {book.title}
            </h2>
            <p className="text-lg mb-2">
              <strong>Autor:</strong> {book.author.name}
            </p>
            <p className="mb-2">
              <strong>Género:</strong> {book.genre}
            </p>
            <p className="mb-2">
              <strong>Sinopsis:</strong> {book.synopsis}
            </p>
            <div className="mb-4 flex justify-evenly">
              <p className="flex flex-col items-center">
                <strong className="mb-2">Año</strong> <CalendarDays size={24} />{" "}
                {book.year}
              </p>
              <p className="flex flex-col items-center">
                <strong className="mb-2">Páginas</strong>
                <BookOpenText size={24} /> {book.pages} páginas
              </p>
              <p className="flex flex-col items-center">
                <strong className="mb-2">ISBN</strong> <Barcode size={24} />{" "}
                {book.ISBN}
              </p>
            </div>
            {book.author.otherBooks ? (
              <div>
                <strong>Otros libros de este autor:</strong>
                <ul className="list-none flex flex-row gap-x-4 gap-y-2 flex-wrap">
                  {book.author.otherBooks.map((otherBook, index) => (
                    <li className="flex items-center" key={index}>
                      <LibraryBig size={24} />
                      {otherBook}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetailsModal;
