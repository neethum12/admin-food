import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/Navbar/NavBar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./Components/Footer/Footer";
import AppDownload from "./Components/AppDownload/AppDownload";
import Loginpopup from "./Components/Loginpopup/Loginpopup";
import { useState } from "react";

function App() {

  const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<Loginpopup setShowLogin={setShowLogin}/>:<></>}
      <div className="app">
        <NavBar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      
      <Footer/>
      
    </>
  );
}

export default App;
