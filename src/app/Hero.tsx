"use client";

import React from "react";
import Content from "./HeroContent";
import Link from "next/link";
import AnimatedText from "react-animated-text-content";

function Hero() {
  return (
    <div>
      <div className=" hero	mx-auto max-h-[25vh] w-10/12 border border-black  bg-white sm:mt-10 md:mt-20  lg:min-h-[75vh]">
        <div className="hero-content flex text-center">
          <div className="">
            <h1 className=" text-md ml16 font-bold md:text-5xl">
              <AnimatedText
                type="chars" // animate words or chars
                animation={{
                  x: "200px",
                  y: "100px",
                  scale: 1.1,
                  ease: "ease-in-out",
                }}
                animationType="rifle"
                interval={0.07}
                duration={0.1}
                tag="p"
                className="animated-paragraph"
                includeWhiteSpaces
                threshold={0.1}
                rootMargin="20%"
              >
                Virtual Artistry and Logical Interface Specialists
              </AnimatedText>
            </h1>
            <p className="py-6 text-[12px] lg:text-xl">
              Unleashing the Magic of Your Imagination, We Craft Web Experiences
              that Transcend, Captivate, and Resonate.
            </p>
            <div className=" ">
              <Content />
            </div>
            {/* <button className="btn-primary btn sm:mt-10">
              <Link href="/Starting"> get started</Link>
            </button> */}

            <div className=" collapse mx-auto w-2/12 bg-black text-center  text-white sm:mt-10">
              <input type="checkbox" />
              <div className="collapse-title text-center text-xl font-medium">
                Contact
              </div>
              <div className="collapse-content">
                <p>Phone: 760-689-8848</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
