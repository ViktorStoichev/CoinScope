import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AssetPage from "./pages/AssetPage";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";

export default function App() {
  return (<>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/asset/:id" element={<AssetPage />} />
      </Routes>
    </Router>
  </>
  );
}
