// Main entry point for the CoinScope frontend app
import { memo, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AssetPage from "./pages/AssetPage";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import CatalogPage from "./pages/CatalogPage";
import { useAssetStore } from "./store/useAssetStore";
import { fetchCryptoData } from "./api/cryptoApi";

function App() {
  // Zustand store for managing coins state
  const setCoins = useAssetStore((state) => state.setCoins);
  const coins = useAssetStore((state) => state.coins);

  // Fetch initial coin data if not loaded
  useEffect(() => {
    if (!coins || coins.length === 0) {
      fetchCryptoData().then(setCoins).catch(console.error);
    }
  }, [setCoins, coins]);

  return (
    <Router>
      {/* Main layout: header, routed content, footer */}
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/asset/:id" element={<AssetPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/catalog" element={<CatalogPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default memo(App);
