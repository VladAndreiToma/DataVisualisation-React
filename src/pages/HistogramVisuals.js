import VerticalMenu from "../menus/VerticalMenu";
import TemperatureConductivityHistogram from "./histo_charts/ConductivityVsTemperatureChart";
import MachNoSuperFlowVortexChart from "./histo_charts/MachNoSuperFlowVortexChart";

export default function HistogramVisuals(){
    return(
        <div className="page-container">
            <VerticalMenu/>
            <div className="generic-page-container">
                <b>Electrical conductivity relative to temperature</b>
                <TemperatureConductivityHistogram/>
                <b>Probability of vortex formation in supersonic flows relative to Mach number, at nozzle exit</b>
                <MachNoSuperFlowVortexChart/>
            </div>
        </div>
    )
}