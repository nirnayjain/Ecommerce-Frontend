import React from "react";
import Confetti from "react-confetti";

function Paymentsuccess() {
  return (
    <div>
      <Confetti style={{ width: "100%" }} />
      <div style={{ display: "grid", placeItems: "center", marginTop: "20%" }}>
        <h1>Payment Successfull</h1>
        <a href="/">
          <button>Shop More</button>
        </a>
      </div>
    </div>
  );
}

export default Paymentsuccess;
