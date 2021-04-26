import React from "react";

function About() {
  return (
    <section className="my-5" style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
      <img
        src={require(`../../assets/profilePic.png`).default}
        alt=""
        id="about-photo"
      />
      <p style={{marginLeft: "60px"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </section>
  );
}

export default About;
