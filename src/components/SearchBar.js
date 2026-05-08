import { useState } from "react";
import { products } from "../data/products";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (!value.trim()) {
      setSuggestions([]);
      return;
    }

    const q = value.toLowerCase();

    const matches = products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );

    setSuggestions(matches.slice(0, 6));
  };

  const handleSelect = (value) => {
    setQuery(value);
    setSuggestions([]);
    onSearch(value);
  };

  return (
    <div className="relative max-w-xl mx-auto mb-8">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearch(query);
            setSuggestions([]);
          }
        }}
        placeholder="Search products, brands or categories..."
        className="w-full p-4 text-lg border rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-primary"
      />

      {suggestions.length > 0 && (
        <div className="absolute w-full bg-white border rounded-xl mt-2 shadow-lg z-20">
          {suggestions.map((item) => (
            <div
              key={item.id}
              onClick={() => handleSelect(item.name)}
              className="px-4 py-3 cursor-pointer hover:bg-gray-100"
            >
              <div className="font-medium">{item.name}</div>
              <div className="text-sm text-gray-500">
                {item.brand} • {item.category}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
