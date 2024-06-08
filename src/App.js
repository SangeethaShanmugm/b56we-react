import "./App.css";
import { Welcome } from "./Welcome";
import { useState } from "react"
import INITIAL_RESTAURANT_DATA from "./Data/restaurant.json"
export default function App() {
  //JS starts
  const restaurantData = INITIAL_RESTAURANT_DATA
  console.log(restaurantData)

  const people = ["Abhishek", "Bala", "Deva", "Harish"];

  const users = [
    {
      name: "Abhishek",
      age: "20",
      pic: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
    },
    {
      name: "Bala",
      age: "20",
      pic: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
    },
    {
      name: "Deva",
      age: "20",
      pic: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
    },
  ];
  //JS ends
  //JSX starts
  return (
    <div className="App">
      <Restaurant restaurantData={restaurantData} />
    </div>
  );
  //JSX ends
}


function Restaurant({ restaurantData }) {
  const data = {
    "restaurant_id": 1,
    "restaurant_name": "Domino's Pizza",
    "location_id": 1,
    "state_id": 1,
    "address": "Ashok Vihar Phase 3, New Delhi",
    "restaurant_thumb": "https://b.zmtcdn.com/data/pictures/chains/3/143/c77dfea619f2d7786a7d054afab5cd88_featured_v2.jpg",
    "average_rating": 4.2,
    "rating_text": "Very Good",
    "cost": 666,
    "contact_number": 9453524651,
    "mealTypes": [
      {
        "mealtype_id": 1,
        "mealtype_name": "Breakfast"
      },
      {
        "mealtype_id": 2,
        "mealtype_name": "Lunch"
      }
    ],
    "cuisines": [
      {
        "cuisine_id": 1,
        "cuisine_name": "North Indian"
      },
      {
        "cuisine_id": 4,
        "cuisine_name": "Fast Food"
      }
    ],
    "image_gallery": [
      "https://b.zmtcdn.com/data/pictures/chains/3/143/fbc2c4c9e55a3f011c493dda79c399f5.jpg",
      "https://b.zmtcdn.com/data/pictures/chains/3/143/1adb116d088669540c89150836d668f9.jpg",
      "https://b.zmtcdn.com/data/pictures/chains/3/143/2781ab2c532b711ecd401571cdd87eb9.jpg",
      "https://b.zmtcdn.com/data/pictures/chains/3/143/c751805b5927046d340926f870a95f5e.jpg"
    ]
  }
  return (
    <div className="restaurant-list">
      <div className="restaurant-card">
        <img className="restaurant-poster" src={data.restaurant_thumb} alt={data.restaurant_name} />
        <h3 className="restaurant-name">{data.restaurant_name}</h3>
        <h5>Address - {data.address}</h5>
        <p style={{ margin: "0px" }}>Rating: ⭐{data.average_rating} {data.rating_text}</p>
        <div className="style-card">
          <p>Cost: Rs {data.cost}/-</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

function Counter() {
  // let like = 10
  const [like, setLike] = useState(0)
  const [dislike, setDislike] = useState(0)
  console.log("Like updated", like)

  return (
    <div>
      <button onClick={() => {
        setLike(like + 1)
        console.log(like)
      }}>👍 {like}</button>

      <button onClick={() => {
        setDislike(dislike + 1)
        console.log(dislike)
      }}>👎 {dislike}</button>

    </div>
  )
}