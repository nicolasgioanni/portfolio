import React from "react";
import "../assets/styles/Education.scss";
import UWLogo from "../assets/images/UW.png";

const Education = () => {
  return (
    <div className="education-container" id="education">
      <h1>Education</h1>
      <div className="education-grid">
        <div className="education-card">
          <div className="edu-logo-wrapper">
            <img
              src={UWLogo}
              alt="University of Washington Bothell logo"
              className="edu-icon"
            />
          </div>
          <div className="edu-content">
            {/* header row: school name + grad date */}
            <div className="edu-header-row">
              <h3>University of Washington</h3>
              <span className="education-date-inline">
                September 2022 – <strong>June 2025</strong>
              </span>
            </div>

            {/* degree + focus + GPA row */}
            <div className="degree-gpa-row">
              <span className="degree-focus">
                <strong>B.S. in Computer Science &amp; Software Engineering</strong>,{" "}
                <em>Concentration in Information Assurance &amp; Cybersecurity</em>
              </span>
              <span className="gpa"><strong>GPA:</strong> 3.74 / 4.0</span>
            </div>

            {/* now using bullet points */}
            <ul className="edu-list">
              <li>
                <strong>Relevant Coursework:</strong> Data Structures &amp; Algorithms, Advanced Algorithms, Artificial Intelligence, Software Engineering, <br/>
                Operating Systems, Secure Systems, Database Systems, Network Design &amp; Programming, Cybersecurity, Technical Writing
              </li>
              <li>
                <strong>Awards &amp; Honors:</strong> Dean’s List (Fall 2022 – Spring 2025)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
