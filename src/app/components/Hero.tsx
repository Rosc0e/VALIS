import React from "react";

function Hero() {
  return (
    <div>
      <div className="hero  w-10/12	mx-auto border min-h-[75vh] border-black mt-20  bg-white">
        <div className="hero-content  text-center">
          <div className="max-w-md">
            <h1 className="text-5xl  font-bold">Hello there</h1>
            <p className="py-6">
              Unleashing the Magic of Your Imagination, We Craft Web Experiences
              that Transcend, Captivate, and Resonate.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
