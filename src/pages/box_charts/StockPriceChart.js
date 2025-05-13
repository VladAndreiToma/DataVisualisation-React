import React from "react";
import { VictoryChart, VictoryBoxPlot, VictoryAxis, VictoryTheme, VictoryTooltip, VictoryLabel } from "victory";

// Financial data for the closing stock prices
const stockPrices = [
  { x: "Apple", y: [150, 155, 160, 162, 167, 170, 175, 160, 162, 165, 168, 170, 172, 169, 160, 158, 165, 172, 175, 180, 190, 200, 210, 220, 205, 200, 195, 188, 180, 175] },
  { x: "Tesla", y: [600, 615, 620, 630, 640, 650, 665, 640, 645, 630, 615, 600, 590, 580, 570, 560, 570, 580, 590, 600, 610, 620, 635, 645, 630, 620, 610, 600, 590, 580] },
  { x: "Amazon", y: [3200, 3250, 3300, 3350, 3400, 3420, 3500, 3400, 3350, 3250, 3200, 3150, 3100, 3050, 3000, 2900, 2950, 3050, 3100, 3200, 3300, 3400, 3450, 3500, 3550, 3600, 3650, 3700, 3750, 3800] },
  { x: "Google", y: [2800, 2850, 2900, 2950, 3000, 3050, 3100, 3000, 2950, 2850, 2800, 2750, 2700, 2650, 2600, 2500, 2550, 2650, 2700, 2800, 2900, 3000, 3100, 3150, 3200, 3300, 3400, 3500, 3600, 3700] },
  { x: "Microsoft", y: [270, 275, 280, 285, 290, 295, 300, 295, 290, 285, 280, 275, 270, 265, 260, 255, 250, 245, 240, 235, 230, 225, 220, 215, 210, 205, 200, 195, 190, 185] },
  { x: "Meta", y: [350, 355, 360, 370, 380, 385, 390, 375, 370, 365, 360, 355, 350, 340, 330, 325, 320, 315, 310, 305, 300, 290, 280, 270, 260, 250, 240, 230, 220, 210] }
];

const StockPricesChart = () => (
  <VictoryChart width={600} height={300} domainPadding={20} theme={VictoryTheme.material}>
    {/* Adding labels to X and Y axes */}
    <VictoryAxis 
      style={{ tickLabels: { angle: -45 } }}
      label="Companies"  // X-axis label
    />
    <VictoryAxis 
      dependentAxis 
      label="Price (USD)"  // Y-axis label
    />
    <VictoryBoxPlot
      data={stockPrices}
      x="x"
      y="y"
      boxWidth={20}
      style={{
        data: {fill:"crimson"},
        labels: { fontSize: 10, padding: 5 }
      }}
      labelComponent={<VictoryTooltip />}
    />
  </VictoryChart>
);

export default StockPricesChart;
