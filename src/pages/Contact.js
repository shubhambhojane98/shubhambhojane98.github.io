import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const Contact = () => {
  return (
    <div>
      <h1 className=" text-center mt-3 ">Contact Me</h1>
      <div className="container contact ">
        <div>
          <h2> Navi Mumbai,India</h2>
          <h5> (+91) 0750 642 1442</h5>
          <h5>shubhambhojane90@gmail.com</h5>
          <div className="social">
            <a href="https://www.linkedin.com/in/shubham-bhojane">
              <LinkedInIcon />
            </a>

            <a href="https://github.com/shubhambhojane98">
              <GitHubIcon />
            </a>

            {/* <a href="https://www.facebook.com/shubham.bhojane.14/"></a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
