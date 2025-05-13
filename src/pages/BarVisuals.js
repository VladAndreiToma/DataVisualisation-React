import VerticalMenu from "../menus/VerticalMenu";
import EnhancedVaccinesBarChart from "./bar_charts/EhancedVaccinesBarChart";
import VaccinesBarChart from "./bar_charts/VaccinesBarChart";

export default function BarVisuals(){
    return(
        <div className="page-container">
            <VerticalMenu/>
            <div className="generic-page-container">
                <b>Vaccines administrated per months</b>
                <VaccinesBarChart/>
                <b>Other vaccines per months animated</b>
                <EnhancedVaccinesBarChart/>
            </div>
        </div>
    );
}