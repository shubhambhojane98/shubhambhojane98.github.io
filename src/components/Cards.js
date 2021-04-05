import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

import FlexboxGridItem from "rsuite/lib/FlexboxGrid/FlexboxGridItem";

const Cards = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card h-100">
          {/* <img src={props.img} className="card-img-top" alt="..."/> */}
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.desc}</p>
            <a href={props.link} className="btn btn-primary">
              View
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cards;
