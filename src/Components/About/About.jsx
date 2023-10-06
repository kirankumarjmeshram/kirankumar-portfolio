import React from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import WindowSize from "../../Utils/WindowSize";
import styles from "./About.module.css";

const About = () => {
  const { newTheme } = React.useContext(ThemeContext);
  const [width] = WindowSize();
  const img =
    width < 650
      ? "https://avatars.githubusercontent.com/u/85862711?v=4" 
      : "https://cdn2.careeraddict.com/uploads/article/58447/illustration-woman-desk-computers.jpg";
  return (
    <div
      className={styles.container}
      style={{ boxShadow: `3px 3px 5px ${newTheme.line}` }}
    >
      <div className={styles.first}>
        <img
          src={
            "https://media.licdn.com/dms/image/D4D03AQFYP_kLWu27Lw/profile-displayphoto-shrink_800_800/0/1677640867357?e=1701907200&v=beta&t=J9jASgO8UBKmskn6tZop0Uno4M6Elm_zoSJSnpIQBKs"
          }
          alt="my img"
        />
      </div>
      <div className={styles.second}>
        <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
          About Me
        </h1>
        <div className={styles.borderBottom} />
        <p style={{ color: `${newTheme.para}` }} className={styles.aboutMe}>
          Hello! Everyone I am Kirankumar J Meshram .
          <br />
          Experienced Full Stack Web Developer well-versed in MERN stack
          development. Certified with a strong grasp of modern web technologies,
          highly skilled in crafting robust and user-friendly applications using
          MongoDB, Express.js, React.js, and Node.js. Also, possess a
          foundational understanding of blockchain and Salesforce. Committed to
          consistently delivering top-notch software solutions while actively
          driving innovation.
          <span style={{ color: `#00a0a0` }}>
            {" "}
            Adaptive to new technology and environment.
          </span>
        </p>
      </div>
    </div>
  );
};

export default About;
