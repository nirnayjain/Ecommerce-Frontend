import React, { useEffect, useState } from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
import axios from "axios";
import { API } from "../API";

function Address() {
  const token = localStorage.getItem("token");
  const [userOrders, setuserOrders] = useState([]);
  let orders = [];
  useEffect(() => {
    async function getuserOrders() {
      const order = await axios.get(`${API}/api/order/user_order`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setuserOrders(order.data.userOrder);
    }
    getuserOrders();
  }, []);
  userOrders.map((el) => {
    return orders.push(el.orders);
  });
  console.log(orders);
  return (
    <div>
      <Header />
      <Navigation />
      <div className="conatiner">
        <div className="mt-5 mb-5 container">
          <h3 className="mt-3 ml-3 mb-5">Your Addresses</h3>
          <div className="row mr-3 ml-3">
            {orders.map((item) => {
              return item.map((el) => {
                return (
                  <div className="col-4 w-25 bg-light border p-2">
                    <h6>
                      {el.firstName} {el.lastName}
                    </h6>
                    <p>{`${el.address} ${el.city} ${el.state} ${el.country} ${el.pinCode}`}</p>
                    <p>
                      <span className="font-weight-bold">Phone:</span>{" "}
                      {el.phone}
                    </p>
                    <button
                      style={{ pointerEvents: "none" }}
                      className="border-0 p-0"
                    >
                      Set Default
                    </button>
                  </div>
                );
              });
            })}
            {/* <div className="col-3 w-25 bg-light border p-2">
              <h6>Name</h6>
              <p>Address</p>
              <p>Phone</p>
              <button className="border-0">Edit</button>
              <button className="border-0">Remove</button>
              <button className="border-0">Set Default</button>
            </div>
            <div className="col-3 w-25 bg-light border p-2">
              <h6>Name</h6>
              <p>Address</p>
              <p>Phone</p>
              <button className="border-0">Edit</button>
              <button className="border-0">Remove</button>
              <button className="border-0">Set Default</button>
            </div>
            <div className="col-3 w-25 bg-light border p-2">
              <h6>Name</h6>
              <p>Address</p>
              <p>Phone</p>
              <button className="border-0">Edit</button>
              <button className="border-0">Remove</button>
              <button className="border-0">Set Default</button>
            </div>
            <div className="col-3 w-25 bg-light border p-2">
              <h6>Name</h6>
              <p>Address</p>
              <p>Phone</p>
              <button className="border-0">Edit</button>
              <button className="border-0">Remove</button>
              <button className="border-0">Set Default</button>
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Address;
