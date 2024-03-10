import React from "react";
import GaugeChart from "react-gauge-chart";
import "./SensorChart.scss";
function SensorChart(props) {
  const chartStyle = {
    height: 100,
    width: 558,
  };
  return (
    <div>
      <GaugeChart
        id="gauge-chart1"
        style={chartStyle}
        nrOfLevels={2}
        arcsLength={[0.5, 0.5]}
        colors={["#FF5F6D", "#00FF00"]}
        percent={0.6}
        arcPadding={0.02}
        textColor="#464E5F"
        gauge-chart1="#464E5F"
        formatTextValue={(value) => `${value.toFixed(2)}%`}
        animate={true}
      />
    </div>
  );
}

export default SensorChart;
