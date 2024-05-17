import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiAndroid,
  DiMysql,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiFlutter,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus color="#009688" />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 color="#FFD700" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter color="#4285F4" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs color="#339933" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact color="#61DAFB" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAndroid color="#3DDC84" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql color="#00758F" />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs color="#222" />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit color="#e34c26" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase color="#F8E231" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql color="#4169E1" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava color="#B00000" />
      </Col>
    </Row>
  );
}

export default Techstack;
