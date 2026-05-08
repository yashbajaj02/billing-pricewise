export default function ProductCard({ title, onCompare }) {
  return (
    <div className="border p-4 rounded">
      <h3 className="font-semibold">{title}</h3>
      <button
        className="mt-2 bg-black text-white px-3 py-1 rounded"
        onClick={() => onCompare(title)}
      >
        Compare
      </button>
    </div>
  );
}
