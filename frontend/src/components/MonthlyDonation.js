import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../AuthContext";
import { Typography } from "@mui/material";
import { Doughnut } from "react-chartjs-2";
// import { Chart } from "chart.js";
import Chart from 'chart.js/auto';
// Chart.register(Bar);
// Chart.register(category);

const MonthlyDonation = () => {
  const { loggedIn } = useContext(AuthContext);
  const [monthlyDonation, setMonthlyDonation] = useState([]);
  const chartContainerStyle = {
    height: "500px",
    width: "500px",
    margin: "auto", 
  };
  
  const MONTHS=["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
  useEffect(() => {
    if (loggedIn) {
      fetchMonthlyDonation();
    }
  }, [loggedIn]);

  const fetchMonthlyDonation = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }

      const response = await axios.get("http://localhost:5000/donation", {
        headers: {
          Authorization: token,
        },
      });

      const data = response.data;

      // Calculate monthly donation
      const DonationByMonth = {};
      data.forEach((item) => {
        const month = new Date(item.donationDate).getMonth();
        const quantity = item.amount;
        if (DonationByMonth[month]) {
            DonationByMonth[month] += quantity;
        } else {
            DonationByMonth[month] = quantity;
        }
      });

      setMonthlyDonation(DonationByMonth);
    } catch (error) {
      console.log("Error fetching monthly donation data:", error);
    }
  };

  const tagname = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "white",
        },
      },
    },
  };

  const chartData = {
    labels: Object.keys(monthlyDonation).map((month) => `${MONTHS[parseInt(month)]} `),
    datasets: [
      {
        label: "Total Donation Made in g",
        data: Object.values(monthlyDonation),
        backgroundColor: "rgba(233, 91, 133, 1)",
      },
    ],
  };

  return (
    <div className="monthly-Donation-container">
      {loggedIn ? (
        <div>
          <div className="monthly-Donation-heading">
            <h1>
              YOUR <span className="spending">MONTHLY DONATIONS MADE</span>
            </h1>
          </div>
          {Object.keys(monthlyDonation).length > 0 ? (
            <div className="monthly-donation-chart" style={chartContainerStyle}>
              <Doughnut data={chartData} options={tagname}/>
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
              You have not made any donations yet.
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
          Please log in to view the monthly donation.
        </Typography>
      )}
    </div>
  );
};

export default MonthlyDonation;
