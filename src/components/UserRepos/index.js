import React from "react";
import star from "../../images/star_icon.png";
import fork from "../../images/fork_icon.png";
import { Button } from "@material-ui/core";
import { Container, Col, Row } from "reactstrap";
import "./index.css";

const UserRepos = ({ repo }) => {
  return (
    <Container className="container_repo">
      <Row>
        <Col xs={12} sm={4} className="center">
          <span>{repo.name}</span>
        </Col>
        <Col xs={3} sm={1} className="center">
          <img className="image_repo" src={fork} alt="fork_icon" />
          <span>{repo.forks}</span>
        </Col>
        <Col xs={6} sm={2} className="center">
          <span>{repo.language}</span>
        </Col>
        <Col xs={3} sm={1} className="center">
          <img className="image_repo" src={star} alt="star_icon" />
          <span>{repo.stargazers_count}</span>
        </Col>
        <Col xs={12} sm={4} className="center">
          <Button href={repo.html_url} color="primary" variant="outlined">
            Go to GitHub
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default UserRepos;
