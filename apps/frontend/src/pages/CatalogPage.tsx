import { memo } from "react";
import SearchBar from "../components/SearchBar";
import CryptoList from "../components/CryptoList";
import { useAssetStore } from "../store/useAssetStore";
import UpdateCoinsButton from "../components/UpdateCoinsButton";

function CatalogPage() {
  const coins = useAssetStore((state) => state.coins);

  return (
    <div className="max-w-6xl mx-auto py-6 sm:py-10 px-2 sm:px-4">
      <h1 className="text-2xl sm:text-3xl font-extrabold mb-4 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center drop-shadow-lg">All Cryptocurrencies</h1>
      <SearchBar />
      <UpdateCoinsButton />
      <CryptoList coins={coins} />
    </div>
  );
}

export default memo(CatalogPage);