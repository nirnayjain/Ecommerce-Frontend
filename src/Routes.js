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

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Header />
          <Navigation />
          <Hero />
          <Productrow />
          <Categorybanner />
          <Newproducts />
          <Bottombanner />
          <Footer />
        </Route>
        <Route path="/productDetails/:id" exact component={Producdetails} />
      </Switch>
    </Router>
  );
}

export default Routes;
