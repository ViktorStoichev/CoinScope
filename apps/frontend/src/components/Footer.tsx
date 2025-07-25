// Footer: Displays copyright and data source
// Responsive layout and gradient styling for visual appeal
import { memo } from "react";

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-pink-800 via-purple-900 to-indigo-500 text-white py-3 sm:py-4 mt-6 sm:mt-8 shadow-inner">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-2 sm:px-4 gap-1 sm:gap-2">
        {/* Copyright info, updates year automatically */}
        <span className="text-xs sm:text-sm font-medium opacity-90">
          &copy; {new Date().getFullYear()} CoinScope. All rights reserved.
        </span>
        {/* Data source attribution with external link */}
        <span className="text-xs sm:text-sm opacity-80">
          Data powered by{" "}
          <a
            href="https://www.coingecko.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-yellow-200 transition-colors duration-200"
          >
            CoinGecko API
          </a>
        </span>
      </div>
    </footer>
  );
}

// Memoize component for performance
export default memo(Footer);