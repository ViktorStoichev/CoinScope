// Loader: Animated spinner for indicating loading state in the app
// Used in places where data is being fetched or processed
import { memo } from "react";

function Loader() {
    return (
        <div className="w-full flex flex-col items-center justify-center py-8 sm:py-16">
            {/* Animated spinner for visual feedback */}
            <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-indigo-700 border-t-transparent rounded-full animate-spin mb-2 sm:mb-4"></div>
            {/* Loading text for accessibility and clarity */}
            <span className="text-base sm:text-lg text-gray-200 font-medium text-center max-w-md sm:max-w-lg px-4 py-2 rounded-xl">
              Hang tight!<br />
              <span className="text-indigo-300 font-bold">Coincap is fetching the latest crypto magic...</span><br />
              <span className="text-pink-300">Sometimes it takes a moment, but good things come to those who wait 🚀</span>
            </span>
        </div>
    );
}

// Memoize component for performance
export default memo(Loader);
