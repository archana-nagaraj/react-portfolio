import React from "react";

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
      <h3>{title}</h3>
      <img
        style={{ maxWidth: "300px", maxHeight: "600px" }}
        src={require(`../../assets/${image}`).default}
        alt="budget"
      ></img>

      <a href={deployedLink}style={{color: "rgba(0, 0, 0, 0.5" }}>Deployed Here</a>
      <a href={repo} style={{marginBottom: "15px", color: "rgba(0, 0, 0, 0.5" }}>Github Repo</a>
    </div>
  );
}

export default Project;
