import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Zainal Salamun </span>
            from <span className="purple"> Jakarta, Indonesia.</span>
            <br />
            I am currently employed as a Android developer at PT. Buana Varia Komputama.
            <br />
            I currently work at Binar Academy as a Flutter Developer
            <br />
            I have completed Informatika Engineering at STMIK Akakom.
            <br />
            <br />
            As an experienced Android and Flutter developer with over 7 years of experience in an IT consultant company, I have a strong foundation in Object-Oriented Programming and problem-solving skills.
            I am enthusiastic about implementing SOLID principles which can make the process of developing and maintaining code more efficient and reduce boilerplate codes.
            I have the capability to either develop an Android app from scratch or re-design the architecture to be more maintainable and scalable.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Futsal, Football, running
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "#fff" }}>
            "Work hard play hard"{" "}
          </p>
          <footer className="blockquote-footer">Zainal Salamun</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
export default AboutCard;
