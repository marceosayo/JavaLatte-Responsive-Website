function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bottom-0 text-center text-black leading-5 dark:bg-black/60 dark:text-white/85">
      <p>
        <strong>&copy; {new Date().getFullYear()}</strong> JavaLatte
      </p>
      <p className="text-[14px]">All Rights Reserved</p>
      <button
        onClick={scrollTop}
        className="hover:text-amber-700 cursor-pointer"
      >
        <strong>GO BACK UP &uarr;</strong>
      </button>
    </footer>
  );
}

export default Footer;
