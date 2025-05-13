import { useMemo } from "react";
import { VictoryChart,VictoryLine,VictoryTheme,VictoryAxis,VictoryTooltip,VictoryVoronoiContainer} from "victory";

const vortexData = [
    { machNumber: 1.2, probability: 0.05 },
    { machNumber: 1.5, probability: 0.1 },
    { machNumber: 2.0, probability: 0.2 },
    { machNumber: 3.0, probability: 0.35 },
    { machNumber: 4.0, probability: 0.55 },
    { machNumber: 5.0, probability: 0.75 },
];


const MachNoSuperFlowVortexChart =()=>{
        
    //redefine the structure of the object that contains our data
    // we use memoization to evade multiple rerender calculations
    // we care when the data gets big

    const lineData = useMemo(() => 
        vortexData.map(d => ({ x: d.machNumber, y: d.probability }))
    , []);

    return(
        <VictoryChart theme={VictoryTheme.material}
            height={300} width={500} domainPadding={10}  domain={{ x: [1, 6], y: [0, 1] }}
            containerComponent={
                 <VictoryVoronoiContainer
                    labels={({ datum }) => `Mach: ${datum.x}\nProbabilitate: ${datum.y}`}
                    labelComponent={<VictoryTooltip cornerRadius={0} flyoutStyle={{ fill: "white" }} />}
                />
            }>
            <VictoryAxis label="Mach number" style={{ tickLabels:{angle:-45, fontSize:10}, axisLabel:{padding: 20}, }}/>
            <VictoryAxis dependentAxis label={"Vortex probability"} style={{ axisLabel:{padding: 30} , tickLabels:{ fontSize: 10} }}/>
            <VictoryLine data={lineData} style={{
                data: { stroke: "crimson", strokeWidth: 5}
            }}/>
        </VictoryChart>
    );
}

export default MachNoSuperFlowVortexChart