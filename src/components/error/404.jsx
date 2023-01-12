import React from "react";
import { Helmet } from "react-helmet-async";

const PageNotFound = () => {
  const style = {
    display: "flex",
    flexDirection: "column",
  };
  return (
    <>
      <Helmet>
        <title>Page Not Found | OsitaLight</title>
        <meta
          name="description"
          content="Welcome! this is the 404 error page"
        />
        <link rel="canonical" href="*" />
      </Helmet>
      <main style={style}>
        <h2>Page Not Found</h2>
        <img src="/404.gif" alt="404 error page" title="404 page" />
        <button
          type="button"
          style={{ background: "deepskyblue", width: "50%", margin: "auto " }}
        >
          <a href="/">Go Home</a>
        </button>
      </main>
    </>
  );
};

export default PageNotFound;
