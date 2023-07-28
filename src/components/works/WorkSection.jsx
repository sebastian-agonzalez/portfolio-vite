import ActionBar from "../action-bar/ActionBar";
import FadingRoute from "../animated-route/FadingRoute";
import { useLocation } from "wouter";
import { useEffect, useState } from "react";
import { PiWarningBold } from "react-icons/pi";
import { CgAsterisk } from "react-icons/cg";
import { BiHappyBeaming } from "react-icons/bi";
import { HiArrowRight } from "react-icons/hi";

const WorkSection = () => {
  const [location] = useLocation();
  const [locationpath, setlocationpath] = useState(location);

  useEffect(() => {
    return () => setlocationpath(location);
  }, [location]);

  return (
    <FadingRoute ckey={"works"}>
      <article className="mb-8">
        <div className="">
          <h1 className="text-4xl text-center font-bold">Practice Projects</h1>
          <div className="my-10"></div>
          <div id="content" className="px-6 sm:px-0">
            <div className="block text-xl text-center">
              <div className="block sm:inline">
                <BiHappyBeaming className="inline" />
                <PiWarningBold className="inline" />
              </div>
              <span className="text-base ">Under permanent construction</span>
              <div className="block sm:inline">
                <PiWarningBold className="inline" />
                <BiHappyBeaming className="inline" />
              </div>
            </div>

            <div className="my-14"></div>
            <ul>
              <li id="stafftracker">
                <h2 className="text-2xl"></h2>
                <div className="my-10"></div>
                <div className="flex justify-start">
                  <div className="inline-block">
                    <span className="inline">
                      <CgAsterisk
                        size={30}
                        className="inline animate-spin-slow mb-1"
                      ></CgAsterisk>{" "}
                    </span>
                  </div>
                  <div className="inline-block">
                    <h2 className="font-semibold text-xl">StaffTracker</h2>
                    <div>
                      <a
                        id="window open"
                        href="https://stafftracker.vercel.app"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span className="text-xs">go to </span>→
                        stafftracker.vercel.app
                      </a>
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
                    <h2 className="font-semibold text-xl">Flutter Challenge</h2>
                    <div>
                      <a
                        id="window open"
                        href="https://stafftracker.vercel.app"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span className="text-xs">go to </span>→
                        stafftracker.vercel.app
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </article>
      <ActionBar locationpathname={locationpath} />
    </FadingRoute>
  );
};

export default WorkSection;
