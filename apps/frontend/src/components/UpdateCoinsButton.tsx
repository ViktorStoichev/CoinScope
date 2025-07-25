// UpdateCoinsButton: Button to manually refresh the coin data from the backend
// Uses Zustand for state management and React hooks for performance and UX.
import { memo, useCallback, useState } from "react";
import { fetchCryptoData } from "../api/cryptoApi";
import { useAssetStore } from "../store/useAssetStore";

function UpdateCoinsButton() {
  // Zustand store setter for updating coins globally
  const setCoins = useAssetStore((state) => state.setCoins);
  // Local loading state to disable button and show feedback
  const [loading, setLoading] = useState(false);

  // Handler to fetch and update coins from backend
  // Uses useCallback for stable reference and performance
  const handleUpdate = useCallback(async () => {
    setLoading(true); // Show loading state
    try {
      // Fetch latest coin data from API
      const data = await fetchCryptoData();
      // Update global coins state in store
      setCoins(data);
    } catch (e) {
      // Show user-friendly error message on failure
      alert("Failed to fetch latest data");
    } finally {
      setLoading(false); // Reset loading state
    }
  }, [setCoins]);

  return (
    <div className="flex justify-center mb-2 sm:mb-4">
      {/* Refresh button, disabled while loading */}
      <button
        className="px-4 sm:px-6 py-2 bg-indigo-900 text-gray-100 rounded-lg font-semibold shadow hover:bg-indigo-700 disabled:opacity-50 transition-colors duration-150 text-base sm:text-lg"
        onClick={handleUpdate}
        disabled={loading}
      >
        {/* Button text changes based on loading state */}
        {loading ? "Updating..." : "Resfresh Coins Data"}
      </button>
    </div>
  );
}

// Memoize component to prevent unnecessary re-renders
export default memo(UpdateCoinsButton);