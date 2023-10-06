import React, { useContext } from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import styles from "./Experiences.module.css";

const Experiences = () => {
  const { newTheme } = useContext(ThemeContext);
  return (
    <div className={styles.Experiences}>
      <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
        Experiences
      </h1>
      <div className={styles.borderBottom} />

      <div className={styles.container}>
        <div className={styles.position}>
          Indus Net Technology | Associate Software Engineer{" "}
          <a href="/#"> Full Stack Development | Blockchain | Salesforce</a>
        </div>
        <div className={styles.date}>July 2022 - July 2023</div>
        <fieldset className={styles.responsibilities}>
          <legend>
            <h3> Roles & responsibilities </h3>
          </legend>
          <ul>
            <li>
              Worked on Insurance Product Management for a Reputed Life
              Insurance Company.
            </li>
            <ol>
              <li>
                Provided crucial assistance in maintaining and elevating their
                web app with React.js and NodeJS
              </li>
              <li>
                My responsibilities included resolving internally identified
                issues, refining UI/UX elements, and seamlessly integrating new
                features to ensure an optimized user experience
              </li>
            </ol>

            <li>
              Worked on Gold Loan Management System for a Reputed Bank (PoC)
            </li>
            <ol>
              <li>
                Developed and customized the "New Loan" custom object,
                implementing validation rules and approval processes to meet
                specific requirements.
              </li>
              <li>
                Customized standard objects such as Leads, Roles, Profiles, and
                Permissions Sets to ensure seamless system functionality
              </li>
            </ol>
          </ul>
        </fieldset>
      </div>

      <br />
    </div>
  );
};

export default Experiences;
