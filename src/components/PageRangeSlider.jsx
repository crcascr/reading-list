import { useState, useEffect } from "react";

function PageRangeFilter({ minPages, maxPages, onRangeChange }) {
  const [range, setRange] = useState(maxPages);

  useEffect(() => {
    onRangeChange(range);
  }, [range, onRangeChange]);

  const handleChange = (e) => {
    setRange(Number(e.target.value));
  };

  return (
    <div className="w-full max-w-xs">
      <h3 className="text-lg font-semibold mb-2">Filtrar por páginas</h3>
      <input
        type="range"
        min={minPages}
        max={maxPages}
        value={range}
        onChange={handleChange}
        className="w-full"
      />
      <div className="flex justify-between text-sm text-gray-600 mt-2">
        <span>{minPages} páginas</span>
        <span>{range} páginas</span>
      </div>
    </div>
  );
}

export default PageRangeFilter;
