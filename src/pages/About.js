import React from "react";
import { Avatar, Grid, Row, Col } from "rsuite";
import Img from "../images/shubham.jpg";

const About = () => {
  return (
    <div>
      <h1 className="text-center">About Me</h1>
      <Grid>
        <Row>
          <Col className="about" xs={12}>
            <img
              src={Img}
              height="200px"
              width="200px"
              className="profile"
              alt="profile"
            />
            {/* <Avatar height="200px" width="200px" circle src={Img} /> */}
            <h4 className="ml-5">HI, I'M SHUBHAM BHOJANE</h4>
            <h5 className="ml-5 ">FRONT END DEVELOPER</h5>
          </Col>
          <Col className="about" xs={12}>
            <p className="mb-5">
              I have completed my graduation B.E in Information Technology from
              MGM College of Engineering and Technology. I am always ready to
              have new experiences, meet new people and learn new thing. I am
              interested in the Web Development field and am seeking
              opportunities related to the same. I have also done some projects
              on React such as Tic Tac Toe, Chat App . I keep my goals and task
              organized to maintain productivity.
            </p>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default About;
