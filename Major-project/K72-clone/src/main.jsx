import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {BrowserRouter} from "react-router-dom";
import StairAnimation from "./components/common/StairAnimation.jsx";
import NavContext from "./context/NavContext.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter>
    <StairAnimation>
      <NavContext>
        <App />
      </NavContext>
    </StairAnimation>
  </BrowserRouter>,
  {
    /* </StrictMode> */
  }
);
