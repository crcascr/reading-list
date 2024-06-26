import { useRef } from "react";
import { Search } from "lucide-react";

function SearchBar({ onSearch }) {
  const inputRef = useRef(null);

  const handleIconClick = () => {
    inputRef.current.focus();
  };
  return (
    <div className="flex items-center w-10/12">
      <input
        ref={inputRef}
        type="text"
        placeholder="Buscar libros..."
        onChange={(e) => onSearch(e.target.value)}
        className="p-2 border rounded-l-lg w-full border-r-0"
      />
      <button
        onClick={handleIconClick}
        className="bg-blue-500 hover:bg-blue-600 rounded-r-lg text-white p-1 cursor-pointer transition-colors duration-300"
      >
        <Search size={34} />
      </button>
    </div>
  );
}

export default SearchBar;
