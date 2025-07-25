// Catalog page for CoinScope. Shows all coins, search, and update button.
import { memo } from "react";
import SearchBar from "../components/SearchBar";
import CryptoList from "../components/CryptoList";
import { useAssetStore } from "../store/useAssetStore";
import UpdateCoinsButton from "../components/UpdateCoinsButton";

function CatalogPage() {
  // Get coins from Zustand store
  const coins = useAssetStore((state) => state.coins);

  return (
    <div className="max-w-6xl mx-auto py-6 sm:py-10 px-2 sm:px-4">
      {/* Page title */}
      <h1 className="text-2xl sm:text-3xl font-extrabold mb-4 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 via-purple-200 to-pink-300 text-center drop-shadow-lg">All Cryptocurrencies</h1>
      {/* Search input and update button */}
      <SearchBar />
      <UpdateCoinsButton />
      {/* List of coins */}
      <CryptoList coins={coins} />
    </div>
  );
}

export default memo(CatalogPage);