import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Home from './pages/Home';
import Checkout from "./pages/Checkout";
import Signin from "./auth/Signin";
import Signup from "./auth/Signup";
import { useState } from "react";
import Footer from "./layouts/Footer";
import Error from './pages/Error'

function App() {
  const [cartItem , setCartItem] = useState([1])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<>   <Navbar cartItem = {cartItem} /> <Footer/> </> }>
            <Route path="/" element={<Home/>}/>
            <Route path="/Checkout" element={<Checkout/>}/>
          </Route>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Signin" element={<Signin/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
