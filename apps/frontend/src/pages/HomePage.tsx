import { useNavigate } from "react-router-dom";

export default function HomePage () {
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate('/dashboard')}>Dashboard</button>
        </div>
    );
}