import React, { useContext } from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import styles from "./Education.module.css";

const Education = () => {
  const { newTheme } = useContext(ThemeContext);
  return (
    <div className={styles.Education}>
      <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
        Education
      </h1>
      <div className={styles.borderBottom} />

      <div className={styles.container}>
        <div className={styles.position}>
          Masai School | Full Stack Web Developer (MERN){" "}
          <a href="/#"> Full Stack Development (MERN)</a>
        </div>
        <div className={styles.date}>July 2021 - July 2022</div>
        {/* <div className={styles.date}>October 2021 - April 2022</div>
				<fieldset className={styles.responsibilites}>
					<legend>
						<h3> Roles & responsibilites </h3>
					</legend>
					<ul>
						<li>
							My role was to  Monitoring of boiler operation & Performing regular maintenance of boiler. 
                           </li>
						<li>
						Monitoring Ammonia Refrigeration system as well as cold chain unit. 
						</li>
						<li>
						Responding to breakdown ,malfunctions and analysis
							</li>
							<li>
							Etp operation and monitoring 

							</li>
					
					</ul>
				</fieldset> */}
      </div>

      <br />

      <div className={styles.container}>
        <div className={styles.position}>
          RCERT Chandrapur | Graduation <br />
          <a href="/#"> Mechanical Engineering </a>
        </div>
        <div className={styles.date}>May 2013 - May 2017</div>
        {/* <fieldset className={styles.responsibilites}>
					<legend>
						<h3> Roles & responsibilites </h3>
					</legend>
					<ul>
						<li>
						Monitoring of utility operations 

							
						</li>
						<li>Carrying out of Predictive, Preventive maintenance & Breakdown maintenance, planning & execution. 
							
						</li>
						<li>
						Work as team member of the shift maintenance group & involve in the problem solving activities in plant.

						</li>
					
					</ul>
				</fieldset> */}
      </div>
    </div>
  );
};

export default Education;
