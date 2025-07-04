type Props = {
    name: string;
    symbol: string;
    price: number;
    image: string;
};

export default function AssetCard({ name, symbol, price, image }: Props) {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-4">
            <img src={image} alt={name} className="w-12 h-12" />
            <div>
                <h2 className="text-lg font-semibold">{name} ({symbol.toUpperCase()})</h2>
                <p className="text-green-600 font-bold">${price.toLocaleString()}</p>
            </div>
        </div>
    );
}
