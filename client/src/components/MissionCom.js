import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const MissionCom = () => {
  return (
    //this container element looks great on mobile but not so much on desktop view, check before deployment.
    <Container>
      <Row lg={2} md={1} sm={1} xs={1} className="mb-5 my-5 mission-container">
        <Col className="mb-4">
          <div className="missionDesBackground">
            <img
              className="mission-image1"
              src="rescue-repeat-logo.jpeg"
              alt="Image of human society "
            ></img>
            <img
              className="my-3 mission-image2"
              src="rescue-release-image2.jpg"
              alt="another-humansociety-img"
            />
          </div>
        </Col>
        <Col className="mb-4">
          <div className="missionDesMaroon">
            <div className="missionDesMaroon-content">
              <h1>The Mission</h1>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                By making a purchase, you support organization with similar
                values as you. Such as, Rescue Release Repeat, who actively
                devote their resources and time to giving domestic, exotic and
                wild animals a second chance at life.
              </motion.p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MissionCom;
