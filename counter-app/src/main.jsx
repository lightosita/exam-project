import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Layout from "./components/Layout";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <HelmetProvider>
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <App />
          </Suspense>
        </HelmetProvider>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
