import React from "react";
import { NavLink } from "react-router-dom";
import Img from "../images/Home.jpg";

const Home = () => {
  return (
    <section id="header" className="d-flex align-items-center">
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-lg-6 d-flex justify-content-center flex-column ">
                <h1>HI, I'M SHUBHAM BHOJANE</h1>
                <h3 className="my-3">FRONT END DEVELOPER</h3>
                <div className="mt-3">
                  <NavLink to="/service" className="btn btn-outline-primary">
                    Get Started
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-6 ">
                <img src={Img} alt="home img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
