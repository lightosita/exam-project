import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <ul className="logo-container">
        <li>
          <a href="https://twitter.com/OsitaLight">
            <img
              src="https://img.icons8.com/fluency/96/null/twitter.png"
              alt="twitter"
              title="twitter"
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/lightosita">
            <img
              src="https://img.icons8.com/fluency/96/null/github.png"
              alt="github"
              title="github"
            />
          </a>
        </li>
        <li>
          <a href="www.linkedin.com/in/light-osita-734251112/">
            <img
              src="https://img.icons8.com/fluency/96/null/linkedin-circled.png"
              alt="linkedin"
              title="linkedin"
            />
          </a>
        </li>
        <li>
          <a href="https://babest.hashnode.dev/">
            <img
              src="https://img.icons8.com/color/96/null/hashnode.png"
              alt="hashnode"
              title="hashnode"
            />
          </a>
        </li>
      </ul>
      <p> &copy; Ositalight@Altschool {year}
      </p>
    </>
  );
};

export default Footer;
