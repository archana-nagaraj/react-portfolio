import React from "react";
import ResumeDownload from "../../assets/Archana_Nagaraja_Resume.pdf";

function Resume({ tabs }) {
  const frontend = [
    "HTML",
    "CSS",
    "JavaScript",
    "jQuery",
    "Bootstrap"
  ];
  const backend = [
    "jQuery",
    "Node.js",
    "Express.js",
    "SQL",
    "Sequelize",
    "MySQL",
    "MYSQL2",
    "NoSQL",
    "MongoDB",
    "Mongoose",
    "Jest",
    "TDD",
    "React"
  ];

  return (
    <div>
    <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={require(`../../assets/resume_Snapshot.png`).default}
          alt="resume"
          style={{ width: "300px" }}
        />
        <br />
        <a
          href={ResumeDownload}
          download="Resume"
          target="_blank"
          rel="noreferrer"
        >
          <button>Download Resume</button>
        </a>
      </div>

      <div>
        <h1>Technologies</h1>
        <div style= {{display: "flex"}}>
        <div>
        <h2>Front-End</h2>
          <ul>
            {frontend.map((skills) => (
              <li>{skills}</li>
            ))}
          </ul>
          </div>
          <div>
          <h2>Back-End</h2>
          <ul>
            {backend.map((skills) => (
              <li>{skills}</li>
            ))}
          </ul>
        </div>
        </div>  
      </div>
    </div>
    </div>

  );
}

export default Resume;
