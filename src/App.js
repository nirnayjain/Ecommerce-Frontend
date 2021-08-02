import "./App.css";
import Bottombanner from "./components/Bottombanner";
import Categorybanner from "./components/Categorybanner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Newproducts from "./components/Newproducts";
import Productrow from "./components/Productrow";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Hero />
      <Productrow />
      <Categorybanner />
      <Newproducts />
      <Categorybanner/>
      <Bottombanner/>
      <Footer/>
    </div>
  );
}

export default App;
