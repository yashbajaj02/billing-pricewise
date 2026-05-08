import { categories } from "../data/categories";

export default function CategorySidebar({ active, onChange }) {
  return (
    <aside className="w-full md:w-56 bg-white rounded-xl shadow p-4">
      <h3 className="font-bold mb-4">Categories</h3>

      <ul className="space-y-2">
        {categories.map((cat) => (
          <li key={cat.id}>
            <button
              onClick={() => onChange(cat.id)}
              className={`w-full text-left px-3 py-2 rounded-lg
                ${
                  active === cat.id
                    ? "bg-primary text-white"
                    : "hover:bg-gray-100"
                }`}
            >
              {cat.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
