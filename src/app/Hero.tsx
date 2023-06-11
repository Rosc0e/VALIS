import React from "react";
import Content from "./HeroContent";
import Link from "next/link";

function Hero() {
  return (
    <div>
      <div className=" hero	mx-auto max-h-[25vh] w-10/12 border border-black  bg-white sm:mt-10 md:mt-20  lg:min-h-[75vh]">
        <div className="hero-content flex text-center">
          <div className="">
            <h1 className=" text-md font-bold  md:text-5xl">Hello There</h1>
            <p className="py-6 text-[12px] lg:text-xl">
              Unleashing the Magic of Your Imagination, We Craft Web Experiences
              that Transcend, Captivate, and Resonate.
            </p>
            <div className=" ">
              <Content />
            </div>
            <button className="btn-primary btn sm:mt-10">
              <Link href="/Starting"> get started</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
