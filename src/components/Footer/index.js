import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <footer>
      <ul className="icons" style={{display: "flex", justifyContent: "center"}}>
        <li>
          <a
            href="https://www.linkedin.com/in/archana-nagaraja/"
            target="_blank"
            rel="noreferrer"
          >
              <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>
        </li>
        <li style={{marginLeft: "15px"}}>
          <a
            href="https://github.com/archana-nagaraj"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
        </li>
        <li style={{marginLeft: "15px"}}>
          <a
            href="mailto:archana.nagaraj@gmail.com"
          >
            <FontAwesomeIcon icon={faEnvelope} size="3x" />
          </a>
        </li>
        <li style={{marginLeft: "15px"}}>
          <a
            href="https://twitter.com/archananagaraj"
          >
            <FontAwesomeIcon icon={faTwitter} size="3x" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
