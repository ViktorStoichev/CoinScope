import { useEffect, useState } from "react";
import { fetchCryptoData } from "../api/cryptoApi";
import AssetCard from "./AssetCard";
import Loader from "./Loader";
import { useAssetStore } from "../store/useAssetStore";

const PAGE_SIZE = 12;

export default function CryptoList() {
    const { search } = useAssetStore();
    const [cryptoData, setCryptoData] = useState<any[]>([]);
    const [filteredData, setFilteredData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        async function loadData() {
            const data = await fetchCryptoData();
            setCryptoData(data);
            setFilteredData(data);
            setLoading(false);
        }
        loadData();
    }, []);

    useEffect(() => {
        setFilteredData(
            cryptoData.filter((asset) =>
                asset.name.toLowerCase().includes(search.toLowerCase()) ||
                asset.symbol.toLowerCase().includes(search.toLowerCase())
            )
        );
        setPage(1); // Reset to first page on search
    }, [search, cryptoData]);

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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-4">
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
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-6">
                    <button
                        className="px-3 py-2 rounded-lg bg-gray-200 text-gray-700 font-semibold disabled:opacity-50"
                        onClick={() => setPage(page - 1)}
                        disabled={page === 1}
                    >
                        Prev
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            className={`px-3 py-2 rounded-lg font-semibold transition-colors duration-150 ${page === i + 1 ? "bg-indigo-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-indigo-100"}`}
                            onClick={() => setPage(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button
                        className="px-3 py-2 rounded-lg bg-gray-200 text-gray-700 font-semibold disabled:opacity-50"
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
