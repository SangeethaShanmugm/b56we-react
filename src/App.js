import "./App.css";
import { Welcome } from "./Welcome";
import INITIAL_RESTAURANT_DATA from "./Data/restaurant.json"
import { AddColor } from "./component/AddColor";
import { Restaurant } from "./component/Restaurant"
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
{/* Add restaurant */}

      <div className="restaurant-list">
        {restaurantData.map((rest_data, index) => (
          <Restaurant key={index} restaurantData={rest_data} />
        ))}
      </div>

    </div>
  );
  //JSX ends
}


