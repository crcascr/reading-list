import { BookmarkPlus, Info } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const placeholderSVG = `data:image/svg+xml;base64,${btoa(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300" width="200" height="300"><rect width="200" height="300" fill="#f3f4f6"/><path d="M50 50 L150 50 L150 250 L50 250 Z" fill="#e5e7eb" stroke="#d1d5db" stroke-width="4"/><path d="M60 70 L140 70 M60 100 L140 100 M60 130 L140 130 M60 160 L140 160 M60 190 L140 190 M60 220 L140 220" stroke="#d1d5db" stroke-width="2"/><text x="100" y="280" font-family="Arial, sans-serif" font-size="14" fill="#6b7280" text-anchor="middle">Cargando...</text></svg>'
)}`;

function Book({ book, onToggleReadingList, isInReadingList, onOpenDetails }) {
  return isInReadingList ? null : (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg p-2 bg-white">
      <div className="flex justify-center">
        <LazyLoadImage
          alt={book.title}
          src={book.cover}
          placeholderSrc={placeholderSVG}
          effect="blur"
          className="h-64 object-contain rounded-xl"
        />
      </div>

      <div className="px-6 py-4">
        <div className="font-bold text-xl text-center mb-2 md:truncate md:w-[200px] w-auto">
          {book.title}
        </div>
        <p className="text-gray-700 text-base mb-2">{book.author.name}</p>
        <p className="text-gray-600 text-sm mb-2">
          {book.genre} • {book.pages} páginas
        </p>
      </div>
      <div className="flex justify-center flex-col gap-2">
        <button
          onClick={onToggleReadingList}
          className="flex items-center px-4 py-2 rounded-full justify-center transition-colors bg-blue-500 hover:bg-blue-600 text-white duration-300 font-bold"
        >
          <BookmarkPlus className="mr-2" size={18} />
          Añadir a la lista
        </button>
        <button
          onClick={() => onOpenDetails(book)}
          className="bg-green-400 hover:bg-green-500 text-gray-800 font-bold py-2 px-4 rounded-full justify-center inline-flex items-center transition-colors duration-300"
        >
          <Info className="mr-2" size={18} />
          Detalles
        </button>
      </div>
    </div>
  );
}

export default Book;
