import "./App.css";

import { useState } from "react";
import Footer from "./components/footer/Footer";
import Logo from "./components/logo/Logo";
import MenuSection from "./components/menu/MenuSection";
import WorkSection from "./components/works/WorkSection";
import AboutSection from "./components/about/AboutSection";
import ContactSection from "./components/contact/ContactSection";
import { AnimatePresence } from "framer-motion";

import { Route, Switch, useLocation } from "wouter";
import Overlay from "./components/overlay-screen/OverlayScreen";
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

  console.log(isHovered);
  return (
    <>
      <div id="first-div" className={" " + "w-full min-h-screen"}>
        <header className="p-10">
          <Logo
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
          />
        </header>
        <div>
          <div className="flex flex-col items-center justify-center flex-1">
            <main>
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
      </div>
      <Footer />

      {isHovered && <OverlayScreen />}
    </>
  );
}

export default App;
