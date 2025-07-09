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
        <div
            onClick={() => navigate(`/asset/${id}`)}
            className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 rounded-3xl shadow-xl border border-gray-100 p-6 flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-2xl cursor-pointer min-h-[320px] w-full max-w-xs mx-auto group"
        >
            <div className="w-24 h-24 mb-4 flex items-center justify-center rounded-full bg-white/80 shadow-inner border-2 border-white">
                <img src={image} alt={name} className="w-16 h-16 object-contain" />
            </div>
            <h2 className="text-xl font-extrabold mb-1 text-gray-800 text-center group-hover:text-indigo-600 transition-colors duration-200 drop-shadow-sm">{name}</h2>
            <p className="uppercase text-purple-400 mb-2 tracking-widest text-sm font-semibold drop-shadow-sm">{symbol}</p>
            <p className="text-pink-600 font-bold text-2xl mb-2 drop-shadow-sm">${price.toLocaleString()}</p>
        </div>
    );
}
