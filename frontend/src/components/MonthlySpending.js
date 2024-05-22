import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../AuthContext";
import { Typography } from "@mui/material";
import { Line } from "react-chartjs-2";

const MonthlySpending = () => {
  const { loggedIn } = useContext(AuthContext);
  const [monthlySpending, setMonthlySpending] = useState([]);
  const [loading, setLoading] = useState(true);
  const MONTHS = [
    "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
    "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
  ];

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
    } finally {
      setLoading(false);
    }
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "white",
        },
      },
    },
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
        grid: {
          color: "rgba(255,255,255, 0.2)",
          display: true,
        },
        ticks: {
          color: "rgba(233, 91, 133, 1)",
        }
      },
    },
  };

  const chartData = {
    labels: MONTHS,
    datasets: [
      {
        label: "Total Spendings in ₹",
        data: Array.from({ length: 12 }, (_, i) => monthlySpending[i] || 0),
        backgroundColor: "rgba(233, 91, 133, 1)",
        borderColor: "rgba(233, 91, 133, 0.8)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(233, 91, 133, 0.8)"
      },
    ],
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column',
  };

  const chartContainerStyle = {
    width: '800px',
    // height: '400px'
  };

  return (
    <div className="monthly-spending-container" style={containerStyle}>
      {loggedIn ? (
        <div>
          <div className="monthly-spending-heading">
            <h1>
              YOUR <span className="spending">MONTHLY SPENDINGS</span>
            </h1>
          </div>
          {loading ? (
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "18px",
                fontWeight: "500",
                mt: "20px",
              }}
            >
              Loading data...
            </Typography>
          ) : Object.keys(monthlySpending).length > 0 ? (
            <div className="monthly-spending-chart" style={chartContainerStyle}>
              <Line data={chartData} options={chartOptions} />
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
