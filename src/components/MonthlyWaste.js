import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../AuthContext";
import { Typography } from "@mui/material";
import { Bar } from "react-chartjs-2";

const MonthlyWaste = () => {
  const { loggedIn } = useContext(AuthContext);
  const [MonthlyWaste, setMonthlyWaste] = useState([]);
  const MONTHS=["JANUARY","FEBRUAURY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];

  useEffect(() => {
    if (loggedIn) {
      fetchMonthlyWaste();
    }
  }, [loggedIn]);

  const fetchMonthlyWaste = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }

      const response = await axios.get("http://localhost:5000/waste", {
        headers: {
          Authorization: token,
        },
      });

      const data = response.data;

      // Calculate monthly waste
      const wasteByMonth = {};
      data.forEach((item) => {
        const month = new Date(item.foodWasteDate).getMonth();
        const quantity = item.foodQuantity;
        if (wasteByMonth[month]) {
          wasteByMonth[month] += quantity;
        } else {
          wasteByMonth[month] = quantity;
        }
      });

      setMonthlyWaste(wasteByMonth);
    } catch (error) {
      console.log("Error fetching monthly waste:", error);
    }
  };

  const chartData = {
    labels: Object.keys(MonthlyWaste).map((month) => `${MONTHS[parseInt(month)]}`),
    datasets: [
      {
        label: "Total Waste ",
        data: Object.values(MonthlyWaste),
        backgroundColor: "rgba(233, 91, 133, 1)",
      },
    ],
  };

  return (
    <div className="monthly-spending-container">
      {loggedIn ? (
        <div>
          <div className="monthly-spending-heading">
            <h1>
              YOUR <span className="spending">MONTHLY WASTE</span>
            </h1>
          </div>
          {Object.keys(MonthlyWaste).length > 0 ? (
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
              No data available for monthly waste.
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
          Please log in to view the monthly waste.
        </Typography>
      )}
    </div>
  );
};

export default MonthlyWaste;
