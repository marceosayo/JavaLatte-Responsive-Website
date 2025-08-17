import { useState, useRef } from "react";

import Nav from "./Nav.jsx";
import Menu from "./Menu.jsx";
import AboutUs from "./AboutUs.jsx";
import Location from "./Location.jsx";
import ContactUs from "./ContactUs.jsx";
import Footer from "./Footer.jsx";

function App() {
  const [nightMode, setNightMode] = useState(false);
  const aboutRef = useRef(null);
  const locationRef = useRef(null);
  const contactRef = useRef(null);

  const navScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const toggleNight = () => {
    setNightMode(!nightMode);
  };

  return (
    <>
      <Nav
        nightMode={nightMode}
        toggleNight={toggleNight}
        scrollToAbout={() => navScroll(aboutRef)}
        scrollToLocation={() => navScroll(locationRef)}
        scrollToContact={() => navScroll(contactRef)}
      />
      <Menu nightMode={nightMode} />
      <AboutUs nightMode={nightMode} ref={aboutRef} />
      <Location nightMode={nightMode} ref={locationRef} />
      <ContactUs nightMode={nightMode} ref={contactRef} />
      <Footer nightMode={nightMode} />
    </>
  );
}

export default App;
