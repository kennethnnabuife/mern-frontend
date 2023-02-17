import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <NavBar />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/*" element={<Navigate to="/notfound" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
