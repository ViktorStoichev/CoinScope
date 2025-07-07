import { useEffect, useState } from "react";
import { fetchCryptoData } from "../api/cryptoApi";
import AssetCard from "./AssetCard";
import Loader from "./Loader";
import { useAssetStore } from "../store/useAssetStore";

export default function CryptoList() {
    const { search } = useAssetStore();
    const [cryptoData, setCryptoData] = useState<any[]>([]);
    const [filteredData, setFilteredData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            const data = await fetchCryptoData();
            setCryptoData(data);
            setFilteredData(data)
            setLoading(false);
        }

        loadData();
    }, []);

    useEffect(() => {
        setFilteredData(cryptoData.filter((asset) =>
            asset.name.toLowerCase().includes(search.toLowerCase()) ||
            asset.symbol.toLowerCase().includes(search.toLowerCase())
        ))
    }, [search]);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {filteredData.map((coin) => (
                <AssetCard
                    key={coin.id}
                    id={coin.id}
                    name={coin.name}
                    symbol={coin.symbol}
                    price={coin.current_price}
                    image={coin.image}
                />
            ))}
        </div>
    );
}
