// About page for CoinScope. Describes app features and tech stack.
import { memo } from "react";

function AboutPage() {
  return (
    <div className="max-w-3xl my-10 mx-auto py-8 sm:py-12 px-10 sm:px-4 text-gray-200 animate-fade-in text-center">
      {/* Title and description */}
      <h1 className="text-2xl sm:text-4xl font-extrabold mb-2 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-700">About CoinScope</h1>
      <p className="text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
        <span className="font-semibold">CoinScope</span> is a modern web application designed to provide users with an easy and intuitive way to track cryptocurrencies in real time. With CoinScope, you can:
      </p>
      {/* Feature list */}
      <ul className="list-disc pl-4 mx-10 sm:pl-6 mb-4 sm:mb-6 space-y-1 sm:space-y-2 text-left mx-auto max-w-xl">
        <li>Browse an up-to-date list of the most popular cryptocurrencies</li>
        <li>Search and filter coins by name or symbol</li>
        <li>View detailed information for each coin – price, market cap, volume, and more</li>
        <li>Track dynamic price charts for the last several days</li>
        <li>Enjoy a modern, minimalist, and responsive design</li>
      </ul>
      {/* Tech stack and acknowledgments */}
      <p className="mb-2 sm:mb-4 text-base sm:text-lg">
        The app uses the <span className="font-semibold">CoinGecko API</span> for the most accurate and reliable data. All features are built with the latest web technologies – React, TypeScript, Tailwind CSS, Zustand, and Chart.js.
      </p>
      <p className="mb-2 sm:mb-4 text-base sm:text-lg">
        <span className="font-semibold">CoinScope</span> is suitable for both beginners and advanced users who want to quickly and conveniently monitor the cryptocurrency market.
      </p>
      {/* Thank you message */}
      <div className="mt-8 sm:mt-12 text-center">
        <span className="inline-block bg-gradient-to-r from-indigo-800 via-purple-900 to-pink-700 text-gray-100 px-4 sm:px-6 py-2 rounded-full shadow-lg font-semibold text-base sm:text-lg animate-bounce">Thank you for using CoinScope!</span>
      </div>
    </div>
  );
}

export default memo(AboutPage);