import { memo } from "react";
import AssetDetail from "../components/AssetDetails";

function AssetPage() {
  return (
    <div className="p-2 sm:p-4">
      <AssetDetail />
    </div>
  );
}

export default memo(AssetPage);
