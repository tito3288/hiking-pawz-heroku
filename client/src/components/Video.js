import React from "react";
import { Container } from "react-bootstrap";

const Video = () => {
  //figure out how to make video play faster and not lag
  return (
    <Container>
      <div style={{ display: "flex" }}>
        <video
          className="video"
          src="/videos/shorter-hiking-video2.mp4"
          // autoPlay
          // onCanPlay={this.onCanPlay()}
          controls="controls"
          preload="auto"
          // loop
          muted
        ></video>
      </div>
    </Container>
  );
};

export default Video;
