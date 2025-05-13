import VerticalMenu from "../menus/VerticalMenu";
import LaserColorChart from "./scatter_charts/LaserColorChart";
import NoiseVsIntensityOfLightChart from "./scatter_charts/NoiseVsIntensityOfLightChart";

export default function ScatterVisuals(){
    return(
        <div className="page-container">
            <VerticalMenu/>
            <div className="generic-page-container">
                <b>Scatter plot of lasers mapped by color, wavelength and work medium</b>
                <LaserColorChart/>
                <b>Plot of sensor noise vs light intensity</b>
                <NoiseVsIntensityOfLightChart/>
            </div>
        </div>
    )
}