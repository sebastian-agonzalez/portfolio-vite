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
              <li>
                <h2 className="text-2xl">
                  <CgAsterisk
                    size={30}
                    className="inline animate-spin-slow mb-1"
                  ></CgAsterisk>{" "}
                  StaffTracker
                </h2>
                <a href="https://stafftracker.vercel.app">
                  stafftracker.vercel.app
                </a>
              </li>
              <div className="my-10"></div>
              <li>
                <h2 className="text-2xl">
                  <HiArrowRight
                    size={20}
                    className="inline animate-bounce mr-2"
                  ></HiArrowRight>
                  Flutter challenge
                </h2>
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
