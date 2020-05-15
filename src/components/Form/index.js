import React from "react";
import { Container, Row, Col } from "reactstrap";
import { TextField, Button } from "@material-ui/core";

import "./index.css";

const Form = ({ username, keyPressed, handleClick, errorMessage }) => {
  return (
    <Container className="container_form">
      <div className="container_intern_form">
        <TextField
          color="primary"
          onChange={username}
          id="input"
          className="input_text"
          label="Search username"
          type="search"
          variant="outlined"
          onKeyDown={keyPressed}
        />

        <Button
          onClick={handleClick}
          className="button"
          variant="outlined"
          color="primary"
        >
          Search
        </Button>
      </div>

      <span className="span_error">{errorMessage}</span>
    </Container>
  );
};

export default Form;
