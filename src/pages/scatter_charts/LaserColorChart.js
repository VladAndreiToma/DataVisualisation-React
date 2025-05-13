import { useMemo } from "react";
import {
  VictoryChart,
  VictoryScatter,
  VictoryAxis,
  VictoryTooltip,
  VictoryTheme
} from "victory";

const LaserColorChart = () => {
    // defining what might come from a server
    const laserData = [
        { name: "Laser HeNe", wavelength: 632.8, color: "red" },
        { name: "Laser diode 650nm", wavelength: 650, color: "red" },
        { name: "Laser diode 532nm", wavelength: 532, color: "green" },
        { name: "Laser Ar+ 488nm", wavelength: 488, color: "blue" },
        { name: "Laser Ar+ 514nm", wavelength: 514, color: "cyan" },
        { name: "Laser UV 355nm", wavelength: 355, color: "violet" },
        { name: "Laser IR Nd:YAG", wavelength: 1064, color: "#555" }, // infra
    ];

    // using memo for efficient data storage
  const data = useMemo( ()=> laserData.map((laser, index) => ({
    x: laser.wavelength,
    y: 1,
    label: `${laser.name} (${laser.wavelength} nm)`,
    fill: laser.color,
  })));

  return (
    <VictoryChart
    width={600} height={300}
      domain={{ x: [300, 1100], y: [0.5, 1.5] }}
      theme={VictoryTheme.material}
    >
      <VictoryAxis
        label="Lungime de undă (nm)"
        style={{
          axisLabel: { padding: 30 },
          tickLabels: { fontSize: 10 }
        }}
      />
      <VictoryAxis dependentAxis tickFormat={() => ""} />
      <VictoryScatter
        data={data}
        size={8}
        style={{
          data: {
            fill: ({ datum }) => datum.fill,
          },
        }}
        labels={({ datum }) => datum.label}
        labelComponent={<VictoryTooltip dy={-10} />}
      />
    </VictoryChart>
  );
};

export default LaserColorChart;
