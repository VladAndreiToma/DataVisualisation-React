import { useEffect, useState } from "react";
import { VictoryChart, VictoryBar, VictoryAxis, VictoryGroup, VictoryTheme, VictoryTooltip , VictoryLabel } from "victory";
import { useMemo } from "react";

// months to span the vaccines
const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];
// sampling ranndomly the data for each month 3 types of vaccines


const EnhancedVaccinesBarChart = () => {
    
    const initialData = useMemo(() => {
    return months.map((month) => ({
      month,
      dtp: Math.floor(100 + Math.random() * 50),
      rotavirus: Math.floor(100 + Math.random() * 35),
      mmr: Math.floor(100 + Math.random() * 20),
    }));
  }, []);

const [vaccineData, setVaccineData] = useState(initialData);

// now i destructure for grouping
const dtpData = vaccineData.map(d=>({x:d.month,y:d.dtp,label:`DTP: ${d.dtp}`}));
const rotavirusData = vaccineData.map(d=>({x:d.month,y:d.rotavirus,label:`Rotavirus: ${d.rotavirus}`}));
const mmrData = vaccineData.map(d=>({x:d.month,y:d.mmr,label:`MMR: ${d.mmr}`}));

useEffect(()=>{
    const interval = setInterval(()=>{
        setVaccineData((prevData)=>
            prevData.map((item)=>({
                ...item,
                dtp: item.dtp+Math.floor(Math.random()*10),
                rotavirus: item.rotavirus + Math.floor(Math.floor(Math.random()*8)),
                mmr: item.mmr+Math.floor(Math.random()*11),
            }))
        );
    }, 10000);
    return()=>clearInterval(interval);
},[])
    
    
    return(
        <>
        <VictoryChart domainPadding={20} theme={VictoryTheme.material} 
        animate={{ duration:1000, easing: 'bounce'}} height={300} width={700}
        >
            <VictoryAxis tickValues={months}
                style={{tickLabels:{fontSize:10,angle:-45,padding:15}}}
            />
            <VictoryAxis dependentAxis/>
            <VictoryGroup offset={12} colorScale={["#b22222", "crimson", "#333"]}>
                <VictoryBar
                    data={dtpData}
                    labels={({ datum }) => datum.label}
                    labelComponent={<VictoryTooltip />}
                    cornerRadius={{ top: 0 }}
                    barWidth={10}
                />
                <VictoryBar
                    data={rotavirusData}
                    labels={({ datum }) => datum.label}
                    labelComponent={<VictoryTooltip />}
                    cornerRadius={{ top: 0 }}
                    barWidth={10}
                />
                <VictoryBar
                    data={mmrData}
                    labels={({ datum }) => datum.label}
                    labelComponent={<VictoryTooltip />}
                    cornerRadius={{ top: 0 }}
                    barWidth={10}
                />
            </VictoryGroup>
        </VictoryChart>
        </>
    );
}

export default EnhancedVaccinesBarChart;