import React from "react";
import githubGraphql from "../../images/github-graphql.png";
import code from "../../images/code.png";
import { Container } from "reactstrap";
import "./index.css";

const Description = () => {
  return (
    <Container className="container_explanation">
      <img className="pic_1" src={githubGraphql} alt="githubAndGraphqlImage" />

      <div className="intern_container_explanation">
        <span className="span_text">
          Search app that uses GitHub API to retrieve user information when a
          valid username is input. It display avatar, username, followers count,
          repository count, top 5 repositories based on forks and stars.
          <p>
            <strong>Using GraphQL</strong>
          </p>
        </span>
        <img className="pic_2" src={code} alt="code_img" />
        <span className="span_text"></span>
      </div>
    </Container>
  );
};

export default Description;
