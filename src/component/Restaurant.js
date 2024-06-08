import { Counter } from "./Counter";

export function Restaurant({ restaurantData }) {
  console.log(restaurantData);

  return (
    <div className="restaurant-card">
      <img className="restaurant-poster" src={restaurantData.restaurant_thumb} alt={restaurantData.restaurant_name} />
      <h3 className="restaurant-name">{restaurantData.restaurant_name}</h3>
      <h5 style={{ margin: "0px" }}>Address - {restaurantData.address}</h5>
      <p style={{ margin: "0px" }}>Rating: ⭐{restaurantData.average_rating} {restaurantData.rating_text}</p>
      <div className="style-card">
        <p>Cost: Rs {restaurantData.cost}/-</p>
        <button>Add to Cart</button>
      </div>
      <Counter />
    </div>

  );
}
