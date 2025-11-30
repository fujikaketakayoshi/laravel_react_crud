import "bootstrap/dist/css/bootstrap.min.css";
import "toastr/build/toastr.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Pages/App";

ReactDOM.createRoot(document.getElementById("app")).render(
    // <React.StrictMode>
        <App />
    // </React.StrictMode>
);
