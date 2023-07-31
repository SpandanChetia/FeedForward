import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../AuthContext";
import { Typography } from "@mui/material";
import { Line } from "react-chartjs-2";

const MonthlySpending = () => {
  const { loggedIn } = useContext(AuthContext);
  const [monthlySpending, setMonthlySpending] = useState([]);
  const MONTHS=["JANUARY","FEBRUAURY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
  const chartContainerStyle = {
    margin: "40px",
  };

  useEffect(() => {
    if (loggedIn) {
      fetchMonthlySpending();
    }
  }, [loggedIn]);

  const fetchMonthlySpending = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }

      const response = await axios.get("http://localhost:5000/inventory", {
        headers: {
          Authorization: token,
        },
      });

      const data = response.data;

      // Calculate monthly spending
      const spendingByMonth = {};
      data.forEach((item) => {
        const month = new Date(item.itemPurchaseDate).getMonth();
        const cost = item.itemCost;
        if (spendingByMonth[month]) {
          spendingByMonth[month] += cost;
        } else {
          spendingByMonth[month] = cost;
        }
      });

      setMonthlySpending(spendingByMonth);
    } catch (error) {
      console.log("Error fetching monthly spending:", error);
    }
  };

  const tagname = {
    plugins: {
      legend: {
        labels: {
          color: "white",
        },
      },
    },
  };

  const axis = {
    responsive: true,
    scales: {
      x: {
        grid: {
          color: "rgba(255,255,255, 0.2)", 
          borderColor: "rgba(233, 91, 133, 1)", 
          drawBorder: true, 
          borderWidth: 1, 
        },
        ticks: {
          color: "white"
        }
      },
      y: {
        grid:{
          color: "rgba(255,255,255, 0.2)",
          display: true,
        },
        ticks: {
          color: "rgba(233, 91, 133, 1)", 
        }
      },
    },
  };
  const customs = { ...axis, ...tagname};

  const chartData = {
    labels: Object.keys(monthlySpending).map((month) => `${MONTHS[parseInt(month)]}`),
    datasets: [
    {
        label: "Total Spendings in ₹",
        data: Object.values(monthlySpending),
        backgroundColor: "rgba(233, 91, 133, 1)",
        borderColor: "rgba(233, 91, 133, 0.8)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(233, 91, 133, 0.8)"
      },
    ],
    labelsStyle: {
      color: "rgba(233, 91, 133, 1)",
    },
  };

  return (
    <div className="monthly-spending-container">
      {loggedIn ? (
        <div>
          <div className="monthly-spending-heading">
            <h1>
              YOUR <span className="spending">MONTHLY SPENDINGS</span>
            </h1>
          </div>
          {Object.keys(monthlySpending).length > 0 ? (
            <div className="monthly-spending-chart" style={chartContainerStyle}>
              <Line data={chartData} options={customs}/>
            </div>
          ) : (
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "18px",
                fontWeight: "500",
                mt: "20px",
              }}
            >
              No data available for monthly spending.
            </Typography>
          )}
        </div>
      ) : (
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "30px",
            fontWeight: "700",
            color: "darkSalmon",
            mt: "50px",
          }}
        >
          Please log in to view the monthly spending.
        </Typography>
      )}
    </div>
  );
};

export default MonthlySpending;
