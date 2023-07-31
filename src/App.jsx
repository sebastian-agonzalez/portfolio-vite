import "./App.css";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Switch, useLocation } from "wouter";

import Footer from "./components/footer/Footer";
import Logo from "./components/logo/Logo";
import MenuSection from "./components/menu/MenuSection";
import WorkSection from "./components/works/WorkSection";
import AboutSection from "./components/about/AboutSection";
import ContactSection from "./components/contact/ContactSection";
import OverlayScreen from "./components/overlay-screen/OverlayScreen";




function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [location] = useLocation();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-10 pb-0 sm:py-5">
        <Logo
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />
      </header>
      <div className="flex-1 w-full">
        <div className="w-full">
          <main className="w-full">
            <AnimatePresence mode="wait">
              <Switch location={location} key={location + "key"}>
                <Route path="/work" component={WorkSection} />
                <Route path="/about" component={AboutSection} />
                <Route path="/contact" component={ContactSection} />
                <Route path="/" component={MenuSection} />
                <Route>
                  <h1>Page Not Found</h1>
                </Route>
              </Switch>
            </AnimatePresence>
          </main>
        </div>
      </div>
      {/* <footer className="w-full px-3 bg-transparent mt-auto">
        <div className="flex sm:text-sm justify-between items-center">
          <span>sebastián andrés gonzaléz</span>
          <span>all rights reserved © 2023</span>
        </div>
      </footer> */}
      <Footer />
      {isHovered && <OverlayScreen />}
    </div>
  );
}

export default App;
