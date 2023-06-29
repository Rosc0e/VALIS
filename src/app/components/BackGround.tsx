import React from "react";

function BackGround() {
  return (
    <div className="fixed top-0 -z-10 h-screen w-screen overflow-hidden">
      <video
        playsInline={true}
        autoPlay={true}
        muted={true}
        loop={true}
        className="fixed min-h-full min-w-full object-fill"
      >
        {/* <source
          src="//starlink.ua/media/mod_starlink/car-blur.webm"
          type="video/webm"
        /> */}
        <source src="/rain.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default BackGround;
