import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiNetlify,
  SiGit,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      {/* VS Code */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>

       {/* Git */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>
      {/* Netlify */}
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col>

     
      
    </Row>
  );
}

export default Toolstack;
