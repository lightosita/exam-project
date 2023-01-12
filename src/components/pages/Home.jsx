import React from "react";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <main>
      <Helmet>
        <title>Home | OsitaLight</title>
        <meta
          name="description"
          content="Welcome! to the homepage of my counter app project"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <h1>Welcome! to my homepage</h1>
      <p>
        A counter App reimplemented using React Hooks,
        <br /> React Router, React Helmet with error handling.
        <br /> This project was part of my 3rd term Assesment Exams with &nbsp;
        <a href="https://www.altschoolafrica.com/">AltSchool Africa</a>
      </p>
    </main>
  );
};

export default Home;
