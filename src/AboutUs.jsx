import shop from "/shop-exterior.png";
import React, { forwardRef } from "react";

function AboutUs(props, ref) {
  return (
    <main
      className="about-us-container flex items-center justify-center flex-row dark:bg-black/60"
      ref={ref}
    >
      <div className="left-about w-[40%]">
        <img
          src={shop}
          className="shop-img w-[50vw] rounded-[2vw] dark:brightness-[80%] shadow-xl"
          draggable="false"
        />
      </div>
      <div className="right-about w-[60%]">
        <h1 className="text-amber-700 text-[2.5rem] text-center dark:text-amber-500">
          About JavaLatte
        </h1>
        <hr className="split border-[3px] rounded-[10px] opacity-20 text-amber-700 dark:text-amber-500" />
        <p className="about-us-desc text-[1.1rem] dark:text-white">
          Welcome to JavaLatte, your cozy corner in Orlando, FL, where coffee
          lovers and tea enthusiasts alike can unwind. Since 2010, we’ve been
          serving expertly crafted lattes, a variety of coffees and teas, and
          freshly baked pastries like buttery croissants, all in a calm and
          relaxing atmosphere. JavaLatte offers free Wi-Fi and a welcoming space
          for every occasion. Come in, sip, and stay awhile—your perfect cup is
          waiting.
        </p>
        <p className="about-us-desc break-all text-black/60 dark:text-white/60">
          +1 (407) 123-4567
          <br />
          cupofjava@javalatte.com
        </p>
      </div>
    </main>
  );
}

export default forwardRef(AboutUs);
