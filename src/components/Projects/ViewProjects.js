import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import ocbc from "../../Assets/Projects/ocbc/ocbc.jpeg";

function ViewProjects() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8} className="mt-5">
          <Card className="shadow-lg">
            <Card.Header>
              <Card.Title as="h5">Ocbc</Card.Title>
            </Card.Header>
            <Card.Body>
              <Image src={ocbc} fluid rounded />
              <Card.Text>
                Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ViewProjects;
