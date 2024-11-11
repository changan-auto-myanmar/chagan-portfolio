import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import SplashScreen from "./components/SplashScreen.jsx";

createRoot(document.getElementById("root")).render(
  <Suspense fallback={<SplashScreen />}>
    <App />
  </Suspense>
);
