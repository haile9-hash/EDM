import React, { useEffect } from "react";
import Slider from "../components/Slider";
import Story from "../pages/Story";
import About from "../pages/About";
import Join from "../pages/Join";
import Contact from "../pages/Contact";

function Home({ setIsHomePage }) {
  useEffect(() => {
    setIsHomePage(true);
    return () => setIsHomePage(false);
  }, [setIsHomePage]);

  return (
    <div>
      <div id="home"><Slider /></div>
      <div id="about"><About /></div>
      <div id="story"><Story /></div>
      <div id="join"><Join /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
}

export default Home;