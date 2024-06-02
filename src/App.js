import "./App.css";
import { Welcome } from "./Welcome";
import { useState } from "react"
export default function App() {
  //JS starts

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
      <Counter />
      {/* {users.map((usr) => (
        <Welcome name={usr.name} age={usr.age} pic={usr.pic} />
      ))} */}
    </div>
  );
  //JSX ends
}


function Counter() {
  // let like = 10
  const [like, setLike] = useState(0)
  console.log("Like updated", like)

  return (
    <div>
      <button onClick={() => {
        setLike(like + 1)
        console.log(like)
      }}>👍 {like}</button>

    </div>
  )
}