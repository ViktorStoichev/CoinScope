import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AssetPage from "./pages/AssetPage";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import CatalogPage from "./pages/CatalogPage";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
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
