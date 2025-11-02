import { Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage.jsx";
import "./App.css";
import { CheckoutPage } from "./pages/CheckoutPage.jsx";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
    </Routes>
  );
}

export default App;
