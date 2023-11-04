import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";

AOS.init({
  // Global settings here
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
