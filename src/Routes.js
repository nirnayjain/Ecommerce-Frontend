import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Bottombanner from "./components/Bottombanner";
import Categorybanner from "./components/Categorybanner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Newproducts from "./components/Newproducts";
import Productrow from "./components/Productrow";
import Producdetails from "./components/Producdetails";
import Shop from "./components/Shop";
import Shoppingcart from "./components/Shoppingcart";
import Checkout from "./components/Checkout";
import Paymentpage from "./components/Paymentpage";
import Paymentsuccess from "./components/Paymentsuccess";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Allproductlist from "./components/Allproductlist";
import Checkoutlogin from "./components/Checkoutlogin";
import Comingsoon from "./components/Comingsoon";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Comingsoon />
        </Route>
        <Route path="/view" exact>
          <Header />
          <Navigation />
          <Hero />
          {/* <Productrow /> */}
          <Categorybanner />
          <Newproducts />
          <Bottombanner />
          <Footer />
        </Route>
        <Route path="/productDetails/:id" exact component={Producdetails} />
        <Route path="/allProducts/:category" exact component={Allproductlist} />
        <Route path="/shop/:subCategory" exact component={Shop} />
        <Route path="/cart" exact component={Shoppingcart} />
        <Route path="/checkout" exact component={Checkout} />
        <Route path="/payment/:id" exact component={Paymentpage} />
        <Route path="/payment-success/:id" exact component={Paymentsuccess} />
        <Route path="/privacyPolicy" exact component={PrivacyPolicy} />
        <Route path="/login" exact component={Checkoutlogin} />
      </Switch>
    </Router>
  );
}

export default Routes;
