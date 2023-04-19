import React from "react";
import { Doughnut } from "react-chartjs-2";
import percentRound from "percent-round";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

const Stats = ({ pred }) => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  let prediction = { ...pred?.data?.probability };
  console.log(prediction);

  const data = {
    labels: ["Acquired", "Failed or Closed", "IPO", "Successfull"],
    datasets: [
      {
        label: "% Probability",
        data: [prediction[0], prediction[1], prediction[2], prediction[3]],
        backgroundColor: [
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <h1>Predictions for Future Outcome Probability</h1>
      <div style={{ width: "60%", height: "60%" }}>
        <Doughnut data={data} />
      </div>
    </>
  );
};

export default Stats;
