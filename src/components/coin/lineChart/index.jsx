import { Line } from "react-chartjs-2";
import { Chart as ChartJS, scales, Ticks } from "chart.js/auto";
import { ConvertNumber } from "../../../functions/converNumber";

const LineChart = ({ chartData, priceType, multiAxis }) => {

  const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },scales:{
      y:{
        ticks:{
          //includes a doller sign in ticks
          callback:function(value,index,ticks){
            if(priceType=="prices") return "$"+value.toLocaleString();
            else{
              return "$"+ConvertNumber(value);
            }
          },
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default LineChart;