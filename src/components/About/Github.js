import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <a
        href="https://github.com/zainalsalamun"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <GitHubCalendar
          username="zainalsalamun"
          blockSize={15}
          blockMargin={5}
          color="#5564f5"
          fontSize={16}
        />
        <p style={{ textAlign: "center", fontSize: "1.2em" }}>
          View my github profile <i className="fa fa-arrow-right" />
        </p>
      </a>
    </Row>
  );
}

export default Github;
