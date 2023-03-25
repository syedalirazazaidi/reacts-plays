import React from "react";
import { useContext } from "react";
import { DataContext } from "./Theme/DataContext";
import { ThemeContext } from "./Theme/ThemeContext";

function Test() {
  const { nameMy, setNameMy }: any = useContext(DataContext);
  console.log(nameMy, "???");
  const changeMy = () => {
    setNameMy("sunny");
  };
  return (
    <header>
      <button onClick={changeMy}>Test Theme</button>
      <h1>My App new{nameMy}</h1>
    </header>
  );
}

export default Test;
