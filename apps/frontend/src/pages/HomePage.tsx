import SearchBar from "../components/SearchBar";
import CryptoList from "../components/CryptoList";

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center drop-shadow-lg">Track Cryptocurrencies in Real Time</h1>
      <SearchBar />
      <CryptoList />
    </div>
  );
}