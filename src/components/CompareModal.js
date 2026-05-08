import { platforms } from "../data/platforms";

export default function CompareModal({ query, onClose }) {
  if (!query) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-3xl rounded-xl p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-xl"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-6">
          Price comparison for:{" "}
          <span className="text-primary">{query}</span>
        </h2>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3 border">Platform</th>
                <th className="p-3 border">Delivery Type</th>
                <th className="p-3 border text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {platforms.map((p) => (
                <tr key={p.name} className="hover:bg-gray-50">
                  <td className="p-3 border font-medium">
                    {p.name}
                  </td>

                  <td className="p-3 border text-gray-600">
                    {p.name === "Amazon" || p.name === "Flipkart"
                      ? "1–3 Days"
                      : "Instant / Same Day"}
                  </td>

                  <td className="p-3 border text-center">
                    <a
                      href={p.buildUrl(query)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block bg-primary text-white px-4 py-2 rounded-lg hover:opacity-90"
                    >
                      Check Price
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Note */}
        <p className="text-sm text-gray-500 mt-4">
          Prices and availability may vary on seller platforms.
        </p>
      </div>
    </div>
  );
}
