import { categories } from "../data/categories";

export default function CategoryBar({ active, onChange }) {
  return (
    <div className="flex gap-2 mb-6 overflow-x-auto">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={`px-4 py-2 rounded border whitespace-nowrap
            ${
              active === cat.id
                ? "bg-primary text-white"
                : "bg-white"
            }`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}
