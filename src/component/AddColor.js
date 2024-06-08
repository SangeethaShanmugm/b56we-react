import { useState } from "react";
import { ColorBox } from "./ColorBox";

export function AddColor() {
  const [color, setState] = useState("skyblue");

  const [colorList, setColorList] = useState(["orange", "pink", "red"]);

  const styles = {
    backgroundColor: color
  };
  return (
    <div>
      <input style={styles} type="text"
        onChange={(event) => setState(event.target.value)} />
      {/* copy colorList and add newColor */}
      <button onClick={() => setColorList([...colorList, color])}>Add Color</button>
      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}


    </div>
  );
}
