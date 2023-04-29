import React from "react";
import Typewriter from "typewriter-effect";

import HeroImage from "../assets/images/Profile_pic_2.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white flex flex-col justify-center items-center"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center">
        <div className="flex flex-col justify-center h-full md:w-1/2 md:pr-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center md:text-left">
            Hi, I'm Pritesh Raj
          </h1>
          <br />
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-center md:text-left">
            <Typewriter
              options={{
                strings: [
                  "Data Scientist",
                  "ML Engineer",
                  "Web Developer",
                  "Tech blogger",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </h2>

          <p className="text-base md:text-lg lg:text-xl xl:text-2xl mt-4 text-center md:text-left">
            I have a keen interest in machine learning ML Ops, deep learning,
            computer vision, image analysis, NLP, retrieval and pattern
            recognition. I always perfer to learn new upcoming technologies.
          </p>
          <div></div>
          <div className="flex justify-center md:justify-start">
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              className=" group text-white px-6 py-4 my-8 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Protfolio
              <span className=" group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="rounded-m overflow-hidden w-1/2 md:w-1/2">
          <img
            src={HeroImage}
            alt="my profile"
            className = "mx-auto w-1/2 h-auto object-contain rounded-l md:rounded-2xl"
            style={{
              maxHeight: "500px",
              maxWidth: "300px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
