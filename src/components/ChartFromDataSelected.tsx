import { Button } from "@mui/material";
import dataseries from "../data/dataseries.json";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useState } from "react";

export default function ChartFromDataSelected() {
  const [chartIndex, setChartIndex] = useState(0);
  const sensorButtons = [
    "Sensor_A",
    "Sensor_B",
    "Sensor_C",
    "Sensor_D",
    "Sensor_E",
  ];
  const dataSensor = dataseries[chartIndex].dataseries.map((point) => ({
    x: new Date(point.date).getTime(),
    y: point.value,
  }));

  const options: Highcharts.Options = {
    title: {
      text: "",
    },
    xAxis: {
      plotLines: [
        {
          color: "#FF0000",
          width: 2,
          value: 5.5,
        },
      ],
      type: "datetime",
      dateTimeLabelFormats: {
        day: "%d/%m/%Y",
        week: "%d/%m/%Y",
        month: "%d/%m/%Y",
        year: "%d/%m/%Y",
      },
      title: {
        text: "Time",
      },
    },
    yAxis: {
      visible: false,
      title: {
        text: "Progress",
      },
    },
    series: [
      {
        type: "line",
        name: dataseries[chartIndex].name,
        data: dataSensor,
      },
    ],
    credits: {
      enabled: false,
    },
    tooltip: {
      formatter: function () {
        return `<b>${this.series.name}</b><br/>
                Date: ${Highcharts.dateFormat("%Y-%m-%d", this.x)}<br/>
                Value: ${this.y}`;
      },
    },
  };

  return (
    <div>
      <h1>Sensor Data Chart</h1>
      {sensorButtons.map((sensor, index) => (
        <Button key={sensor} onClick={() => setChartIndex(index)}>
          {sensor}
        </Button>
      ))}
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
