import React, { forwardRef } from "react";

function Location(props, ref) {
  return (
    <section
      className="location-container flex items-center justify-center flex-col dark:bg-black/60"
      ref={ref}
    >
      <hr className="split w-full border-[3px] rounded-[10px] opacity-20 text-amber-700 dark:text-amber-500" />
      <p className="location-title text-[1.2rem] w-[90%] text-center dark:text-white">
        We’re located on the right side of the Florida Mall, just steps from the
        main entrance.
      </p>
      <br />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1100.0034542578853!2d-81.3929240359681!3d28.444622349714145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77df712842323%3A0x2a596e15c8f85de0!2sThe%20Florida%20Mall!5e0!3m2!1sen!2sus!4v1755208710140!5m2!1sen!2sus"
        width=""
        height=""
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-[600px] h-[600px] rounded-[1rem] shadow-xl"
      ></iframe>
      <br />
      <p className="text-[0.9rem] text-center w-[90%] text-black/70 dark:text-white">
        The Florida Mall
      </p>
      <p className="text-[0.9rem] text-center w-[90%] text-black/70 dark:text-white">
        8001 S Orange Blossom Trl, Orlando, FL 32809
      </p>
      <hr className="split w-full border-[3px] rounded-[10px] opacity-20 text-amber-700 dark:text-amber-500" />
    </section>
  );
}

export default forwardRef(Location);
