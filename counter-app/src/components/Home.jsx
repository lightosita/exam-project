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
        A counter App reimplemented using React Hooks, React Router,
        React Helmet with error handling.
        this project was part of my 3rd term Assesment Exams with <a> href"www,AltschoolAfrica"</a> 
        
      </p>
    </main>
  );
};

export default Home;
