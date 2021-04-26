import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons'

function Project({ title, image, deployedLink, repo }) {
  return (
    <div
      style={{
        width: "350px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h3>
      <a href={deployedLink}>
      {title}
      <a href={repo} className="icon"><FontAwesomeIcon icon={faGithub}/></a>
       </a>
      </h3>
      <img
        style={{ maxWidth: "300px", maxHeight: "600px" }}
        src={require(`../../assets/${image}`).default}
        alt="budget">
        </img>
        
    </div>
  );
}

export default Project;
