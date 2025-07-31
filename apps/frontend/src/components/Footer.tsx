// Footer: Displays copyright and data source
// Responsive layout and gradient styling for visual appeal
import { memo, useState } from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  // State for email copy feedback and visibility
  const [copied, setCopied] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const email = "viktor.stoichev534@gmail.com";
  const navigate = useNavigate();

  // SPA navigation and smooth scroll to top
  const handleLinkClick = (href: string) => {
    navigate(href);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  };

  // Copy email to clipboard and show feedback
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <footer className="w-full bg-gradient-to-r from-pink-800 via-purple-900 to-indigo-500 text-white py-8 sm:py-12 mt-6 sm:mt-8 shadow-inner">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start justify-between px-2 sm:px-4 gap-6 sm:gap-8">
        {/* App info and description */}
        <div className="flex-1 mb-4 md:mb-0">
          <span className="text-lg sm:text-xl font-extrabold tracking-wide mb-2 block">
            CoinScope
          </span>
          <p className="text-xs sm:text-sm opacity-90 mb-2 max-w-xs">
            CoinScope is your gateway to real-time cryptocurrency data, charts, and
            market insights. Discover, track, and analyze digital assets with a
            modern, responsive interface.
          </p>
          <span className="text-xs sm:text-sm font-medium opacity-90 block mt-2">
            &copy; {new Date().getFullYear()} CoinScope. All rights reserved.
          </span>
        </div>
        {/* Quick links */}
        <div className="flex-1 mb-4 md:mb-0">
          <span className="text-sm sm:text-base font-semibold mb-2 block">
            Quick Links
          </span>
          <ul className="space-y-1">
            <li>
              <button
                type="button"
                onClick={() => handleLinkClick("/")}
                className="hover:underline hover:text-yellow-200 transition-colors duration-200 bg-transparent p-0 border-none cursor-pointer"
              >
                Home
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => handleLinkClick("/catalog")}
                className="hover:underline hover:text-yellow-200 transition-colors duration-200 bg-transparent p-0 border-none cursor-pointer"
              >
                Catalog
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => handleLinkClick("/about")}
                className="hover:underline hover:text-yellow-200 transition-colors duration-200 bg-transparent p-0 border-none cursor-pointer"
              >
                About
              </button>
            </li>
          </ul>
        </div>
        {/* Contact and social */}
        <div className="flex-1">
          <span className="text-sm sm:text-base font-semibold mb-2 block">
            Contact & Social
          </span>
          <div className="flex gap-3 mt-2 items-center">
            {/* GitHub icon links to user's GitHub, with flex and center alignment */}
            <a
              href="https://github.com/ViktorStoichev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-yellow-200 flex items-center justify-center"
              style={{ width: 32, height: 32 }}
            >
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="mx-auto"
              >
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.93.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92 0c2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.8 1.08.8 2.18v3.24c0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
              </svg>
            </a>
            {/* LinkedIn icon links to user's LinkedIn */}
            <a
              href="https://www.linkedin.com/in/viktor-stoichev-20877a338/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-yellow-200 flex items-center justify-center"
              style={{ width: 32, height: 32 }}
            >
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="mx-auto"
              >
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75c.97 0 1.75.79 1.75 1.75s-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.07-.93-2-2-2s-2 .93-2 2v4.5h-3v-9h3v1.22c.41-.63 1.36-1.22 2.25-1.22 1.93 0 3.75 1.57 3.75 4.25v4.75z" />
              </svg>
            </a>
            {/* Email icon toggles visibility of Gmail address, clicking Gmail copies it (does not hide) */}
            <button
              type="button"
              onClick={() => setShowEmail(!showEmail)}
              aria-label="Show Email"
              className="hover:text-yellow-200 bg-transparent border-none p-0 cursor-pointer relative flex items-center"
              style={{ width: 32, height: 32 }}
            >
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="mx-auto"
              >
                <path d="M12 13.065l-11.99-7.065v14h23.98v-14l-11.99 7.065zm11.99-9.065v2.13l-11.99 7.065-11.99-7.065v-2.13h23.98z" />
              </svg>
              {showEmail && (
                <span
                  className="ml-2 text-xs sm:text-sm select-all bg-gray-900/80 px-2 py-1 rounded shadow border border-gray-700 cursor-pointer relative"
                  onClick={handleCopyEmail}
                >
                  {email}
                  {copied && (
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs px-2 py-1 rounded shadow">
                      Copied!
                    </span>
                  )}
                </span>
              )}
            </button>
          </div>
          <span className="text-xs sm:text-sm opacity-80 block mt-4">
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
      </div>
    </footer>
  );
}

// Memoize component for performance
export default memo(Footer);