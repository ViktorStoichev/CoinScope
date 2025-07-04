import { useAssetStore } from "../store/useAssetStore";


import CryptoList from "../components/CryptoList";
import StockList from "../components/StockList";

export default function Dashboard() {
    const { filter, setFilter } = useAssetStore();

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

            <div className="flex gap-2 mb-6">
                <button
                    onClick={() => setFilter("all")}
                    className={`px-4 py-2 rounded ${filter === "all" ? "bg-blue-600 text-white" : "bg-gray-200"
                        }`}
                >
                    All
                </button>
                <button
                    onClick={() => setFilter("crypto")}
                    className={`px-4 py-2 rounded ${filter === "crypto" ? "bg-blue-600 text-white" : "bg-gray-200"
                        }`}
                >
                    Crypto
                </button>
                <button
                    onClick={() => setFilter("stocks")}
                    className={`px-4 py-2 rounded ${filter === "stocks" ? "bg-blue-600 text-white" : "bg-gray-200"
                        }`}
                >
                    Stocks
                </button>
            </div>

            {filter === "all" || filter === "crypto" ? (
                <>
                    <h2 className="text-xl font-semibold mb-2">Top Cryptocurrencies</h2>
                    <CryptoList />
                </>
            ) : null}

            {filter === "all" || filter === "stocks" ? (
                <>
                    <h2 className="text-xl font-semibold mb-2 mt-4">Top Stocks</h2>
                    <StockList />
                </>
            ) : null}
        </div>
    );
}