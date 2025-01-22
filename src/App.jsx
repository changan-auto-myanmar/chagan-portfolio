import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "sonner";
import { lazy } from "react";
import Navbar from "./components/Navbar";
import ScrollToTop from "./ScrollToTop";
// Page
const HomePage = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Service = lazy(() => import("./pages/Service"));
const CarModel = lazy(() => import("./pages/CarModel"));
const CarDetail = lazy(() => import("./pages/CarDetail"));
const NewAndEvent = lazy(() => import("./pages/NewAndEvent"));
const NewDetail = lazy(() => import("./pages/NewDetail"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
import PageNotFound from "./pages/PageNotFound";
// css
import "./App.css";

const MotionDiv = ({ children }) => <motion.div>{children}</motion.div>;

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
          <Route path="/new-detail/:id" element={<NewDetail />} />
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
