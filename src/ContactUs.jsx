import envelope from "/envelope.png";
import React, { forwardRef } from "react";

function ContactUs(props, ref) {
  return (
    <main className="out flex dark:bg-black/60">
      <section className="contact-container flex flex-row items-center justify-center dark:text-white">
        <div className="flex left-contact w-full h-full">
          <img
            src={envelope}
            className="envelope-img max-w-full object-contain h-auto"
            draggable="false"
          />
        </div>

        <div
          className="flex right-contact bg-white dark:bg-black w-full h-full"
          ref={ref}
        >
          <form className="flex flex-col items-center justify-center gap-3 flex-1 w-[80%]">
            <h2 className="text-[1.6rem] border-b-[2px] border-amber-800/20">
              Reach out to us &darr;
            </h2>
            <input
              type="text"
              placeholder="Name"
              className="dark:text-zinc-900"
            />
            <input
              type="email"
              placeholder="Email"
              className="dark:text-zinc-900"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="dark:text-zinc-900"
            />
            <button type="submit" className="text-black dark:text-white">
              Send
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default forwardRef(ContactUs);
