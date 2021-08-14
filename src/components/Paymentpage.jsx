import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { API } from "../API";
import { useDispatch } from "react-redux";
import { delteUserCart } from "../Actions/cartAction";

function Paymentpage() {
  const history = useHistory();
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  async function handlePayment() {
    const payment = await axios.patch(`${API}/api/order/update_order/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (payment) {
      dispatch(delteUserCart());
      history.push("/payment-success");
    }
  }
  return (
    <div>
      <Header />
      <div
        className="container "
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20%",
          marginTop: "10%",
        }}
      >
        <div className="row">
          <Button
            variant="primary"
            size="lg"
            className="mr-2"
            onClick={handlePayment}
          >
            Pay
          </Button>

          <a href="/">
            <Button variant="warning" size="lg">
              Cancel
            </Button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Paymentpage;
