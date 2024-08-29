import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/Navbar";
import CarModel from "./pages/CarModel";
import CarDetail from "./pages/CarDetail";
import NewAndEvent from "./pages/NewAndEvent";
import NewDetail from "./pages/NewDetail";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/car-model" element={<CarModel />} />
          <Route path="/car-detail/:id" element={<CarDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/new" element={<NewAndEvent />} />
          <Route path="/new-detail" element={<NewDetail />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
