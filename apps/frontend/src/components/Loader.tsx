export default function Loader() {
    return (
        <div className="w-full flex flex-col items-center justify-center py-16">
            <div className="w-16 h-16 border-4 border-indigo-400 border-t-transparent rounded-full animate-spin mb-4"></div>
            <span className="text-lg text-gray-600 font-medium">Loading...</span>
        </div>
    );
}
