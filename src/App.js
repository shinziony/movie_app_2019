import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://picsum.photos/id/1/200/300",
    rating: 5,
  },
  {
    id: 2,
    name: "pizza",
    image: "https://picsum.photos/id/2/200/300",
    rating: 4.9,
  },
  {
    id: 3,
    name: "lemon",
    image: "https://picsum.photos/id/3/200/300",
    rating: 3.5,
  },
  {
    id: 4,
    name: "bear",
    image: "https://picsum.photos/id/4/200/300",
    rating: 4.3,
  },
  {
    id: 5,
    name: "snack",
    image: "https://picsum.photos/id/5/200/300",
    rating: 0,
  },
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I love {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodILike.map((dish) => (
        <Food
          name={dish.name}
          key={dish.id}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
