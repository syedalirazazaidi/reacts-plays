import { useContext } from "react";
import { ThemeContext } from "./Theme/ThemeContext";

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme, "themetheme");
  function toggleTheme() {
    const newTheme: any = theme === "red" ? "green" : "blue";
    setTheme(newTheme);
  }
  console.log(theme);
  return (
    <header>
      <h1 style={{ backgroundColor: `${theme}` }}>My App new</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
}
export default Header;
