import React from "react";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../components/pages/Home"));
const Counter1 = lazy(() => import("../components/pages/Counter1"));
const Counter2 = lazy(() => import("../components/pages/Counter2"));
const Error = lazy(() => import("../components/error/404"));
const ErrorBomb = lazy(() => import("../components/pages/ErrorBomb"));

const AppRouter = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="counter1" element={<Counter1 />} />
        <Route path="counter2" element={<Counter2 />} />
        <Route path="bomb" element={<ErrorBomb />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
