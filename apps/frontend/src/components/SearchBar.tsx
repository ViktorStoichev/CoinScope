import { memo } from "react";
import { useAssetStore } from "../store/useAssetStore";

function SearchBar() {
  const { search, setSearch } = useAssetStore();
  return (
    <div className="w-full flex justify-center mb-4 sm:mb-6">
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search for a cryptocurrency..."
        className="w-full max-w-xs sm:max-w-md px-3 sm:px-5 py-2 sm:py-3 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base sm:text-lg bg-white border border-gray-200 transition-all duration-200"
      />
    </div>
  );
}

export default memo(SearchBar);