import Nav from "./Nav.jsx";
import CoffeePreviews from "./CoffeePreviews.jsx";

import steam from "/steam.png";
import drinkMenu from "/drink-menu.png";
import foodMenu from "/food-menu.png";
import { useState, useRef, useEffect } from "react";

function Menu({ nightMode }) {
  const [showMenu, setShowMenu] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    if (showMenu) {
      elementRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });

  const openMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <main className="menu-container h-auto dark:bg-black/60">
      <header className="welcome-text flex items-center justify-center flex-col text-center leading-[5vw]">
        <img src={steam} className="w-[10vw]" draggable="false" />
        <h2 className="text-[4vw] text-amber-700">Welcome to</h2>
        <h1 className="text-[6vw] text-amber-500 hover:text-[7vw] hover:text-amber-400">
          JavaLatte
        </h1>
        <button
          onClick={() => {
            openMenu();
          }}
          className="flex items-center justify-center border-black border-[3px] border-solid dark:border-white"
        >
          {showMenu ? "CLOSE MENU ←" : "VIEW OUR MENU →"}
        </button>
      </header>

      <CoffeePreviews nightMode={nightMode} />

      <section
        className="menus flex items-center justify-center text-center flex-row gap-[5vw]"
        ref={elementRef}
      >
        <div
          className="left-side"
          style={{ display: showMenu ? "flex" : "none" }}
        >
          <figure>
            <img
              src={drinkMenu}
              className="shadow-[0_5px_15px_rgba(0,0,0,0.3)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)] dark:invert dark:shadow-[0_5px_15px_rgba(255,255,255,0.3)] dark:hover:shadow-[0_10px_25px_rgba(255,255,255,0.5)]"
            />
          </figure>
        </div>

        <div
          className="right-side"
          style={{ display: showMenu ? "flex" : "none" }}
        >
          <figure>
            <img
              src={foodMenu}
              className="shadow-[0_5px_15px_rgba(0,0,0,0.3)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)] dark:invert dark:shadow-[0_5px_15px_rgba(255,255,255,0.3)] dark:hover:shadow-[0_10px_25px_rgba(255,255,255,0.5)]"
            />
          </figure>
        </div>
      </section>
    </main>
  );
}

export default Menu;
