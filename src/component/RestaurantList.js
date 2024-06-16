import { useState } from "react";
import INITIAL_RESTAURANT_DATA from "../Data/restaurant.json";
import { Restaurant } from "./Restaurant";

export function RestaurantList() {
  const [restaurantData, setRestaurantData] = useState(INITIAL_RESTAURANT_DATA);
  console.log(restaurantData);

  const [name, setName] = useState("Empire");
  const [poster, setPoster] = useState(
    "https://b.zmtcdn.com/data/pictures/7/55397/fb83f44f6bbbdd08809b95f8fb6bdb98.jpg"
  );
  const [address, setAddress] = useState("2");
  const [rating, setRating] = useState("3");
  const [rating_text, setRating_Text] = useState("4");
  const [cost, setCost] = useState("5");

  return (
    <>
      {/* Add restaurant */}
      <div className="add-restaurant-form">
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)} />
        <input
          type="text"
          value={poster}
          onChange={(event) => setPoster(event.target.value)} />
        <input
          type="text"
          value={address}
          onChange={(event) => setAddress(event.target.value)} />
        <input
          type="text"
          value={rating}
          onChange={(event) => setRating(event.target.value)} />
        <input
          type="text"
          value={rating_text}
          onChange={(event) => setRating_Text(event.target.value)} />
        <input
          type="text"
          value={cost}
          onChange={(event) => setCost(event.target.value)} />
        {/* copy restaurantData and new restaurant */}
        <button
          onClick={() => {
            const newRestaurant = {
              name,
              poster,
              address,
              rating,
              rating_text,
              cost,
            };
            setRestaurantData([...restaurantData, newRestaurant]);
          }}
        >
          Add Restaurant
        </button>
      </div>
      <div className="restaurant-list">
        {restaurantData.map((rest_data, index) => (
          <Restaurant key={index} restaurantData={rest_data} id={index} />
        ))}
      </div>
    </>
  );
}
