import { useState } from "react";
import { fetchCryptoData } from "../api/cryptoApi";
import { useAssetStore } from "../store/useAssetStore";

export default function UpdateCoinsButton() {
  const setCoins = useAssetStore((state) => state.setCoins);
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const data = await fetchCryptoData();
      setCoins(data);
    } catch (e) {
      alert("Failed to fetch latest data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center mb-2 sm:mb-4">
      <button
        className="px-4 sm:px-6 py-2 bg-indigo-500 text-white rounded-lg font-semibold shadow hover:bg-indigo-600 disabled:opacity-50 transition-colors duration-150 text-base sm:text-lg"
        onClick={handleUpdate}
        disabled={loading}
      >
        {loading ? "Updating..." : "Up To Date"}
      </button>
    </div>
  );
}