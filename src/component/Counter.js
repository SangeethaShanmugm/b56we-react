import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

export function Counter() {
  // let like = 10
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  // console.log("Like updated", like);

  // useEffect(() => {
  //   console.log("Like is updated", like)
  // }, [])//call only once

  // useEffect(() => {
  //   console.log("Like is updated", like)
  // }, [like, dislike])

  useEffect(() => {
    console.log("Total like", like + dislike)
  })


  return (
    <div>
      <IconButton
        color="primary"
        aria-label="likeBtn"
        onClick={() => {
          setLike(like + 1);
          // console.log(like);
        }}
      >
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>

      {/* <button
        onClick={() => {
          setLike(like + 1);
          console.log(like);
        }}
      >
        👍 {like}
      </button> */}


      <IconButton
        color="error"
        aria-label="dislikeBtn"
        onClick={() => {
          setDislike(dislike + 1);
          // console.log(dislike);
        }}
      >
        <Badge badgeContent={dislike} color="error">
          👎
        </Badge>
      </IconButton>

      {/* <button
        onClick={() => {
          setDislike(dislike + 1);
          console.log(dislike);
        }}
      >
        👎 {dislike}
      </button> */}
    </div>
  );
}
