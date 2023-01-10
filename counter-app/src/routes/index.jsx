import React from "react";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(()=>import("../components/Home"))
const Counter = lazy(()=>import("../components/Counter"))
const ErrorBomb = lazy(()=>import("../components/Layout/ErrorBoundary"))

const AppRouter = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="counter" element={<Counter />} />

        <Route path="/bomb" element={<ErrorBomb />} />

      </Routes>
    </div>
  );
};

export default AppRouter;
