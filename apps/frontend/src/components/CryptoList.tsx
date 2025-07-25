// CryptoList displays a paginated, searchable grid of cryptocurrency cards.
// It manages filtering, pagination, and handles empty states and loading.
// Uses useMemo and useCallback for performance, and Zustand for global search state.
import React, { useEffect, useState, useMemo, useCallback } from "react";
import AssetCard from "./AssetCard";
import Loader from "./Loader";
import { useAssetStore } from "../store/useAssetStore";

const PAGE_SIZE = 12; // Number of coins per page

type CryptoListProps = {
    coins: any[]; // Array of coin data to display
};

function CryptoList({ coins }: CryptoListProps) {
    // Get global search value from Zustand
    const { search } = useAssetStore();
    // Local state for filtered coins, loading, and current page
    const [filteredData, setFilteredData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    // Update filteredData and loading when coins change
    useEffect(() => {
        if (coins && coins.length > 0) {
            setFilteredData(coins); // Show all coins initially
            setLoading(false);
        } else {
            setLoading(true); // Show loader if no coins
        }
    }, [coins]);

    // Filter coins by search value and reset to first page
    useEffect(() => {
        setFilteredData(
            coins.filter((asset) =>
                asset.name.toLowerCase().includes(search.toLowerCase()) ||
                asset.symbol.toLowerCase().includes(search.toLowerCase())
            )
        );
        setPage(1); // Reset to first page on search
    }, [search, coins]);

    // Scroll to top when page changes for better UX
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [page]);

    // Memoize total pages and paginated data for performance
    const totalPages = useMemo(() => Math.ceil(filteredData.length / PAGE_SIZE), [filteredData.length]);
    const paginatedData = useMemo(() => filteredData.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE), [filteredData, page]);

    // Memoize page navigation handlers for stable references
    const handlePrev = useCallback(() => setPage(page - 1), [page]);
    const handleNext = useCallback(() => setPage(page + 1), [page, totalPages]);
    const handleSetPage = useCallback((i: number) => setPage(i), []);

    // Show loader while fetching data
    if (loading) {
        return <Loader />;
    }

    // Render paginated grid of coins, or empty state if none found
    return (
        <div>
            {paginatedData.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 p-4 sm:p-4 min-h-[320px] w-full place-items-center">
                    {/* Render each coin as an AssetCard */}
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
                // Empty state if no coins match search
                <div className="flex flex-col items-center justify-center min-h-[220px] sm:min-h-[320px] w-full">
                    <p className="flex flex-col items-center justify-center text-center text-base sm:text-lg text-indigo-300 font-bold animate-pulse drop-shadow-lg transition-all duration-500">
                        <span className="text-2xl sm:text-4xl mb-1 sm:mb-2">😕</span>
                        No coins found!
                    </p>
                </div>
            )}
            {/* Pagination controls, only shown if more than one page */}
            {totalPages > 1 && (
                <div className="flex flex-wrap justify-center items-center gap-1 sm:gap-2 mt-4 sm:mt-6">
                    {/* Previous page button */}
                    <button
                        className="px-2 sm:px-3 py-1 sm:py-2 rounded-lg bg-gray-800 text-gray-200 font-semibold disabled:opacity-50 text-sm sm:text-base"
                        onClick={handlePrev}
                        disabled={page === 1}
                    >
                        Prev
                    </button>
                    {/* Page number buttons */}
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            className={`px-2 sm:px-3 py-1 sm:py-2 rounded-lg font-semibold transition-colors duration-150 text-sm sm:text-base ${page === i + 1 ? "bg-indigo-700 text-white" : "bg-gray-900 text-gray-200 hover:bg-indigo-800"}`}
                            onClick={() => handleSetPage(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                    {/* Next page button */}
                    <button
                        className="px-2 sm:px-3 py-1 sm:py-2 rounded-lg bg-gray-800 text-gray-200 font-semibold disabled:opacity-50 text-sm sm:text-base"
                        onClick={handleNext}
                        disabled={page === totalPages}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}

export default React.memo(CryptoList);
