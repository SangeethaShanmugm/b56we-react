import { useState } from "react";
import INITIAL_RESTAURANT_DATA from "../Data/restaurant.json";
import { Restaurant } from "./Restaurant";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export function RestaurantList() {
  const [restaurantData, setRestaurantData] = useState(INITIAL_RESTAURANT_DATA);
  console.log(restaurantData);

  const [name, setName] = useState("Empire restaurant");
  const [poster, setPoster] = useState(
    "https://b.zmtcdn.com/data/pictures/chains/6/120976/517f929243a8a987437661453a5b45e0_featured_v2.jpg"
  );
  const [address, setAddress] = useState("street 2");
  const [rating, setRating] = useState("3");
  const [rating_text, setRating_Text] = useState("Good");
  const [cost, setCost] = useState("500");

  return (
    <>
      {/* Add restaurant */}
      <div className="add-restaurant-form">
        <TextField
          id="outlined-basic"
          label="Restaurant Name"
          variant="outlined"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <TextField
          id="outlined-basic"
          label="Poster"
          variant="outlined"
          value={poster}
          onChange={(event) => setPoster(event.target.value)}
        />

        <TextField
          id="outlined-basic"
          label="Address"
          variant="outlined"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />

        <TextField
          id="outlined-basic"
          label="Poster"
          variant="outlined"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
        />

        <TextField
          id="outlined-basic"
          label="Rating_text"
          variant="outlined"
          value={rating_text}
          onChange={(event) => setRating_Text(event.target.value)}
        />

        <TextField
          id="outlined-basic"
          label="Cost"
          variant="outlined"
          value={cost}
          onChange={(event) => setCost(event.target.value)}
        />

        {/* copy restaurantData and new restaurant */}

        <Button
          variant="contained"
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
        </Button>

      </div>
      <div className="restaurant-list">
        {restaurantData.map((rest_data, index) => (
          <Restaurant key={index} restaurantData={rest_data} id={index} />
        ))}
      </div>
    </>
  );
}
