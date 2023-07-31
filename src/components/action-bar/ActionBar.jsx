import React from "react";

import { IoCodeSlash } from "react-icons/io5";
import { PiSealQuestion } from "react-icons/pi";
import { TbMessages, TbSmartHome } from "react-icons/tb";

import { Link } from "wouter";
import { motion } from "framer-motion";

const ROUTES = Object.freeze({
  home: "/",
  work: "/work",
  about: "/about",
  contact: "/contact",
});

const ActionBar = ({ locationpathname }) => {
  function matchesLocation(route) {
    return locationpathname === route;
  }

  const iconSize = locationpathname !== "/" ? 40 : 90;

  return (
    locationpathname && (
      <div
        id="action-bar"
        className={`w-full flex ${
          matchesLocation(ROUTES.home) ? "my-0 sm:my-10 flex-col lg:flex-row gap-14 sm:gap-16" : "gap-14 sm:gap-20"
        } justify-center items-center lg:pt-10 py-14`}
      >
        <article
          className={
            matchesLocation(ROUTES.home) ? "hidden" : "" + " " + ""
          }
        >
          <motion.button
            whileHover={{ scale: 1.3, transition: { duration: 0.3 } }}
            //   whileTap={{
            //     scale: 50,
            //     opacity: 0.0,
            //     transition: { duration: 3, type: "tween" },
            //     originX: 1,
            //   }}
            className="bg-transparent focus:ring-0 focus:outline-none logo react"
          >
            <Link href={ROUTES.home} className="active">
              <TbSmartHome size={iconSize}></TbSmartHome>
            </Link>
          </motion.button>
        </article>
        <article
          className={
            matchesLocation(ROUTES.work) ? "hidden" : "" + " " + ""
          }
        >
          <motion.button
            whileHover={{ scale: 1.3, transition: { duration: 0.3 } }}
            //   whileTap={{
            //     scale: 50,
            //     opacity: 0.0,
            //     transition: { duration: 3, type: "tween" }, // Smooth animation towards the center
            //     originX: 1, // Set the x origin to the center of the button
            //     //originY: 0.5, // Set the y origin to the center of the button
            //   }} //
            className="bg-transparent focus:ring-0 focus:outline-none logo react"
          >
            <Link href={ROUTES.work} className="active">
              <IoCodeSlash size={iconSize}></IoCodeSlash>
            </Link>
          </motion.button>
        </article>

        <article
          className={
            matchesLocation(ROUTES.about) ? "hidden" : "" + " " + ""
          }
        >
          <motion.button
            whileHover={{ scale: 1.3, transition: { duration: 0.3 } }}
            className="bg-transparent focus:ring-0 focus:outline-none logo react"
          >
            <Link href={ROUTES.about} className="active">
              <PiSealQuestion size={iconSize}></PiSealQuestion>
            </Link>
          </motion.button>
        </article>

        <article
          className={
            matchesLocation(ROUTES.contact) ? "hidden" : "" + " " + ""
          }
        >
          <motion.button
            whileHover={{ scale: 1.3, transition: { duration: 0.3 } }}
            className="bg-transparent focus:ring-0 focus:outline-none logo react"
          >
            <Link href={ROUTES.contact} className="active">
              <TbMessages size={iconSize}></TbMessages>
            </Link>
          </motion.button>
        </article>
      </div>
    )
  );
};

export default ActionBar;
