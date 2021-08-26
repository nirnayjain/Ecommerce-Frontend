import React, { useEffect } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";
import { removeFromWishlist, viewWishlist } from "../Actions/wishlishAction";
import { useDispatch, useSelector } from "react-redux";

function Mywishlist() {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const message = useSelector((state) => state.wishlist.message);
  console.log(wishlistItems, message, "ITEMS");
  useEffect(() => {
    dispatch(viewWishlist());
  }, []);

  function deleteWishlist(id) {
    dispatch(removeFromWishlist(id));
  }
  if (message === "Deleted Successfully") {
    window.location.reload();
  }
  return (
    <div>
      <Header />
      <Navigation />
      <div class="table-responsive mt-5 mb-5 container">
        <table class="table">
          <tr>
            <td>
              <h5 className="ml-4">{`My Wishlist (${wishlistItems.length})`}</h5>
            </td>
          </tr>
          {wishlistItems.map((el) => {
            return (
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
                        src={el.product.image[0]}
                        alt="product"
                      />
                    </a>
                    <div style={{ marginLeft: "2rem" }}>
                      <a href="#">
                        <p>{el.product.title}</p>
                      </a>
                      <a href="#">
                        <p>Rs .{el.product.sale_price}</p>
                      </a>
                    </div>
                  </div>
                </td>
                <td>
                  <DeleteIcon
                    onClick={() => deleteWishlist(el.product._id)}
                    style={{ cursor: "pointer" }}
                  />
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default Mywishlist;
