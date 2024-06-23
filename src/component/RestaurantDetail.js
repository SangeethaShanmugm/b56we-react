import { useParams } from "react-router-dom";

export function RestaurantDetail({ restaurantData }) {
  const { restaurantid } = useParams();
  console.log(restaurantData[restaurantid].restaurant_name);
  const restaurant = restaurantData[restaurantid]

  return (
    <div><h1>RestaurantDetail Page - {restaurant.restaurant_name}</h1></div>
  );
}
