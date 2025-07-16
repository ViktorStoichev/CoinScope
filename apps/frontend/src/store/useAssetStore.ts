import { create } from "zustand";
import { persist } from "zustand/middleware";

type AssetType = "crypto" | "stocks" | "all";

interface AssetStore {
    filter: AssetType;
    setFilter: (filter: AssetType) => void;
    search: string;
    setSearch: (search: string) => void;
    coins: any[];
    setCoins: (coins: any[]) => void;
}

export const useAssetStore = create<AssetStore>()(
  persist(
    (set) => ({
      filter: "all",
      setFilter: (filter: AssetType) => set({ filter }),
      search: "",
      setSearch: (search: string) => set({ search }),
      coins: [],
      setCoins: (coins: any[]) => {
        console.log("Setting coins in Zustand store", coins.length);
        set({ coins });
      },
    }),
    {
      name: "coins-storage", // name in localStorage
      partialize: (state: any) => ({ coins: state.coins }), // only persist coins
    }
  )
);
