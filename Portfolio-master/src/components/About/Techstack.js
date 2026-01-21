import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJava,
  DiReact,
  DiPython,
  DiNodejs,
  DiMongodb,
  DiJavascript1,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiMysql,
  SiFlask,
  SiAmazonaws,
  SiCplusplus,
  SiExpress
} from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
      </Col>

      {/* AI / ML */}
      <Col xs={4} md={2} className="tech-icons">
        <GiArtificialIntelligence />
      </Col>
     
      {/* Database */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col>      
      
    </Row>
  );
}

export default Techstack;
