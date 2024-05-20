import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgWindows } from "react-icons/cg";
import { DiUbuntu, DiWindows } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiAndroidstudio,
  SiXcode,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos color="#000000" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiUbuntu color="#000000" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiWindows color="#007ACC" />
      </Col>  
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode color="#007ACC" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman color="#F44336" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio color="#3DDC84" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel color="#1DB954" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiXcode color="#007ACC" />
      </Col>
      
    </Row>
  );
}

export default Toolstack;
