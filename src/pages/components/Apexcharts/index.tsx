import {
  AreaChart,
  AreaChartTwo,
  BarChart,
  LineChart,
  Candlestick,
  ColumnChart,
  BubbleChart,
  RadialBarChart,
  RadarChart,
  PolarAreaChart,
} from "@/components/components/apexcharts";

const Apexcharts = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <AreaChart />
      <AreaChartTwo />
      <BarChart />
      <LineChart />
      <Candlestick />
      <ColumnChart />
      <BubbleChart />
      <RadialBarChart />
      <RadarChart />
      <PolarAreaChart />
    </div>
  );
};

export default Apexcharts;
