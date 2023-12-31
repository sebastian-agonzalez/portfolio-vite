import { useLocation } from "wouter";
import { useEffect, useState } from "react";

import ActionBar from "../action-bar/ActionBar";
import FadingRoute from "../animated-route/FadingRoute";
import DividerIcon from "../divider-with-icon/DividerIcon";

import { PiLinkedinLogo } from "react-icons/pi";
import { MdAlternateEmail } from "react-icons/md";
import { TbMessages } from "react-icons/tb";

/**
 * section route for contact info
 */
const ContactSection = () => {
  const [copiedVisible, setCopiedVisible] = useState(false);
  const [location] = useLocation();
  const [locationpath, setlocationpath] = useState(location);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  //effect to update child location on component destruction so it "waits" exit animation
  useEffect(() => {
    return () => setlocationpath(location);
  }, [location]);

  //effect for showing link copied to clipboard text
  useEffect(() => {
    if (copiedVisible)
      setTimeout(() => {
        setCopiedVisible(false);
      }, 3000);
  }, [copiedVisible]);

  return (
    <FadingRoute ckey={"contact"}>
      <article className="w-full flex justify-center px-10 mx-auto max-w-3xl mb-8">
        <div className="w-full">
          <DividerIcon>
            <TbMessages size={30}></TbMessages>
          </DividerIcon>
          <div className="py-5"></div>
          <div className="lg:px-4">
            <h1 className="text-4xl text-center font-extrabold">Contact Me</h1>
            <div className="my-16"></div>
            <ul>
              <li id="linkedin">
                <h2 className="text-2xl"></h2>
                <div className="my-10"></div>
                <div className="flex justify-start">
                  <div className="flex flex-col">
                    <span >
                      <PiLinkedinLogo
                        size={25}
                        className="animate-pulse mx-1"
                      ></PiLinkedinLogo>
                    </span>
                  </div>
                  <div className="mx-2"></div>
                  <div className="inline-block">
                    <h2 className="font-semibold text-xl">My LinkedIn</h2>
                    <div>
                      <a
                        id="window open"
                        href="https://www.linkedin.com/in/sebasti%C3%A1n-gonz%C3%A1lez-628759184/"
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
                  <div className="flex flex-col">
                    <span >
                      <MdAlternateEmail
                        size={25}
                        className="animate-pulse mx-1"
                      ></MdAlternateEmail>
                    </span>
                  </div>
                  <div className="mx-2"></div>
                  <div className="inline-block">
                    <h2 className="font-semibold text-xl">My E-Mail</h2>
                    <div>
                      <button
                        className="bg-transparent focus:outline-none text-left"
                        onClick={() => {
                          navigator.clipboard.writeText("onemogen8@gmail.com");
                          setCopiedVisible(true);
                        }}
                      >
                        <span className="text-xs">click to copy </span>
                        <span className=" inline-block rotate-90 sm:rotate-0">
                          →
                        </span>{" "}
                        onemogen8@gmail.com
                      </button>

                      <div
                        className={
                          "flex justify-center " +
                          (copiedVisible ? "visible" : "invisible")
                        }
                      >
                        <span className="text-xs py-1">
                          copied to clipboard!
                        </span>
                      </div>
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

export default ContactSection;
