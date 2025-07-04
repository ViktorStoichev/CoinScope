import { useEffect, useState } from "react";
import { fetchCryptoById } from "../api/cryptoApi";
import Loader from "./Loader";
import { useParams } from "react-router-dom";

export default function AssetDetail() {
    const { id } = useParams<{ id: string }>();
    const [coin, setCoin] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            try {
                const data = await fetchCryptoById(id!);
                setCoin(data);
                setLoading(false);
            } catch (e) {
                console.error(e);
            }
        }
        load();
    }, [id]);

    if (loading) return <Loader />;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-2">{coin.name} ({coin.symbol.toUpperCase()})</h1>
            <img src={coin.image.large} alt={coin.name} className="w-24 h-24 mb-4" />
            <p dangerouslySetInnerHTML={{ __html: coin.description.en.split(".")[0] + "." }} />
            <p className="mt-4">Current price: ${coin.market_data.current_price.usd.toLocaleString()}</p>
            <p>Market cap: ${coin.market_data.market_cap.usd.toLocaleString()}</p>
            <p>24h volume: ${coin.market_data.total_volume.usd.toLocaleString()}</p>
        </div>
    );
}
