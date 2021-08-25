import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";

function Mywishlist() {
  return (
    <div>
      <Header />
      <Navigation />
      <div class="table-responsive mt-5 mb-5 container">
        <table class="table">
          <tr>
            <td>
              <h5 className="ml-4">My Wishlist (3)</h5>
            </td>
          </tr>
          <tr>
            <td>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <a href="/order-details/2">
                  <img
                    style={{ width: "100px" }}
                    src="assets/images/home-cosmetics/pr-04.jpg"
                    alt="product"
                  />
                </a>
                <div style={{ marginLeft: "2rem" }}>
                  <a href="#">
                    <p>Product Name</p>
                  </a>
                  <a href="#">
                    <p>Product Details</p>
                  </a>
                </div>
                <DeleteIcon style={{ marginLeft: "50%", cursor: "pointer" }} />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <a href="/order-details/2">
                  <img
                    style={{ width: "100px" }}
                    src="assets/images/home-cosmetics/pr-04.jpg"
                    alt="product"
                  />
                </a>
                <div style={{ marginLeft: "2rem" }}>
                  <a href="#">
                    <p>Product Name</p>
                  </a>
                  <a href="#">
                    <p>Product Details</p>
                  </a>
                </div>
                <DeleteIcon style={{ marginLeft: "50%" }} />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <a href="/order-details/2">
                  <img
                    style={{ width: "100px" }}
                    src="assets/images/home-cosmetics/pr-04.jpg"
                    alt="product"
                  />
                </a>
                <div style={{ marginLeft: "2rem" }}>
                  <a href="#">
                    <p>Product Name</p>
                  </a>
                  <a href="#">
                    <p>Product Details</p>
                  </a>
                </div>
                <DeleteIcon style={{ marginLeft: "50%", cursor: "pointer" }} />
              </div>
            </td>
          </tr>
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default Mywishlist;
