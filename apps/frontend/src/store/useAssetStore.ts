import { create } from "zustand";

type AssetType = "crypto" | "stocks" | "all";

interface AssetStore {
    filter: AssetType;
    setFilter: (filter: AssetType) => void;
    search: string;
    setSearch: (search: string) => void;
}

export const useAssetStore = create<AssetStore>((set) => ({
    filter: "all",
    setFilter: (filter) => set({ filter }),
    search: "",
    setSearch: (search) => set({ search }),
}));
