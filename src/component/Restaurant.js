import { Counter } from "./Counter";
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function Restaurant({ restaurantData, id }) {
  console.log(restaurantData);
  const [show, setShow] = useState(true)
  const navigate = useNavigate()

  const styles = {
    margin: "0px",
    color: restaurantData.average_rating >= 4 ? "green" : "red"
  }

  // true => block
  // false => none

  const AddressStyle = {
    display: show ? "block" : "none"
  }

  return (
    <div className="restaurant-card">
      <img className="restaurant-poster" src={restaurantData.restaurant_thumb} alt={restaurantData.restaurant_name} />
      <h3 className="restaurant-name">{restaurantData.restaurant_name} - {id}</h3>

      <button onClick={() => setShow(!show)}>Toggle description</button>

      <button onClick={() => navigate(`/restaurantList/${id}`)}>Info</button>

      {/* <p style={AddressStyle}>Address - {restaurantData.address}</p> */}
      {show ? <p>Address - {restaurantData.address}</p> : ""}

      <p style={styles}>Rating: ⭐{restaurantData.average_rating} {restaurantData.rating_text}</p>
      <div className="style-card">
        <p>Cost: Rs {restaurantData.cost}/-</p>
        <button>Add to Cart</button>
      </div>
      <Counter />
    </div>

  );
}
