import VerticalMenu from "../menus/VerticalMenu";
import StockPricesChart from "./box_charts/StockPriceChart";
import WebsiteTrafficBoxChart from "./box_charts/WebsitesTrafficBoxChart";

export default function BoxVisuals(){
    return(
        <div className="page-container">
            <VerticalMenu/>
            <div className="generic-page-container">
                <b>Stock prices for different companies...</b>
                <StockPricesChart/>
                <b>Website traffic over the year...</b>
                <WebsiteTrafficBoxChart/>
            </div>
        </div>
    );
}