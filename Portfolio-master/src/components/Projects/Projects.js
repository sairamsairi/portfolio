import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/mesh.jpg";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import FeedBack from "../../Assets/Projects/fb.png";
import File from "../../Assets/Projects/cfs.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My  <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on pastly.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Visual-Aid"
              description="Mobile application for visually impaired includes the real time video processing ,image processing ,also interactable RAG chatbot for user on surroundings"
              ghLink="https://github.com/sairamsairi/visualfinal/tree/main/VisualAidForVisuallyImpaired-main"
              demoLink="https://youtu.be/iZ8rMZtqfGw?si=1lULygrk4mXze3sR"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FeedBack}
              isBlog={false}
              title="FeedBack analysis using GenAI"
              description="Awebiste that is capable of processing textual feedback, extracting key sentiments, and generating concise summaries."
              ghLink="https://github.com/sairamsairi/feed"
              demoLink="https://"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={File}
              isBlog={false}
              title="Cloud File Storage"
              description="Designed and enhanced a scalable cloud storage system enabling secure upload, sync, and retrieval of files using AWS
 S3, IAM roles, and pre-signed URLs."
              ghLink="https://github.com/sairamsairi/cloud"
              demoLink="https://"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="water-supply management"
              description="Developed a cost-effective tool for mapping rural water supply networks. Integrated OpenStreetMap with Leaflet for interactive map visualization and geospatial analysis"
              ghLink="https://github.com/sairamsairi/WaterSupplyManagement"
              demoLink="https://"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Online-procturing"
              description="Developed a cheating detection system for audio and head-pose,lip detection,displayed real-time visualization with Matplotlib"
              ghLink="https://github.com/sairamsairi/online_procturing"
              demoLink="https://"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="LAN QnA"
              description="Lan based react chat application for users"
              ghLink="https://github.com/sairamsairi/lan"
              demoLink="https://"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Rock paper Scissor"
              description="Javascript based rock paper scissor game"
              ghLink="https://github.com/sairamsairi/web"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
