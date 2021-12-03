import React from "react";
import { Rate } from "antd";

import "./MovieCard.css";

import { Card } from "react-bootstrap";

const MovieCard = ({ movie }) => {
  console.log(movie);
  return (
    <div className="Crd">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.poster} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <Rate disabled defaultValue={movie.Rating} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
