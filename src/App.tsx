import { BrowserRouter } from "react-router-dom";

import Footer from "./components/Footer";
import AppRoutes from "./router/AppRoutes";
import Navbar from "./components/navbar/Navbar";

import "./assets/styles/App.css";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <div className="bg-white h-full pt-20">
        <AppRoutes />
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
