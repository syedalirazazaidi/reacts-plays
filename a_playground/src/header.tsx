import { useContext } from "react";
import { DataContext } from "./Theme/DataContext";

function Header() {
  const { nameMy, setNameMy }: any = useContext(DataContext);
  console.log(nameMy, "???");
  const changeName = () => {
    setNameMy("developer");
  };
  return (
    <header>
      <h1>My App new{nameMy}</h1>
      <button onClick={changeName}>Toggle Theme</button>
    </header>
  );
}
export default Header;
