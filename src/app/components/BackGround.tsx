import React from "react";

function BackGround() {
  return (
    <div className="fixed -z-10 w-screen top-0 h-screen overflow-hidden">
      <video
        autoPlay={true}
        muted={true}
        loop={true}
        className="min-w-full min-h-full fixed object-fill"
      >
        {/* <source
          src="//starlink.ua/media/mod_starlink/car-blur.webm"
          type="video/webm"
        /> */}
        <source
          src="https://www.w3schools.com/howto/rain.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default BackGround;
