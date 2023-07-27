import { useLocation } from "wouter";
import { useEffect, useState } from "react";

import ActionBar from "../action-bar/ActionBar";
import FadingRoute from "../animated-route/FadingRoute";

import { PiLinkedinLogo } from "react-icons/pi";
import { TbMoodCrazyHappy } from "react-icons/tb";
import { MdAlternateEmail } from "react-icons/md";

const ContactSection = () => {
  const [location] = useLocation();
  const [locationpath, setlocationpath] = useState(location);

  useEffect(() => {
    return () => setlocationpath(location);
  }, [location]);

  return (
    <FadingRoute ckey={"contact"}>
      <article className="flex justify-center w-full md:lg:max-w-xl sm:max-w-sm">
        <div className="">
          <h1 className="text-4xl text-center font-bold">
            Contact me
            <TbMoodCrazyHappy className="inline animate-spin-slow mb-1 mx-2"></TbMoodCrazyHappy>
          </h1>
          <div className="my-10"></div>
          <ul>
            <li id="linkedin">
              <h2 className="text-2xl"></h2>
              <div className="my-10"></div>
              <div className="flex justify-start">
                <div className="inline-block">
                  <span className="inline">
                    <PiLinkedinLogo
                      size={25}
                      className="inline animate-pulse mx-1"
                    ></PiLinkedinLogo>
                  </span>
                </div>
                <div className="inline-block">
                  <h2 className="font-semibold text-xl">My LinkedIn</h2>
                  <div>
                    <a
                      href="www.linkedin.com/in/sebastián-gonzález-628759184"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="text-xs">go to </span>→
                      in/sebastián-gonzález
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li id="email">
              <h2 className="text-2xl"></h2>
              <div className="my-10"></div>
              <div className="flex justify-start">
                <div className="inline-block">
                  <span className="inline">
                    <MdAlternateEmail
                      size={25}
                      className="inline animate-pulse mx-1"
                    ></MdAlternateEmail>
                  </span>
                </div>
                <div className="inline-block">
                  <h2 className="font-semibold text-xl">My E-Mail</h2>
                  <div>
                    <button
                      className="bg-transparent focus:outline-none"
                      onClick={() => {
                        navigator.clipboard.writeText("onemogen8@gmail.com");
                      }}
                    >
                      <span className="text-xs">click to copy </span>→
                      onemogen8@gmail.com
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </article>
      <ActionBar locationpathname={locationpath} />
    </FadingRoute>
  );
};

export default ContactSection;
