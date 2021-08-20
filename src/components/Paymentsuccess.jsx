import React from "react";
import Confetti from "react-confetti";
import axios from "axios";
import { API } from "../API";
import { useHistory, useParams, useLocation } from "react-router-dom";
function Paymentsuccess() {
  const { id } = useParams();
  const history = useHistory();
  const token = localStorage.getItem("token");
  const [orderDetails, setOrderDetails] = React.useState(null);
  let totalPrice = 0;
  React.useEffect(() => {
    getOrder();
  }, []);
  const getOrder = async () => {
    const res = await axios.get(
      `${API}/api/user/getOrderInfo/${id}`,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (res.data.order === null) history.push("/");
    else setOrderDetails(res.data.order.orders[0].product);
    console.log(res.data.order);
  };

  orderDetails?.map((item) => {
    return (totalPrice += Number(item.price) * Number(item.quantity));
  });
  console.log(totalPrice);
  return (
    <div>
      {orderDetails === null ? (
        ""
      ) : (
        <>
          <Confetti style={{ width: "100%" }} />
          <div
            style={{ display: "grid", placeItems: "center", marginTop: "5%" }}
          >
            <h1>Payment Successfull</h1>
            <div className="col-12 col-md-6 col-lg-5 mt__50 mb__80 mt-md-0 mb-md-0">
              <div className="order-review__wrapper">
                <h3 className="order-review__title">Your order</h3>
                <div className="checkout-order-review">
                  <table className="checkout-review-order-table">
                    <thead>
                      <tr>
                        <th className="product-name">Product</th>
                        <th className="product-total">Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orderDetails.map((item, index) => {
                        return (
                          <tr className="cart_item">
                            <td className="product-name">
                              {item.title}
                              <strong className="product-quantity">
                                ×{item.quantity}
                              </strong>
                            </td>
                            <td className="product-total">
                              <span className="cart_price">
                                Rs.{item.price}{" "}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                    <tfoot>
                      <tr className="cart-subtotal cart_item">
                        <th>Subtotal</th>
                        <td>
                          <span className="cart_price">Rs.{totalPrice}</span>
                        </td>
                      </tr>
                      <tr className="cart_item">
                        <th>Shipping</th>
                        <td>
                          <span className="cart_price">Rs. 0.00</span>
                        </td>
                      </tr>

                      <tr className="order-total cart_item">
                        <th>Total</th>
                        <td>
                          <strong>
                            <span className="cart_price amount">
                              Rs.{totalPrice}
                            </span>
                          </strong>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                  <div className="checkout-payment">
                    <p className="checkout-payment__policy-text">
                      Your personal data will be used to process your order,
                      support your experience throughout this website, and for
                      other purposes described in our
                      <a href="#">privacy policy</a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <a href="/">
              <button style={{ marginTop: "2rem" }}>Shop More</button>
            </a>
          </div>
        </>
      )}
    </div>
  );
}

export default Paymentsuccess;
