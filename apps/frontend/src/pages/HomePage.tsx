// Home page for CoinScope. Shows welcome message and navigation to catalog.
import { memo } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto py-8 sm:py-16 px-2 sm:px-4 flex flex-col items-center text-center">
      {/* Main coin image and welcome text */}
      <img
        src="https://media.lordicon.com/icons/wired/flat/299-coins-dollar.svg" // Public domain coin image
        alt="Big Coin"
        className="w-40 h-40 sm:w-80 sm:h-80 mb-4 sm:mb-8 drop-shadow-xl animate-bounce-slow"
      />
      <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 drop-shadow-lg">
        Welcome to CoinScope
      </h1>
      <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-8 max-w-md sm:max-w-xl">
        CoinScope is your modern, user-friendly dashboard for tracking
        cryptocurrencies in real time. Browse the full catalog, view detailed
        analytics, and enjoy a beautiful, responsive experience. Start exploring
        the world of crypto now!
      </p>
      {/* Button to navigate to catalog */}
      <button
        onClick={() => navigate("/catalog")}
        className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-lg sm:text-xl font-bold shadow-lg hover:scale-105 transition-transform duration-200"
      >
        Browse Coins
      </button>
    </div>
  );
}

export default memo(HomePage);