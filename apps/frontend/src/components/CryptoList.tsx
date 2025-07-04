import { useEffect, useState } from "react";
import { fetchCryptoData } from "../api/cryptoApi";
import AssetCard from "./AssetCard";
import Loader from "./Loader";

export default function CryptoList() {
    const [cryptoData, setCryptoData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            const data = await fetchCryptoData();
            setCryptoData(data);
            setLoading(false);
        }
        loadData();
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {cryptoData.map((coin) => (
                <AssetCard
                    key={coin.id}
                    name={coin.name}
                    symbol={coin.symbol}
                    price={coin.current_price}
                    image={coin.image}
                />
            ))}
        </div>
    );
}
