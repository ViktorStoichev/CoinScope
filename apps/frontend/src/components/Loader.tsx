import { memo } from "react";

function Loader() {
    return (
        <div className="w-full flex flex-col items-center justify-center py-8 sm:py-16">
            <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-indigo-400 border-t-transparent rounded-full animate-spin mb-2 sm:mb-4"></div>
            <span className="text-base sm:text-lg text-gray-600 font-medium">Loading...</span>
        </div>
    );
}

export default memo(Loader);
