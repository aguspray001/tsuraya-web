import React from "react";

const Hero = () => {
  const url =
    "https://images.unsplash.com/flagged/1/apple-gear-looking-pretty.jpg?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";
  return (
    <div class="lg:grid lg:grid-cols-12">
      <div class="lg:col-span-6">
        <div class="flex flex-col items-center pt-36">
          <span class="pb-1 text-4xl block text-transparent bg-clip-text bg-blue-800">
            Welcome to <strong>Tsuraya</strong>
          </span>
          <span>
            Build the things <strong>easily</strong>
          </span>
        </div>
      </div>
      <div class="lg:col-span-6 px-10 py-10">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube-nocookie.com/embed/1f6S3x1XUho"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </div>
  );
};

export default Hero;
