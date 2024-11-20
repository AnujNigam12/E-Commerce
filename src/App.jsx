import { useContext, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import Cart from "./pages/Cart";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import About from "./pages/About";
import Service from "./pages/Service";
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserContent from "./context/UserContext";

function App() {
  let ctx = useContext(UserContent)
  console.log(ctx)

  let loginValue = ctx.user.login
  console.log(loginValue)

  return (
    <div>
      <BrowserRouter>
      <NavBar />
        <Routes>
        <Route path="/" element={loginValue===true ? <Home /> : <Navigate to='/login'/>}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Signin />}></Route>
        </Routes>
        <Footer />
        <ToastContainer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
