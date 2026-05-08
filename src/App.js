import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ProductGrid from "./components/ProductGrid";
import CompareModal from "./components/CompareModal";
import CategorySidebar from "./components/CategorySidebar";

function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [compareItem, setCompareItem] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto p-6">
        <Header />

        {/* Search */}
        <SearchBar onSearch={setQuery} />

        {/* Main layout */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar (desktop) */}
          <CategorySidebar
            active={category}
            onChange={setCategory}
          />

          {/* Product area */}
          <div className="flex-1">
            <ProductGrid
              query={query}
              category={category}
              onCompare={setCompareItem}
            />
          </div>
        </div>

        {/* Compare popup */}
        {compareItem && (
          <CompareModal
            query={compareItem}
            onClose={() => setCompareItem(null)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
