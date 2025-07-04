import AssetCard from "./AssetCard";

const mockStocks = [
    {
        name: "Apple Inc.",
        symbol: "AAPL",
        price: 195.28,
        image: "https://logo.clearbit.com/apple.com",
    },
    {
        name: "Microsoft Corp.",
        symbol: "MSFT",
        price: 410.23,
        image: "https://logo.clearbit.com/microsoft.com",
    },
    {
        name: "Google LLC",
        symbol: "GOOG",
        price: 141.67,
        image: "https://logo.clearbit.com/google.com",
    },
    {
        name: "Amazon.com Inc.",
        symbol: "AMZN",
        price: 178.89,
        image: "https://logo.clearbit.com/amazon.com",
    },
    {
        name: "Meta Platforms",
        symbol: "META",
        price: 320.14,
        image: "https://logo.clearbit.com/meta.com",
    },
];

export default function StockList() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {mockStocks.map((stock) => (
                <AssetCard
                    key={stock.symbol}
                    name={stock.name}
                    symbol={stock.symbol}
                    price={stock.price}
                    image={stock.image}
                />
            ))}
        </div>
    );
}
