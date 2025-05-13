import VerticalMenu from "../menus/VerticalMenu";
import AnimatedCpuPieChart from "./pie_charts/CpuUsageChart";
import LaserSpectrumPieChart from "./pie_charts/MultiLineLaserWLDistribution";

export default function PieVisuals(){
    return(
        <div className="page-container">
            <VerticalMenu/>
            <div className="generic-page-container">
                <b>CPU usage chart distribution...</b>
                <AnimatedCpuPieChart/>
                <b>Multiatomic laser levels with probability of certain color photons emission</b>
                <LaserSpectrumPieChart/>
            </div>
        </div>
    )
}