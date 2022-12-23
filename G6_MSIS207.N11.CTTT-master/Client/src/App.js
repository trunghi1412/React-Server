import LoginPage from "./components/login/login";
import { Switch, Route } from "react-router-dom";
// import Header from "./components/Header";
import Cart from "./components/cart/cart";
import HomePage from "./components/homepage/homepage";
import Register from "./components/register/register";
// import Footer from "./components/footer";
import Intro from "./components/introduction/intro";
import Blog from "./components/blog/blog";
import about from "./components/about/about";
import carts from "./components/carts/carts";
import ScrollToTop from "./components/CsrollToTop";
import {CartProvider} from 'react-use-cart'

function App() {
  return (
    <CartProvider>     
      <ScrollToTop/>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/cart" component={Cart} />
        <Route path="/intro" component={Intro} />
        <Route path="/blog" component={Blog} />
        <Route path="/carts" component={carts}/>
        <Route path="/about" component={about}/>
        <Route path="/register" component={Register} />
        <Route path="/" component={HomePage} />
      </Switch>
      
    </CartProvider>
  );
}

export default App;
