import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import MonthlySpending from "../components/MonthlySpending";

const ECOProgress = () => {
  // const doughnutChartRef = useRef(null);
  // const lineChartRef = useRef(null);
  // const barChartRef = useRef(null);

  // useEffect(() => {
  //   // Doughnut Chart Data
  //   const doughnutChartData = {
  //     labels: ["Category A", "Category B", "Category C"],
  //     datasets: [
  //       {
  //         label: "Data",
  //         data: [10, 15, 8],
  //         backgroundColor: [
  //           "rgba(255, 99, 132, 0.5)",
  //           "rgba(54, 162, 235, 0.5)",
  //           "rgba(255, 206, 86, 0.5)",
  //         ],
  //         borderColor: [
  //           "rgba(255, 99, 132, 1)",
  //           "rgba(54, 162, 235, 1)",
  //           "rgba(255, 206, 86, 1)",
  //         ],
  //         borderWidth: 1,
  //       },
  //     ],
  //   };

  //   // Line Chart Data
  //   const lineChartData = {
  //     labels: ["January", "February", "March", "April", "May", "June"],
  //     datasets: [
  //       {
  //         label: "Data",
  //         data: [10, 15, 8, 12, 6, 14],
  //         backgroundColor: "rgba(75, 192, 192, 0.5)",
  //         borderColor: "rgba(75, 192, 192, 1)",
  //         borderWidth: 2,
  //         fill: false,
  //       },
  //     ],
  //   };

  //   // Bar Chart Data
  //   const barChartData = {
  //     labels: ["Category X", "Category Y", "Category Z"],
  //     datasets: [
  //       {
  //         label: "Data",
  //         data: [8, 12, 10],
  //         backgroundColor: "rgba(153, 102, 255, 0.5)",
  //         borderColor: "rgba(153, 102, 255, 1)",
  //         borderWidth: 1,
  //       },
  //     ],
  //   };

  //   // Initialize Charts
  //   const initCharts = () => {
  //     // Doughnut Chart
  //     new Chart(doughnutChartRef.current, {
  //       type: "doughnut",
  //       data: doughnutChartData,
  //       options: {
  //         responsive: true,
  //       },
  //     });

  //     // Line Chart
  //     new Chart(lineChartRef.current, {
  //       type: "line",
  //       data: lineChartData,
  //       options: {
  //         responsive: true,
  //         scales: {
  //           y: {
  //             beginAtZero: true,
  //           },
  //         },
  //       },
  //     });

  //     // Bar Chart
  //     new Chart(barChartRef.current, {
  //       type: "bar",
  //       data: barChartData,
  //       options: {
  //         responsive: true,
  //         scales: {
  //           y: {
  //             beginAtZero: true,
  //           },
  //         },
  //       },
  //     });
  //   };

  //   initCharts();

  //   // Cleanup
  //   return () => {
  //     if (doughnutChartRef.current) {
  //       doughnutChartRef.current.destroy();
  //     }
  //     if (lineChartRef.current) {
  //       lineChartRef.current.destroy();
  //     }
  //     if (barChartRef.current) {
  //       barChartRef.current.destroy();
  //     }
  //   };
  // }, []);

  return (
    <div>
      {/* <div className="ECOChart">
        <div className="chart-container">
          <canvas ref={doughnutChartRef} id="doughnutChart" />
        </div>
        <div className="chart-container">
          <canvas ref={lineChartRef} id="lineChart" />
        </div>
        <div className="chart-container">
          <canvas ref={barChartRef} id="barChart" />
        </div>
      </div> */}
      <MonthlySpending/>
    </div>
  );
};

export default ECOProgress;
