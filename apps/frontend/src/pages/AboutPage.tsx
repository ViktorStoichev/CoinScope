export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 text-gray-800 animate-fade-in">
      <h1 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">About CoinScope</h1>
      <p className="text-lg mb-6 leading-relaxed">
        <span className="font-semibold">CoinScope</span> is a modern web application designed to provide users with an easy and intuitive way to track cryptocurrencies in real time. With CoinScope, you can:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Browse an up-to-date list of the most popular cryptocurrencies</li>
        <li>Search and filter coins by name or symbol</li>
        <li>View detailed information for each coin – price, market cap, volume, and more</li>
        <li>Track dynamic price charts for the last several days</li>
        <li>Enjoy a modern, minimalist, and responsive design</li>
      </ul>
      <p className="mb-4 text-lg">
        The app uses the <span className="font-semibold">CoinGecko API</span> for the most accurate and reliable data. All features are built with the latest web technologies – React, TypeScript, Tailwind CSS, Zustand, and Chart.js.
      </p>
      <p className="mb-4 text-lg">
        <span className="font-semibold">CoinScope</span> is suitable for both beginners and advanced users who want to quickly and conveniently monitor the cryptocurrency market.
      </p>
      <div className="mt-12 text-center">
        <span className="inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-2 rounded-full shadow-lg font-semibold text-lg animate-bounce">Thank you for using CoinScope!</span>
      </div>
    </div>
  );
} 