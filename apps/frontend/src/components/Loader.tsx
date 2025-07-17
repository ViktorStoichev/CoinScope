// Loader: Animated spinner for indicating loading state in the app
// Used in places where data is being fetched or processed
import { memo } from "react";

function Loader() {
    return (
        <div className="w-full flex flex-col items-center justify-center py-8 sm:py-16">
            {/* Animated spinner for visual feedback */}
            <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-indigo-400 border-t-transparent rounded-full animate-spin mb-2 sm:mb-4"></div>
            {/* Loading text for accessibility and clarity */}
            <span className="text-base sm:text-lg text-gray-600 font-medium">Loading...</span>
        </div>
    );
}

// Memoize component for performance
export default memo(Loader);
