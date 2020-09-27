import React from "react";
const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://picsum.photos/id/1/200/300",
  },
  {
    id: 2,
    name: "pizza",
    image: "https://picsum.photos/id/2/200/300",
  },
  {
    id: 3,
    name: "lemon",
    image: "https://picsum.photos/id/3/200/300",
  },
  {
    id: 4,
    name: "bear",
    image: "https://picsum.photos/id/4/200/300",
  },
  {
    id: 5,
    name: "snack",
    image: "https://picsum.photos/id/5/200/300",
  },
];

function Food(props) {
  return (
    <div>
      I love {props.name}
      <img src={props.picture} alt={props.name} />
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodILike.map((dish) => (
        <Food name={dish.name} key={dish.id} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
