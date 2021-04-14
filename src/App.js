import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import ProductsScreen from "./pages/ProductsScreen";
import CartScreen from "./pages/CartScreen";
import Error from "./components/Error";
import AboutScreen from "./pages/AboutScreen";
import SideDrawer from "./components/SideDrawer";
import BackDrop from "./components/BackDrop";
import SingleProduct from "./components/SingleProduct";
import BackDropEnd from "./components/BackDropEnd";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <SideDrawer />
        <BackDrop />
        <BackDropEnd />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/products">
            <ProductsScreen />
          </Route>
          <Route exact path="/singleproduct/:id">
            <SingleProduct />
          </Route>
          <Route exact path="/cart">
            <CartScreen />
          </Route>
          <Route exact path="/about">
            <AboutScreen />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
