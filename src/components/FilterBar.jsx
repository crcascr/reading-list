function FilterBar({ genres, selectedGenre, onGenreChange }) {
  return (
    <div className="flex flex-col items-center w-full max-w-xs">
      <label htmlFor="genreSelector" className="text-lg font-semibold mb-1 w-full max-w-xs">
        Filtrar por género
      </label>
      <select
        value={selectedGenre}
        onChange={(e) => onGenreChange(e.target.value)}
        className="p-2 border rounded-lg w-full max-w-xs"
        id="genreSelector"
      >
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterBar;
