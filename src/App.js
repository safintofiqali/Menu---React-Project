import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

// create an array of menu category
const menuOptions = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  const filterItems = (option) => {
    const value = option === "all" ? "" : option;
    setMenuItems(items.filter((item) => item.category.includes(value)));
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
          <Categories
            menuOptions={menuOptions}
            changeMenuOption={filterItems}
          />
          <Menu menuItems={menuItems} />
        </div>
      </section>
    </main>
  );
}

export default App;
