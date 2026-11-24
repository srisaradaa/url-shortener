import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
  Filler,
  plugins,
} from "chart.js";

ChartJS.register(
  BarElement,
  Tooltip,
  CategoryScale,
  LinearScale,
  Legend,
  Filler
);


const Graph = ({ graphData }) => {
  const label = graphData?.map((item) => item.clickDate);
  const clickCounts = graphData?.map((item) => item.count);

  const data = {
    labels: graphData.length > 0
    ? label
    : ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],

    datasets: [
      {
        label: "Total Clicks",
        data: graphData.length > 0
        ? clickCounts
        : [1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1],
        backgroundColor:
         graphData.length > 0 ? "#3b82f6" : "rgba(54, 162, 235, 0.1)",
        barThickness: 20
      }
    ]
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: true
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            if (Number.isInteger(value)) {
              return value.toString();
            }
            return "";
          }
        },
        title: {
          display: true,
          text: "Number of Clicks",
          font: {
            family: "Arial",
            size: 16,
            weight: "bold",
            color: "#FF0000",
          },
        }
      },
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Date",
          font: {
            family: "Arial",
            size: 16,
            weight: "bold",
            color: "#FF0000",
          },
        }
      }
    }

  }

  return (
    <Bar options={options} data={data}></Bar>
  )
}

export default Graph