import VerticalMenu from "../menus/VerticalMenu";
import TotalSurgeriesAreaChart from "./area_charts/DynamicSurgeryArea";
import SurgeriesStackedAreaChart from "./area_charts/MultipleSurgeryTypesArea";
import SurgeriesOverTimeArea from "./area_charts/SurgeriesAreaChart";

export default function AreaVisuals(){
    return(
        <div className="page-container">
            <VerticalMenu/>
            <div className="generic-page-container">
                <b>Hospital surgeries</b>
                <SurgeriesOverTimeArea/>
                <b>Hospital surgeries on categories</b>
                <SurgeriesStackedAreaChart/>
                <b>Hospital total surgeries</b>
                <TotalSurgeriesAreaChart/>
            </div>
        </div>
    )
}