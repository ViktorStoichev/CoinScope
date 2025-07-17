// Header: Main navigation bar for the app
// Shows app name and navigation links, highlights active page
import { memo } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
    // Get current route for active link highlighting
    const location = useLocation();
    return (
        <header className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg sticky top-0 z-50 transition-all duration-300">
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between py-3 sm:py-4 px-2 sm:px-4 gap-2">
                {/* App logo/name, links to home */}
                <Link to="/" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight drop-shadow-lg hover:scale-105 transition-transform duration-200">
                    🦙 CoinScope
                </Link>
                {/* Navigation links, highlight active page */}
                <nav className="flex gap-4 sm:gap-6">
                    <Link
                        to="/catalog"
                        className={`text-base sm:text-lg font-medium transition-colors duration-200 px-2 py-1 rounded-md hover:bg-white/20 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/60 ${location.pathname === "/catalog" ? "bg-white/20 text-white" : "text-white/80"}`}
                    >
                        Coins
                    </Link>
                    <Link
                        to="/about"
                        className={`text-base sm:text-lg font-medium transition-colors duration-200 px-2 py-1 rounded-md hover:bg-white/20 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/60 ${location.pathname === "/about" ? "bg-white/20 text-white" : "text-white/80"}`}
                    >
                        About
                    </Link>
                </nav>
            </div>
        </header>
    );
}

// Memoize component for performance
export default memo(Header);
