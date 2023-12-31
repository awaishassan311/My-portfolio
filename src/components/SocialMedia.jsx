import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faAngellist,
} from "@fortawesome/free-brands-svg-icons";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://github.com/awaishassan311"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          icon={faGithub}
          color="#333"
          style={{ fontSize: "20px" }}
        />
      </a>
    </div>
    <div>
      <a
        href="https://www.linkedin.com/in/m-awais-hassan-bilal-a7908017b/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          color="#333"
          style={{ fontSize: "20px" }}
        />
      </a>
    </div>
    <div>
      <a
        href="w"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          icon={faAngellist}
          color="#333"
          style={{ fontSize: "20px" }}
        />
      </a>
    </div>
  </div>
);

export default SocialMedia;
