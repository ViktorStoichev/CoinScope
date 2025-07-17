import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AssetChart from "../components/AssetChart";
import { fetchCryptoById, fetchCryptoHistory } from "../api/cryptoApi";
import Loader from "../components/Loader";

const PERIOD_OPTIONS = [
  { label: "1 Day", value: "1d" },
  { label: "7 Days", value: "7d" },
  { label: "30 Days", value: "30d" },
  { label: "1 Year", value: "1y" },
];

export default function AssetDetails() {
  const { id } = useParams();
  const [asset, setAsset] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState<any[]>([]);
  const [period, setPeriod] = useState(PERIOD_OPTIONS[1]); // default: 7d
  const [chartLoading, setChartLoading] = useState(false);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const data = await fetchCryptoById(id!);
      setAsset(data);
      setLoading(false);
    }
    load();
  }, [id]);

  useEffect(() => {
    async function loadChart() {
      if (!id) return;
      setChartLoading(true);
      const history = await fetchCryptoHistory(id, period.value as any);
      let formatted: { time: string; price: number }[] = [];
      if (period.value === "1y") {
        // Вземи първата цена за всеки месец
        const byMonth: { [key: string]: { time: string; price: number } } = {};
        history.forEach((item: any) => {
          const date = new Date(item.time);
          const monthKey = `${date.getFullYear()}-${date.getMonth() + 1}`;
          if (!byMonth[monthKey]) {
            byMonth[monthKey] = {
              time: `${date.getFullYear()}/${(date.getMonth() + 1).toString().padStart(2, '0')}`,
              price: Number(item.priceUsd),
            };
          }
        });
        formatted = Object.values(byMonth);
      } else if (period.value === "1d") {
        formatted = history.map((item: any) => {
          const date = new Date(item.time);
          return {
            time: `${date.getHours().toString().padStart(2, '0')}:00`,
            price: Number(item.priceUsd),
          };
        });
      } else {
        formatted = history.map((item: any) => {
          const date = new Date(item.time);
          return {
            time: `${date.getFullYear()}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}`,
            price: Number(item.priceUsd),
          };
        });
      }
      setChartData(formatted);
      setChartLoading(false);
    }
    loadChart();
  }, [id, period]);

  if (loading) return <Loader />;
  if (!asset) return <div>Asset not found.</div>;

  return (
    <div className="p-2 sm:p-4 max-w-lg sm:max-w-4xl mx-auto animate-fade-in">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-4 md:mb-6">
        <img src={`https://assets.coincap.io/assets/icons/${asset.symbol.toLowerCase()}@2x.png`} alt={asset.name} className="w-16 h-16 sm:w-24 sm:h-24 rounded-full shadow-lg border-4 border-white bg-white" />
        <div className="flex-1">
          <h1 className="text-2xl sm:text-4xl font-extrabold mb-1 sm:mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            {asset.name} <span className="uppercase text-gray-500">({asset.symbol})</span>
          </h1>
          <p className="text-lg sm:text-2xl font-semibold text-gray-800 mb-1 sm:mb-2">
            ${Number(asset.priceUsd).toLocaleString()}
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-4 text-gray-600 text-xs sm:text-base">
            <span className="bg-gray-100 rounded px-2 sm:px-3 py-1 shadow">Market Cap: <span className="font-bold text-gray-800">${Number(asset.marketCapUsd).toLocaleString()}</span></span>
            <span className="bg-gray-100 rounded px-2 sm:px-3 py-1 shadow">24h Volume: <span className="font-bold text-gray-800">${Number(asset.volumeUsd24Hr).toLocaleString()}</span></span>
            <span className="bg-gray-100 rounded px-2 sm:px-3 py-1 shadow">Supply: <span className="font-bold text-gray-800">{Number(asset.supply).toLocaleString()}</span></span>
            <span className="bg-gray-100 rounded px-2 sm:px-3 py-1 shadow">Rank: <span className="font-bold text-gray-800">#{asset.rank}</span></span>
          </div>
          {asset.explorer && (
            <a
              href={asset.explorer}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-4 sm:px-6 py-2 rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-white font-semibold shadow hover:scale-105 hover:-translate-y-1 hover:shadow-lg transition-transform duration-300 ease-in-out mt-4 sm:mt-6 mx-auto text-center text-sm sm:text-base"
              title="Open Explorer"
            >
              Explorer
            </a>
          )}
        </div>
      </div>
      <div className="mb-4 sm:mb-8">
        <div className="flex justify-end mb-1 sm:mb-2">
          <select
            className="px-2 sm:px-3 py-1 sm:py-2 rounded-lg border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white text-gray-700 text-sm sm:text-base"
            value={period.value}
            onChange={e => {
              const selected = PERIOD_OPTIONS.find(opt => opt.value === e.target.value);
              if (selected) setPeriod(selected);
            }}
          >
            {PERIOD_OPTIONS.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
        {chartLoading ? <Loader /> : <AssetChart data={chartData} />}
      </div>
    </div>
  );
}
