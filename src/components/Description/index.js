import React from "react";
import octocat from "../../images/Octocat.png";
import code from "../../images/code.png";
import { Container } from "reactstrap";
import "./index.css";

const Description = () => {
  return (
    <Container className="container_explanation">
      <img className="pic_1" src={octocat} alt="octocat_img" />

      <div className="intern_container_explanation">
        <span className="span_text">
          Search app that uses GitHub API to retrieve user information when a
          valid username is input. It display avatar, username, followers count,
          repository count, top 4 repositories based on forks and stars.
        </span>
        <img className="pic_2" src={code} alt="code_img" />
        <span className="span_text"></span>
      </div>
    </Container>
  );
};

export default Description;
