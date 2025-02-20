import dataseries from "../data/dataseries.json";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function ChartFromData() {
  const dataSensorA = dataseries[0].dataseries.map((point) => ({
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
        name: dataseries[0].name,
        data: dataSensorA,
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
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
