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
import ScrollToTop from "./ScrollToTop";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const pageVariants = {
    initial: {
      opacity: 1,
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

  return (
    <AnimatePresence>
      <Router>
        <div>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={{ duration: 0.5 }}
                >
                  <Home />
                </motion.div>
              }
            />
            <Route
              path="/car-model/:id"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={{ duration: 0.5 }}
                >
                  <CarModel />
                </motion.div>
              }
            />
            <Route path="/car-detail/:id" element={<CarDetail />} />
            <Route
              path="/about"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={{ duration: 0.5 }}
                >
                  <About />
                </motion.div>
              }
            />
            <Route
              path="/services"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={{ duration: 0.5 }}
                >
                  <Service />
                </motion.div>
              }
            />
            <Route
              path="/new"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={{ duration: 0.5 }}
                >
                  <NewAndEvent />
                </motion.div>
              }
            />
            <Route path="/new-detail" element={<NewDetail />} />
            <Route
              path="/contact"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={{ duration: 0.5 }}
                >
                  <ContactUs />
                </motion.div>
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </Router>
    </AnimatePresence>
  );
}

export default App;
