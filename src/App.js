import "./App.css";
import { Welcome } from "./Welcome";
import { AddColor } from "./component/AddColor";
import { Routes, Route, Link, useParams } from "react-router-dom";
import { RestaurantList } from "./component/RestaurantList";
import { Home } from "./component/Home";
export default function App() {
  //JS starts

  return (
    <div className="App">
      <nav>
        <ul>
          {/* Link changes page without refresh */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/restaurantList">RestaurantList</Link></li>
          <li><Link to="/add-color">Add Color</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurantList" element={<RestaurantList />} />
        <Route path="/restaurantList/:restaurantid" element={<RestaurantDetail />} />


        <Route path="/add-color" element={<AddColor />} />
      </Routes>
    </div>
  );
  //JSX ends
}


function RestaurantDetail() {
  const { restaurantid } = useParams()
  return (
    <div><h1>RestaurantDetail Page - {restaurantid}</h1></div>
  )
}