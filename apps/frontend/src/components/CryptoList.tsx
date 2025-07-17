import { useEffect, useState } from "react";
import AssetCard from "./AssetCard";
import Loader from "./Loader";
import { useAssetStore } from "../store/useAssetStore";

const PAGE_SIZE = 12;

type CryptoListProps = {
    coins: any[];
};

export default function CryptoList({ coins }: CryptoListProps) {
    const { search } = useAssetStore();
    const [filteredData, setFilteredData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        if (coins && coins.length > 0) {
            setFilteredData(coins);
            setLoading(false);
        } else {
            setLoading(true);
        }
    }, [coins]);

    useEffect(() => {
        setFilteredData(
            coins.filter((asset) =>
                asset.name.toLowerCase().includes(search.toLowerCase()) ||
                asset.symbol.toLowerCase().includes(search.toLowerCase())
            )
        );
        setPage(1); // Reset to first page on search
    }, [search, coins]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [page]);

    if (loading) {
        return <Loader />;
    }

    const totalPages = Math.ceil(filteredData.length / PAGE_SIZE);
    const paginatedData = filteredData.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    return (
        <div>
            {paginatedData.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 p-4 sm:p-4 min-h-[320px] w-full place-items-center">
                    {paginatedData.map((coin) => (
                        <AssetCard
                            key={coin.id}
                            id={coin.id}
                            name={coin.name}
                            symbol={coin.symbol}
                            price={Number(coin.priceUsd)}
                            image={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
                        />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center min-h-[220px] sm:min-h-[320px] w-full">
                    <p className="flex flex-col items-center justify-center text-center text-base sm:text-lg text-indigo-500 font-bold animate-pulse drop-shadow-lg transition-all duration-500">
                        <span className="text-2xl sm:text-4xl mb-1 sm:mb-2">😕</span>
                        No coins found!
                    </p>
                </div>
            )}
            {totalPages > 1 && (
                <div className="flex flex-wrap justify-center items-center gap-1 sm:gap-2 mt-4 sm:mt-6">
                    <button
                        className="px-2 sm:px-3 py-1 sm:py-2 rounded-lg bg-gray-200 text-gray-700 font-semibold disabled:opacity-50 text-sm sm:text-base"
                        onClick={() => setPage(page - 1)}
                        disabled={page === 1}
                    >
                        Prev
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            className={`px-2 sm:px-3 py-1 sm:py-2 rounded-lg font-semibold transition-colors duration-150 text-sm sm:text-base ${page === i + 1 ? "bg-indigo-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-indigo-100"}`}
                            onClick={() => setPage(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button
                        className="px-2 sm:px-3 py-1 sm:py-2 rounded-lg bg-gray-200 text-gray-700 font-semibold disabled:opacity-50 text-sm sm:text-base"
                        onClick={() => setPage(page + 1)}
                        disabled={page === totalPages}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}
