import { useNavigate } from "react-router-dom";


type Props = {
    id: string;
    name: string;
    symbol: string;
    price: number;
    image: string;
};

export default function AssetCard({ id, name, symbol, price, image }: Props) {
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`/asset/${id}`)}
            className="bg-white dark:bg-gray-700 rounded-2xl shadow-md p-4 flex flex-col items-center transition hover:scale-105 hover:shadow-lg cursor-pointer">
            <img src={image} alt={name} className="w-16 h-16 mb-2" />
            <h2 className="text-lg font-bold">{name}</h2>
            <p className="uppercase text-gray-500 mb-1">{symbol}</p>
            <p className="text-green-600 font-semibold">${price.toLocaleString()}</p>

        </div>
    );
}
