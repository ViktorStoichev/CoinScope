// Asset details page for CoinScope. Shows chart and coin info.
import { memo } from "react";
import AssetDetail from "../components/AssetDetails";

function AssetPage() {
  return (
    <div className="p-2 sm:p-4">
      {/* Main asset details and chart */}
      <AssetDetail />
    </div>
  );
}

export default memo(AssetPage);
