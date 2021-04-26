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
        Hello !! I am Archana, an upcoming full stack web developer with over 11 years of experience in manual and automated software testing of desktop, web and mobile applications in healthcare and IoT domains.
      </p>
    </section>
  );
}

export default About;
