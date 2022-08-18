import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import MainPage from "./Pages/MainPage";
import ReadPage from "./Pages/ReadPage";
import Login from "./Pages/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/watch" element={<MainPage />} />
        <Route path="/read" element={<ReadPage />} />
        <Route path="/login" element={<Login />} />

    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// reportWebVitals();
