import { Link, useLocation } from "react-router-dom";

export default function Header() {
    const location = useLocation();
    return (
        <header className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg sticky top-0 z-50 transition-all duration-300">
            <div className="max-w-5xl mx-auto flex items-center justify-between py-4 px-4">
                <Link to="/" className="text-3xl font-extrabold text-white tracking-tight drop-shadow-lg hover:scale-105 transition-transform duration-200">
                    🪙 CoinScope
                </Link>
                <nav className="flex gap-6">
                    <Link
                        to="/catalog"
                        className={`text-lg font-medium transition-colors duration-200 px-2 py-1 rounded-md hover:bg-white/20 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/60 ${location.pathname === "/catalog" ? "bg-white/20 text-white" : "text-white/80"}`}
                    >
                        Coins
                    </Link>
                    <Link
                        to="/about"
                        className={`text-lg font-medium transition-colors duration-200 px-2 py-1 rounded-md hover:bg-white/20 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/60 ${location.pathname === "/about" ? "bg-white/20 text-white" : "text-white/80"}`}
                    >
                        About
                    </Link>
                </nav>
            </div>
        </header>
    );
}
