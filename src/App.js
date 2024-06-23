import "./App.css";
import { Welcome } from "./Welcome";
import { AddColor } from "./component/AddColor";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import { RestaurantList } from "./component/RestaurantList";
import { Home } from "./component/Home";
import { useState } from "react";
import INITIAL_RESTAURANT_DATA from "./Data/restaurant.json";
import { RestaurantDetail } from "./component/RestaurantDetail";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from "@mui/material/Button";

export default function App() {
  //JS starts

  //Lifting the state up -> Lifted from child to parent
  const [restaurantData, setRestaurantData] = useState(INITIAL_RESTAURANT_DATA);
  const [mode, setMode] = useState("light")
  const navigate = useNavigate()

  console.log(restaurantData);

  //1. Creating - createContext ✅
  //2. Publisher -  provider - context.Provider ✅
  //3. Subscriber - useContext - useContext(context)


  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });



  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
            <Button color="inherit" onClick={() => navigate("/restaurantList")}>RestaurantList</Button>
            <Button color="inherit" onClick={() => navigate("/add-color")}>Add Color</Button>
            <Button color="inherit" onClick={() => setMode(mode === "light" ? "dark" : "light")}>
              {mode === "light" ? "dark" : "light"} Mode</Button>
            {/* <nav>
              <ul>
                Link changes page without refresh
                <li><Link to="/">Home</Link></li>
                <li><Link to="/restaurantList">RestaurantList</Link></li>
                <li><Link to="/add-color">Add Color</Link></li>
              </ul>
            </nav> */}
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurantList" element={<RestaurantList restaurantData={restaurantData} setRestaurantData={setRestaurantData} />} />
          <Route path="/restaurantList/:restaurantid" element={<RestaurantDetail restaurantData={restaurantData} />} />


          <Route path="/add-color" element={<AddColor />} />
        </Routes>
      </div>

    </ThemeProvider>
  );
  //JSX ends
}


