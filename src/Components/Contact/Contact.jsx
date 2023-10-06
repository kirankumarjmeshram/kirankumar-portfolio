import React from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import styles from "./Contact.module.css";

const Contact = () => {
  const { newTheme } = React.useContext(ThemeContext);
  return (
    <footer
      className={styles.footer}
      id="contact"
      // style={{ background: `${newTheme.highlightBackground}` }}
    >
      <div className={styles.container}>
        <h1 style={{ color: `${newTheme.title}` }}>Get in Touch</h1>
        <p style={{ color: `${newTheme.para}` }} className={styles.paragraph}>
          I'm actively looking for any new opportunities, in MERN-stack web
          development.
        </p>
        <div
          style={{ color: `${newTheme.title}` }}
          className={styles.contactOptions}
        >
          <a
						href='https://twitter.com/krishnkumarjm'
						aria-label='Twitter'
						target='_blank'
						rel='noreferrer'
					>
						<i className='fab fa-twitter'></i>
					</a>
          <a
            href="https://github.com/kirankumarjmeshram"
            aria-label="GitHub"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-github" />
          </a>

          <a
            href="https://www.linkedin.com/in/kirankumar-j-meshram/"
            aria-label="Linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in" />
          </a>
          <br />

          <i className="far fa-envelope"></i>
          <h3>kirankumar21895@gmail.com</h3>
          <i className="fas fa-phone-alt" />
          <h3>+91 8390114818</h3>
        </div>
      </div>
      <div style={{ background: `${newTheme.line}` }} className={styles.line} />
      <div style={{ color: `${newTheme.para}` }} className={styles.copyright}>
        <br/>
      </div>
    </footer>
  );
};

export default Contact;
