
import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="p-8 max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full md:h-screen">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          A passionate self-taught Data Scientist and an AI developer from
          India. My passion for AI lies in dreaming up ideas that can serve
          humanity and creating and adding values in the best way and making
          them come true with elegant interfaces. I take great care in the
          experience, architecture, and code quality of the things I build. I am
          also an open-source enthusiast and maintainer. I learned a lot from
          the open-source community and I love how collaboration and knowledge
          sharing happened through open-source.
        </p>
      </div>
    </div>
  );
};

export default About;
