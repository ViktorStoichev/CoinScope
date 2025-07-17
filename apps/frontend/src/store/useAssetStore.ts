// useAssetStore: Zustand store for managing global asset state
// Persists coins in localStorage for fast reloads and offline support
import { create } from "zustand";
import { persist } from "zustand/middleware";

// AssetStore interface defines global state shape
interface AssetStore {
    search: string; // Current search query
    setSearch: (search: string) => void; // Setter for search
    coins: any[]; // Array of coin data
    setCoins: (coins: any[]) => void; // Setter for coins
}

// Create Zustand store with persistence
export const useAssetStore = create<AssetStore>()(
  persist(
    (set) => ({
      search: "", // Initial search value
      setSearch: (search: string) => set({ search }), // Update search
      coins: [], // Initial coins array
      setCoins: (coins: any[]) => {
        // Log for debugging, then update coins
        console.log("Setting coins in Zustand store", coins.length);
        set({ coins });
      },
    }),
    {
      name: "coins-storage", // Key name in localStorage
      partialize: (state: any) => ({ coins: state.coins }), // Only persist coins array
    }
  )
);
