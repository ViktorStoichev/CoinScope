import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AssetChart from "../components/AssetChart";
import { fetchCryptoById } from "../api/cryptoApi";
import Loader from "../components/Loader";

export default function AssetPage() {
  const { id } = useParams();
  const [asset, setAsset] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [demoChartData, setDemoChartData] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      const data = await fetchCryptoById(id!);
      setAsset(data);
      setDemoChartData([
        { time: "Day 1", price: data.market_data.current_price.usd * 0.9 },
        { time: "Day 2", price: data.market_data.current_price.usd * 0.92 },
        { time: "Day 3", price: data.market_data.current_price.usd * 0.95 },
        { time: "Day 4", price: data.market_data.current_price.usd * 1.0 },
        { time: "Day 5", price: data.market_data.current_price.usd * 1.05 },
        { time: "Day 6", price: data.market_data.current_price.usd * 1.1 },
        { time: "Day 7", price: data.market_data.current_price.usd },
      ]);
      setLoading(false);
    }
    load();
  }, [id]);

  if (loading) return <Loader />;
  if (!asset) return <div>Asset not found.</div>;


  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{asset.name} ({asset.symbol.toUpperCase()})</h1>
      <p className="mb-6 text-xl text-gray-600">Current price: ${asset.market_data.current_price.usd.toLocaleString()}</p>
      <AssetChart data={demoChartData} />
    </div>
  );
}
