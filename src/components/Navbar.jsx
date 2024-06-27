import { useState } from "react";
import { FaSun, FaMoon, FaUserCircle } from "react-icons/fa";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("EN");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    document.documentElement.classList.toggle("dark");
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "EN" ? "ZH" : "EN"));
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800">
      <div className="flex items-center space-x-4">
        <button onClick={toggleTheme} className="text-xl">
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
        <button onClick={toggleLanguage} className="text-xl">
          {language}
        </button>
      </div>
      <Menu menuButton={<MenuButton><FaUserCircle className="text-2xl" /></MenuButton>}>
        <MenuItem>Account</MenuItem>
        <MenuItem>Sign Out</MenuItem>
      </Menu>
    </nav>
  );
};

export default Navbar;