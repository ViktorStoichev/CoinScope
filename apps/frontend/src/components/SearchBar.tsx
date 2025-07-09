import { useAssetStore } from "../store/useAssetStore";

export default function SearchBar() {
  const { search, setSearch } = useAssetStore();
  return (
    <div className="w-full flex justify-center mb-6">
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search for a cryptocurrency..."
        className="w-full max-w-md px-5 py-3 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-indigo-400 text-lg bg-white border border-gray-200 transition-all duration-200"
      />
    </div>
  );
} 