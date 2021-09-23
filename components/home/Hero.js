import React from "react";

const Hero = () => {
  return (
    <div id="hero" className="bg-white pt-20 lg:grid lg:grid-cols-12">
      <div className="lg:col-span-6">
        <div className="flex flex-col items-center pt-36">
          <span className="pb-1 text-4xl block text-transparent bg-clip-text bg-black">
            Welcome to <span className="text-4xl font-bold text-blue-500">Tsuraya</span>
          </span>
          <span>
            Build the things <span className="text-xl font-bold">easily</span> and <span className="text-xl font-bold">lightly</span>
          </span>
        </div>
      </div>
      <div className="lg:col-span-6 px-10 py-10">
        <div
          className="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <span className="sr-only">Watch our video to learn more</span>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube-nocookie.com/embed/9viHdDVNNH0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
