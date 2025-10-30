import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import { ToastContainer } from "react-toastify";
import UserProvider from "./context/userContext"; // ✅ Import here

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          theme="dark"
        />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
