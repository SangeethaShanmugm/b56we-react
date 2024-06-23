import { Counter } from "./Counter";
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


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
      <div className="restaurant-align">
        <h3 className="restaurant-name">{restaurantData.restaurant_name} - {id}</h3>

        <IconButton
          color="primary"
          aria-label="toggleBtn"
          onClick={() => setShow(!show)}
        >
          {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>


        <IconButton
          color="primary"
          aria-label="infoBtn"
          onClick={() => navigate(`/restaurantList/${id}`)}
        >
          <InfoIcon />
        </IconButton>
      </div>


      {/* <p style={AddressStyle}>Address - {restaurantData.address}</p> */}
      {show ? <p>Address - {restaurantData.address}</p> : ""}

      <p style={styles}>Rating: ⭐{restaurantData.average_rating} {restaurantData.rating_text}</p>
      <div className="style-card">
        <p>Cost: Rs {restaurantData.cost}/-</p>
        <Button variant="contained" color="success" size="small">Add to Cart</Button>


      </div>
      <Counter />
    </div>

  );
}
