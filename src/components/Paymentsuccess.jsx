import React from "react";
import Confetti from "react-confetti";
import { useHistory } from "react-router-dom";

function Paymentsuccess() {
  const history = useHistory();
  return (
    <div>
      <Confetti style={{ width: "100%" }} />
      <div style={{ display: "grid", placeItems: "center", marginTop: "20%" }}>
        <h1>Payment Successfull</h1>
        <button
          onClick={() => {
            history.push("/");
          }}
        >
          Shop More
        </button>
      </div>
    </div>
  );
}

export default Paymentsuccess;
