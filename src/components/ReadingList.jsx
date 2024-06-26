import { X, Trash2 } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const placeholderSVG = `data:image/svg+xml;base64,${btoa(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300" width="200" height="300"><rect width="200" height="300" fill="#f3f4f6"/><path d="M50 50 L150 50 L150 250 L50 250 Z" fill="#e5e7eb" stroke="#d1d5db" stroke-width="4"/><path d="M60 70 L140 70 M60 100 L140 100 M60 130 L140 130 M60 160 L140 160 M60 190 L140 190 M60 220 L140 220" stroke="#d1d5db" stroke-width="2"/><text x="100" y="280" font-family="Arial, sans-serif" font-size="14" fill="#6b7280" text-anchor="middle">Cargando...</text></svg>'
)}`;

function ReadingListModal({ isOpen, onClose, readingList, onRemoveBook }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg md:p-8 p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Lista de lectura</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        {readingList.length === 0 ? (
          <p>Tu lista de lectura esta vacia.</p>
        ) : (
          <ul>
            {readingList.map((book) => (
              <li
                key={book.ISBN}
                className="flex items-center justify-between border-b py-2"
              >
                <LazyLoadImage
                  src={book.cover}
                  alt={book.title}
                  placeholderSrc={placeholderSVG}
                  effect="blur"
                  className="w-24 rounded-lg"
                />
                <div>
                  <h3 className="font-semibold">{book.title}</h3>
                  <p className="text-sm text-gray-600">{book.author.name}</p>
                </div>
                <button
                  onClick={() => onRemoveBook(book)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-2 rounded text-sm flex items-center gap-1 transition-colors duration-300"
                >
                  <Trash2 size={24} />
                  Quitar
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ReadingListModal;
