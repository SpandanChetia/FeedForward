import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../AuthContext";
import { Typography } from "@mui/material";
import { Bar } from "react-chartjs-2";

const MonthlySpending = () => {
  const { loggedIn } = useContext(AuthContext);
  const [monthlySpending, setMonthlySpending] = useState([]);

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

  const chartData = {
    labels: Object.keys(monthlySpending).map((month) => `Month ${parseInt(month) + 1}`),
    datasets: [
      {
        label: "Total Spending",
        data: Object.values(monthlySpending),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  return (
    <div className="monthly-spending-container">
      {loggedIn ? (
        <div>
          <div className="monthly-spending-heading">
            <h1>
              YOUR <span className="spending">MONTHLY SPENDING</span>
            </h1>
          </div>
          {Object.keys(monthlySpending).length > 0 ? (
            <div className="monthly-spending-chart">
              <Bar data={chartData} />
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
