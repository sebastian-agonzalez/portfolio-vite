import ActionBar from "../action-bar/ActionBar";
import FadingRoute from "../animated-route/FadingRoute";
import { motion } from "framer-motion";

import { PiWarningBold } from "react-icons/pi";
import { CgAsterisk } from "react-icons/cg";
import { BiHappyBeaming } from "react-icons/bi";
import { HiArrowRight } from "react-icons/hi";
import { TbExternalLink } from "react-icons/tb";

import { useLocation } from "wouter";
import { useEffect, useState } from "react";
import DividerIcon from "../divider-with-icon/DividerIcon";
import { IoCodeSlash } from "react-icons/io5";

const WorkSection = () => {
  const [location] = useLocation();
  const [locationpath, setlocationpath] = useState(location);

  useEffect(() => {
    return () => setlocationpath(location);
  }, [location]);

  return (
    <FadingRoute ckey={"works"}>
      <article className="mb-8 w-full flex justify-center pr-10 pl-6 mx-auto max-w-3xl">
        <div className="w-full">
          <DividerIcon>
            <IoCodeSlash size={30}></IoCodeSlash>
          </DividerIcon>
          <div className="py-5"></div>
          <div className="w-full">
            <h1 className="text-4xl text-center font-extrabold">
              Practice Projects
            </h1>
            <div className="my-10"></div>

            <div id="scrolling-text" className="w-full mx-2 overflow-hidden">
              {" "}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: "-100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "linear",
                }}
                style={{ color: "#ffff003e" }}
                className="text-md"
              >
                <BiHappyBeaming className="inline" />
                <PiWarningBold className="inline" />
                <span className="text-base">Site under construction</span>
                <PiWarningBold className="inline" />
                <BiHappyBeaming className="inline" />
              </motion.div>
            </div>

            <div id="content" className="lg:px-5 font-semibold">
              <div className="my-14"></div>
              <ul>
                <li id="stafftracker">
                  <div className="flex justify-start">
                    <div className="inline-block">
                      <span className="inline">
                        <CgAsterisk
                          size={30}
                          className="inline animate-spin-slow mb-1"
                        ></CgAsterisk>
                      </span>
                    </div>
                    <div className="inline-block">
                      <div className="flex justify-between">
                        <h2 className="font-semibold text-xl">StaffTracker</h2>
                        <a
                          className="flex"
                          id="window open"
                          href="https://stafftracker.vercel.app"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <span className="invisible sm:visible">
                            <span className="text-xs">go to </span>→
                            stafftracker
                          </span>
                          <TbExternalLink size={25} className="inline mx-2" />
                        </a>
                      </div>
                      <div className="my-4"></div>
                      <div id="stafftracker-description" className="pr-4">
                        <p className="text-justify [word-spacing:0px] tracking-tighter">
                          An app that mimicks a system to keep track of the
                          staff in a company.
                          <br />
                          Built on{" "}
                          <span className="text-slate-500">Next.js</span>, uses{" "}
                          <span className="text-slate-500">zustand</span> for
                          state management,{" "}
                          <span className="text-slate-500">framer-motion</span>{" "}
                          for route animations, css and{" "}
                          <span className="text-slate-500">tailwind</span>,
                          flowbite and MUI for styling.
                          <br />
                          It consumes its own{" "}
                          <span className="text-slate-500">graphql</span> api
                          using{" "}
                          <span className="text-slate-500">apollo-client</span>.
                          <br />
                          You can see your staff, go the a view page for each,
                          modify the profiles and add a new register.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li id="stafftracker-API">
                  <h2 className="text-2xl"></h2>
                  <div className="my-10"></div>
                  <div className="flex justify-start">
                    <div className="inline-block">
                      <span className="inline">
                        <CgAsterisk
                          size={30}
                          className="inline animate-spin-slow mb-1"
                        ></CgAsterisk>
                      </span>
                    </div>
                    <div className="inline-block">
                      <div className="flex justify-between">
                        <h2 className="font-semibold text-xl">
                          StaffTracker API
                        </h2>
                        <a
                          className="flex"
                          id="window open"
                          href="https://abm-server.onrender.com/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <span className="invisible sm:visible">
                            <span className="text-xs">go to </span>→ ST API
                          </span>
                          <TbExternalLink size={25} className="inline mx-2" />
                        </a>
                      </div>
                      <div className="my-4"></div>
                      <div id="stafftracker-description" className="pr-4">
                        <p className="text-justify [word-spacing:4px] tracking-tighter">
                          The API for StaffTracker web app to consume. <br />
                          Implements{" "}
                          <span className="text-slate-500">
                            Apollo Server Library
                          </span>
                          , using{" "}
                          <span className="text-slate-500">GraphQL</span>{" "}
                          schemas definition with its proper resolvers for
                          handling CRUD operations.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li id="flutterchallenge">
                  <h2 className="text-2xl"></h2>
                  <div className="my-10"></div>
                  <div className="flex justify-start">
                    <div className="inline-block">
                      <span className="inline">
                        <HiArrowRight
                          size={20}
                          className="inline animate-bounce mx-1"
                        ></HiArrowRight>
                      </span>
                    </div>
                    <div className="inline-block">
                      <div className="flex justify-between">
                        <h2 className="font-semibold text-xl">
                          Flutter Challenge
                        </h2>
                        <a
                          className="flex"
                          id="window open"
                          href="https://stafftracker.vercel.app"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <span className="invisible sm:visible">
                            <span className="text-xs">go to </span>→ flutter
                          </span>
                          <TbExternalLink size={25} className="inline mx-2" />
                        </a>
                      </div>
                      <div className="my-4"></div>
                      <div className="pr-4">
                        <p className="text-justify [word-spacing:2px] tracking-tight">
                          A Flutter trainee challenge which consists of
                          displaying a home screen which you can tap and it will
                          display a random color each time. <br />
                          You can also "favorite" any of these colors and store
                          them in your favorite section. You can also "unfav"
                          any to discard them.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>
      <ActionBar locationpathname={locationpath} />
    </FadingRoute>
  );
};

export default WorkSection;
