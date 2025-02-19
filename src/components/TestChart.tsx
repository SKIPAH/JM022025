import { useRef } from "react";
import * as HighCharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import dataseries from "../data/dataseries.json";

const options: HighCharts.Options = {
  credits: {
    enabled: false,
  },
  title: {
    text: "My chart",
  },
  series: [
    {
      type: "line",
      data: [1, 5, 3],
    },
    {
      type: "line",
      data: [2, 4, 6],
    },
  ],
};
const TestChart = (props: HighchartsReact.Props) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  return (
    <div className="chart-container">
      <HighchartsReact
        highcharts={HighCharts}
        options={options}
        ref={chartComponentRef}
        {...props}
      ></HighchartsReact>
    </div>
  );
};
export default TestChart;
