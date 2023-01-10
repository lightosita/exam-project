import React from "react";
import { Helmet } from "react-helmet-async";

const PageNotFound = () => {
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
      <main>
        <h2>Page Not Found</h2>
        <img src="/404.gif" alt="404 error page" title="404 page" />
      </main>
    </>
  );
};

export default PageNotFound;
