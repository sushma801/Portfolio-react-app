import React, { lazy, Suspense } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import Loader from "./utilities/Loader";
// import Headers from "./Components/Headers";

const About = lazy(() => import("./Components/About"));
const Contact = lazy(() => import("./Components/Contact"));
const Experience = lazy(() => import("./Components/Experience"));
const Headers = lazy(() => import("./Components/Headers"));
const Home = lazy(() => import("./Components/Home"));

function App() {
  return (
    <div className="App">
      <Headers></Headers>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<Loader />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<Loader />}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="/experience"
          element={
            <Suspense fallback={<Loader />}>
              <Experience />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
