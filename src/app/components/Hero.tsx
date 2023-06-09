import React from "react";
import Content from "./HeroContent";

function Hero() {
  return (
    <div>
      <div className="hero  w-10/12	mx-auto border lg:min-h-[75vh] sm: max-h-[25vh]  border-black sm:mt-10 md:mt-20  bg-white">
        <div className="hero-content flex text-center">
          <div className="">
            <h1 className=" text-md md:text-5xl  font-bold">Hello there</h1>
            <p className="text-[12px] lg:text-xl py-6">
              Unleashing the Magic of Your Imagination, We Craft Web Experiences
              that Transcend, Captivate, and Resonate.
            </p>
            <div className=" ">
              <Content />
            </div>
            <button className="btn sm:mt-10 btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
