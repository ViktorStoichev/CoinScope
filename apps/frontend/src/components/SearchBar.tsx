// SearchBar: Input field for filtering coins by name or symbol
// Uses Zustand for global search state and React.memo for performance
import { memo } from "react";
import { useAssetStore } from "../store/useAssetStore";

function SearchBar() {
  // Access global search value and setter from Zustand store
  const { search, setSearch } = useAssetStore();
  return (
    <div className="w-full flex justify-center mb-4 sm:mb-6">
      {/* Input for search query, updates Zustand store on change */}
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search for a cryptocurrency..."
        className="w-full max-w-xs sm:max-w-md px-3 sm:px-5 py-2 sm:py-3 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-indigo-700 text-base sm:text-lg bg-gray-900 text-gray-100 border border-gray-800 transition-all duration-200 placeholder:text-gray-400"
      />
    </div>
  );
}

// Memoize component to avoid unnecessary re-renders
export default memo(SearchBar);