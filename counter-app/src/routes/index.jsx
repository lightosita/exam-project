import React from "react";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(()=>import("../components/Home"))
const Counter = lazy(() => import("../components/Counter"))
const Counter1 = lazy(() => import("../components/Counter1"))
const Error = lazy(()=>import("../components/Error"))
const ErrorBomb = lazy(()=>import("../components/Layout/ErrorBoundary"))

const AppRouter = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="counter" element={<Counter />} />
        <Route path="counter1" element={<Counter />} />
        <Route path="/bomb" element={<ErrorBomb />} />
        <Route path="*" element={<Error />} />

      </Routes>
    </div>
  );
};

export default AppRouter;
