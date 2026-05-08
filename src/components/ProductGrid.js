import { catalog } from "../data/catalog";

export default function ProductGrid({ query, category, onCompare }) {
  const q = query.toLowerCase();

  const filtered = catalog.filter((item) => {
    const matchQuery =
      !query ||
      item.name.toLowerCase().includes(q) ||
      item.keywords.some((k) => k.includes(q));

    const matchCategory =
      category === "all" || item.category === category;

    return matchQuery && matchCategory;
  });

  if (filtered.length === 0) {
    return (
      <p className="text-gray-500 mt-6">
        No products found. Try checking on platforms.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {filtered.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg shadow p-3"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-32 object-cover mb-2"
          />
          <h3 className="text-sm font-semibold">
            {item.name}
          </h3>

          <button
            onClick={() => onCompare(item.name)}
            className="mt-2 w-full bg-primary text-white py-1 rounded"
          >
            Compare Prices
          </button>
        </div>
      ))}
    </div>
  );
}
