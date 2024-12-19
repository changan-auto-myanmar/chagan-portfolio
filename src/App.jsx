import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "sonner";

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
import ScrollToTop from "./ScrollToTop";

import "./App.css";

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100%",
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "100%",
  },
};

const MotionDiv = ({ children }) => (
  <motion.div
    key={Math.random()}
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

function App() {
  return (
    <AnimatePresence>
      <Router>
        <Toaster position="top-center" richColors />
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <MotionDiv>
                <Home />
              </MotionDiv>
            }
          />
          <Route
            path="/car-model/:id"
            element={
              <MotionDiv>
                <CarModel />
              </MotionDiv>
            }
          />
          <Route path="/car-detail/:id" element={<CarDetail />} />
          <Route
            path="/about"
            element={
              <MotionDiv>
                <About />
              </MotionDiv>
            }
          />
          <Route
            path="/services"
            element={
              <MotionDiv>
                <Service />
              </MotionDiv>
            }
          />
          <Route
            path="/new"
            element={
              <MotionDiv>
                <NewAndEvent />
              </MotionDiv>
            }
          />
          <Route path="/new-detail" element={<NewDetail />} />
          <Route
            path="/contact"
            element={
              <MotionDiv>
                <ContactUs />
              </MotionDiv>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </AnimatePresence>
  );
}

export default App;
