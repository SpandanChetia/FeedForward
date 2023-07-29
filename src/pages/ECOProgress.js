import React from "react";

import MonthlySpending from "../components/MonthlySpending";
import MonthlyQuantity from "../components/MonthlyQuantity";
import MonthlyDonation from "../components/MonthlyDonation";

const ECOProgress = () => {
  
  return (
    <div>
      <MonthlySpending/>
      <MonthlyQuantity/>
      <MonthlyDonation/>
    </div>
  );
};

export default ECOProgress;
