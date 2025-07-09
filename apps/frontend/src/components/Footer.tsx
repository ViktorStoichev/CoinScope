import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white py-4 mt-8 shadow-inner">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-2">
        <span className="text-sm font-medium opacity-90">
          &copy; {new Date().getFullYear()} CoinScope. All rights reserved.
        </span>
        <span className="text-sm opacity-80">
          Data powered by {" "}
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