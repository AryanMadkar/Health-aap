import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/Context.jsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      {" "}        <ToastContainer />

      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>{" "}
  </StrictMode>
);
