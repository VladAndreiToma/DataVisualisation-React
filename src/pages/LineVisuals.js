import VerticalMenu from "../menus/VerticalMenu";
import LightAbsorbanceChart from "./line_charts/LightAbsorbanceChart";

export default function LineVisuals(){
    return(
        <div className="page-container">
            <VerticalMenu/>
            <div className="generic-page-container">
                <b>The absorption of light with respect to lambda in UV domain. A spectroscopy topic...</b>
                <LightAbsorbanceChart/>
            </div>
        </div>
    )
}