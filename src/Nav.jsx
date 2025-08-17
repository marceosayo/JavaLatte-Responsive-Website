import React, { useState, useEffect } from "react";
import Menu from "./Menu.jsx";

import logoFilled from "/cup-hot-fill.svg";
import logoEmpty from "/cup-hot.svg";
import nightOFF from "/moon-stars.svg";
import nightON from "/moon-stars-fill.svg";
import listClosed from "/list.svg";
import listOpened from "/list-nested.svg";

function Nav({
  nightMode,
  toggleNight,
  scrollToAbout,
  scrollToLocation,
  scrollToContact,
}) {
  const [list, setList] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [promoCode, setPromoCode] = useState(true);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", nightMode);
  }, [openMenu, nightMode]);

  return (
    <header>
      <div
        className={`promo-code ${
          promoCode ? "flex" : "hidden"
        } items-center justify-center bg-red-300 dark:bg-blue-400 fixed top-0 w-full z-1001 text-center flex-wrap text-black dark:text-white`}
      >
        <p>
          First time customer? Get 15% OFF your next order. Show "JAVA15" to the
          cashier when you arrive!
        </p>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-x flex items-align justify-center cursor-pointer hover:text-white sticky right-0"
            onClick={() => setPromoCode(false)}
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
          </svg>
        </button>
      </div>
      <nav
        className={`nav-container flex items-center justify-between fixed ${
          promoCode ? "top-15" : "top-0"
        } z-1000 w-full`}
        style={{
          background: nightMode
            ? "rgba(255, 255, 255)"
            : openMenu
            ? "linear-gradient(rgba(118, 99, 82, 0.8), rgba(236, 231, 226, 0.6))"
            : "linear-gradient(rgba(118, 99, 82, 0.8), rgba(255, 255, 255, 0))",
        }}
      >
        <div className="nav-L">
          <button
            type="button"
            className="nav-list cursor-pointer"
            onClick={() => {
              setList(!list);
              setOpenMenu((open) => !open);
            }}
          >
            <img
              src={list ? listOpened : listClosed}
              alt="Drop menu"
              draggable="false"
            />
          </button>
        </div>

        <div className="nav-M">
          <button
            type="button"
            className="cursor-pointer"
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
          >
            <img
              src={hovered ? logoFilled : logoEmpty}
              onClick={scrollTop}
              alt="Coffee Cup Logo"
              draggable="false"
            />
          </button>
        </div>

        <div className="nav-R">
          <button
            type="button"
            className="cursor-pointer"
            onClick={toggleNight}
          >
            <img
              src={nightMode ? nightON : nightOFF}
              className="night-mode-button"
              alt="Night Mode Switch"
              draggable="false"
            />
          </button>
        </div>
      </nav>

      <nav
        className={`drop-menu flex flex-col text-left items-start justify-center fixed ${
          promoCode ? "top-15" : "top-0"
        } z-1000 bg-[rgba(236,231,226,0.6)] rounded-b-[2rem] dark:bg-black/90 dark:rounded-none`}
        style={{ display: openMenu ? "flex" : "none" }}
      >
        <button
          className="drop-menu-selection dark:text-white"
          onClick={scrollTop}
        >
          MENU
        </button>
        <button
          className="drop-menu-selection dark:text-white"
          onClick={scrollToAbout}
        >
          ABOUT US
        </button>
        <button
          className="drop-menu-selection dark:text-white"
          onClick={scrollToLocation}
        >
          LOCATION
        </button>
        <button
          className="drop-menu-selection dark:text-white"
          onClick={scrollToContact}
        >
          CONTACT US
        </button>
        <button
          className="drop-menu-selection dark:text-white"
          onClick={() => setPromoCode(true)}
        >
          SHOW PROMO CODE
        </button>
      </nav>
    </header>
  );
}

export default Nav;
