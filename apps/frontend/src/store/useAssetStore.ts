import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AssetStore {
    search: string;
    setSearch: (search: string) => void;
    coins: any[];
    setCoins: (coins: any[]) => void;
}

export const useAssetStore = create<AssetStore>()(
  persist(
    (set) => ({
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
