import ActionBar from "../action-bar/ActionBar";
import FadingRoute from "../animated-route/FadingRoute";
import DividerIcon from "../divider-with-icon/DividerIcon";

import { useLocation } from "wouter";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { FaQuestion } from "react-icons/fa";
import { PiPeaceBold, PiEyeClosedBold } from "react-icons/pi";
import { FaRegHandPeace } from "react-icons/fa6";
import { PiSealQuestion } from "react-icons/pi";

/**
 * route section to describe profile
 */
const AboutSection = () => {
  const [location] = useLocation();
  const [locationpath, setlocationpath] = useState(location);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  //updates location for child on destroy so that conditional button rendering doesnt happen before animation
  useEffect(() => {
    return () => setlocationpath(location);
  }, [location]);

  return (
    <FadingRoute ckey={"about"}>
      <article className="w-full flex justify-center px-10 mx-auto mb-6 max-w-3xl">
        <div className="">
          <DividerIcon>
            <PiSealQuestion size={30}></PiSealQuestion>
          </DividerIcon>
          <div className="py-5"></div>
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl text-center font-extrabold">About</h1>
            <div className="py-4 hidden"></div>
            <div className="flex justify-center">
              {" "}
              <motion.div
                className="m-auto hidden"
                animate={{
                  scale: [1, 1.05, 1.05, 1.05, 1],
                  rotate: [0, 30, -25, 30, 0],
                  transformOrigin: "bottom",
                  //borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                }}
                transition={{
                  duration: 2.5,
                  ease: "easeInOut",
                  //times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Infinity,
                  repeatDelay: 7,
                }}
              >
                <FaQuestion size={40} className="inline-block" />
              </motion.div>
            </div>
          </div>
          <div className="my-10"></div>
          <div className="my-10"></div>
          <h2 className="text-2xl text-center"></h2>
          <div className="my-5"></div>
          <p className="text-lg font-semibold text-left sm:text-justify sm:tracking-tight">
            Hello! I'm Sebastián A. González, a Buenos Aires based web
            developer. I live with my dog and I also love to make music. <br />
            I'm quite open to everything but with a soft spot in my heart for
            front-end developing. So far I've worked more than anything with
            Angular and React. I'm currently navigating the mobile waters with
            Flutter which I'd also love to work with professionally! <br />
            I'm very interested in positions which allow me to grow and learn
            from each other. Hope that we can do it!
          </p>
          <div className="my-8"></div>
          <div className="flex justify-end">
            <PiEyeClosedBold className="rotate-180" size={25} />
            <div className="mx-1"></div>
            <PiEyeClosedBold className="rotate-180" size={25} />
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
