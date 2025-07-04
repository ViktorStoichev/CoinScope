import CryptoList from "../components/CryptoList";
import StockList from "../components/StockList";

export default function Dashboard() {
  return (
    <div>
      <h2 className="text-xl font-bold p-4">Top Cryptocurrencies</h2>
      <CryptoList />

      <h2 className="text-xl font-bold p-4 mt-8">Top Stocks</h2>
      <StockList />
    </div>
  );
}