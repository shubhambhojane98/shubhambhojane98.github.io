import React from "react";
import { Col, Grid, Row } from "rsuite";
import Cards from "../components/Cards";
import Sdata from "../data.json";

const Service = () => {
  return (
    <div>
      {/* <Grid>
                <Row>
                    <Col>
                        
                    </Col>
                </Row>
            </Grid> */}
      {/* {
                            Sdata.map((val) => {
                                return <Cards
                                name ={val.name}
                                desc ={val.description}
                                link ={val.link}
                                img ={val.img}
                                key ={val.id}
                                />
                            })
                        } */}

      <div className="my-5">
        <h1 className="text-center">Portfolio</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Sdata.map((val) => {
                return (
                  <Cards
                    name={val.name}
                    desc={val.description}
                    link={val.link}
                    img={val.img}
                    key={val.id}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
