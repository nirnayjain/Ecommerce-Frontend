import React,{useState} from "react";
import Categoryfilter from "./Categoryfilter";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";
import Productlist from "./Productlist";
import Shopbanner from "./Shopbanner";

function Shop() {
  const [products, setProducts] = useState(null);
  return (
    <div>
      <Header />
      <Navigation />
      <Shopbanner />
      <div className="container">
        <div className="row">
          <Categoryfilter setProducts={setProducts} products={products}/>
          <Productlist setProducts={setProducts} products={products}/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Shop;
