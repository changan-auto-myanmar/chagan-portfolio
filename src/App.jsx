import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "sonner";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Service from "./pages/Service";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/Navbar";
// import CarModel from "./pages/CarModel";
// import CarDetail from "./pages/CarDetail";
// import NewAndEvent from "./pages/NewAndEvent";
// import NewDetail from "./pages/NewDetail";
// import ContactUs from "./pages/ContactUs";
import ScrollToTop from "./ScrollToTop";
import "./App.css";
import { lazy } from "react";
const HomePage = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Service = lazy(() => import("./pages/Service"));
const CarModel = lazy(() => import("./pages/CarModel"));
const CarDetail = lazy(() => import("./pages/CarDetail"));
const NewAndEvent = lazy(() => import("./pages/NewAndEvent"));
const NewDetail = lazy(() => import("./pages/NewDetail"));
const ContactUs = lazy(() => import("./pages/ContactUs"));

// import StairTransition from "./components/transition/StairTransition";

const pageVariants = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  in: {
    opacity: 1,

    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const MotionDiv = ({ children }) => (
  <motion.div
  // key={Math.random()}
  // initial="initial"
  // animate="in"
  // exit="out"

  // variants={pageVariants}
  // transition={{ duration: 0.5, ease: "easeInOut" }}

  // className="bg-primary"
  >
    {children}
  </motion.div>
);

function App() {
  return (
    <AnimatePresence mode="wait" ease>
      <Router>
        <Toaster position="top-center" richColors />
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <MotionDiv>
                <HomePage />
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
