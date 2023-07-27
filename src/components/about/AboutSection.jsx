import ActionBar from "../action-bar/ActionBar";
import FadingRoute from "../animated-route/FadingRoute";
import { useLocation } from "wouter";
import { useEffect, useState } from "react";
import { FaQuestion } from "react-icons/fa";
import { motion } from "framer-motion";
import { PiPeaceBold, PiEyeClosedBold } from "react-icons/pi";
import { FaRegHandPeace } from "react-icons/fa6";

const AboutSection = () => {
  const [location] = useLocation();
  const [locationpath, setlocationpath] = useState(location);

  useEffect(() => {
    return () => setlocationpath(location);
  }, [location]);

  return (
    <FadingRoute ckey={"about"}>
      <article className="flex justify-center px-10 w-full md:lg:max-w-2xl sm:max-w-sm xs:max-w-xs">
        <div className="">
          <div className="flex justify-center">
            <h1 className="text-4xl text-center font-bold animate-bounce pt-4">
              {" "}
              About
            </h1>
            <div className="px-4"></div>
            <motion.div
              className="flex items-center"
              animate={{
                scale: [1, 1.05, 1.05, 0.8, 1],
                rotate: [0, 45, -40, 40, 0],
                //borderRadius: ["0%", "0%", "50%", "50%", "0%"],
              }}
              transition={{
                duration: 2.5,
                ease: "easeInOut",
                //times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              <FaQuestion size={40} className="" />
            </motion.div>{" "}
          </div>
          <div className="my-10"></div>
          <div className="my-10"></div>
          <h2 className="text-2xl text-center"></h2>
          <div className="my-5"></div>
          <p className="text-lg text-justify">
            Hello! I'm Sebastián A. González, a Buenos Aires based web
            developer. I live with my dog and i love to also do music. <br />
            I'm quite open to everything but with a soft spot in my heart for
            front-end developing. So far I've worked more than anything with
            Angular and React. I'm currently navigating the mobile waters with
            Flutter which I'd also love to work with professionally! <br />
            I'm very interested in positions who allow me to grow and learn from
            each other. Hope that we can do it!
          </p>
          <div className="flex justify-end ">
            <PiEyeClosedBold className="rotate-180" size={25} />
            <div className="mx-1"></div>
            <PiEyeClosedBold  className="rotate-180" size={25} />
            <div className="mx-2"></div>
            <FaRegHandPeace size={25} />
            <div className="mx-2"></div>
            <PiPeaceBold size={25} />
          </div>
        </div>
      </article>
      <ActionBar locationpathname={locationpath} />
    </FadingRoute>
  );
};

export default AboutSection;
