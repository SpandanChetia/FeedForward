import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../AuthContext";
import { Typography } from "@mui/material";
import { Bar } from "react-chartjs-2";

const MonthlyQuantity = () => {
  const { loggedIn } = useContext(AuthContext);
  const [monthlyQuantity, setMonthlyQuantity] = useState([]);
  const MONTHS=["JANUARY","FEBRUAURY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
  
  useEffect(() => {
    if (loggedIn) {
      fetchMonthlyQuantity();
    }
  }, [loggedIn]);

  const fetchMonthlyQuantity = async () => {
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

      // Calculate monthly quantity
      const QuantityByMonth = {};
      data.forEach((item) => {
        const month = new Date(item.itemPurchaseDate).getMonth();
        const quantity = item.itemQuantity;
        if (QuantityByMonth[month]) {
            QuantityByMonth[month] += quantity;
        } else {
            QuantityByMonth[month] = quantity;
        }
      });

      setMonthlyQuantity(QuantityByMonth);
    } catch (error) {
      console.log("Error fetching monthly quantity:", error);
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

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column',
  };

  const chartContainerStyle = {
    width: '800px',
    height: '400px',
  };


  const customs = { ...axis, ...tagname};
  const chartData = {
    labels: Object.keys(monthlyQuantity).map((month) => `${MONTHS[parseInt(month)]}`),
    datasets: [
      {
        label: "Total Quantity Purchased in g",
        data: Object.values(monthlyQuantity),
        backgroundColor: "rgba(233, 91, 133, 1)",
      },
    ],
  };

  return (
    <div className="monthly-Quantity-container" style={containerStyle}>
      {loggedIn ? (
        <div>
          <div className="monthly-Quantity-heading">
            <h1>
              YOUR <span className="spending">MONTHLY QUANTITY PURCHASED</span>
            </h1>
          </div>
          {Object.keys(monthlyQuantity).length > 0 ? (
            <div className="monthly-quantity-chart" style={chartContainerStyle}>
              <Bar data={chartData} options={customs}/>
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
              No data available for monthly quantity purchased.
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
          Please log in to view the monthly quantity purchased.
        </Typography>
      )}
    </div>
  );
};

export default MonthlyQuantity;
