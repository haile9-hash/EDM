import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import Join from "./pages/Join";
import Story from "./pages/Story";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Poster from "./components/Poster";
import Partners from "./components/Partners";
import Flow from "./components/Flow";
import Events from "./components/Events";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

function App() {
  const showEvents = false;
  const [activeSection, setActiveSection] = useState("");
  const [isHomePage, setIsHomePage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (!isHomePage) return;
      
      const sections = ["home", "about", "story", "join", "contact"];
      let currentSection = "";
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = section;
          }
        }
      });
      
      setActiveSection(currentSection || "home");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  return (
    <div className="App">
      <Router>
        <Poster showEvents={showEvents} />
        <Navbar 
          showEvents={showEvents} 
          activeSection={activeSection} 
          isHomePage={isHomePage}
          setIsHomePage={setIsHomePage}
        />
        <Routes>
          <Route path="/" element={
            <>
              <Home setIsHomePage={setIsHomePage} />
              <Flow />
              <Partners />
            </>
          } />
          <Route path="/about" element={<About setIsHomePage={setIsHomePage} />} />
          <Route path="/story" element={<Story setIsHomePage={setIsHomePage} />} />
          <Route path="/join" element={<Join setIsHomePage={setIsHomePage} />} />
          <Route path="/contact" element={<Contact setIsHomePage={setIsHomePage} />} />
          <Route path="/donate" element={<Donate setIsHomePage={setIsHomePage} />} />
          <Route path="/events" element={<Events setIsHomePage={setIsHomePage} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;