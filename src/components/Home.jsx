import React from "react";
import Typewriter from "typewriter-effect";

import HeroImage from "../assets/images/Profile_pic_2.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import {
  FaGithub,
  FaLinkedin,
  FaKaggle,
  FaMedium,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";

const socialMediaLinks = [
  { icon: <FaGithub size={30} />, link: "https://github.com/Priteshraj10" },
  {
    icon: <FaLinkedin size={30} />,
    link: "https://www.linkedin.com/in/priteshraj/",
  },
  { icon: <FaKaggle size={30} />, link: "https://www.kaggle.com/priteshraj10" },
  { icon: <FaMedium size={30} />, link: "https://priteshraj.medium.com/" },
  {
    icon: <FaYoutube size={30} />,
    link: "https://www.youtube.com/channel/UC-93g1xYCwlxvsnkiYJIhFQ",
  },
  { icon: <FaEnvelope size={30} />, link: "mailto:priteshraj41@gmail.com" },
];

const Home = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white flex flex-col justify-center items-center">
      <div className="max-w-screen-lg mx-auto p-6 md:p-10 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left md:pr-10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            Pritesh Raj
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-4">
            <Typewriter
              options={{
                strings: [
                  "Entrepreneur",
                  "Data Scientist",
                  "ML Engineer",
                  "Web Developer",
                  "Tech Blogger",
                ],
                autoStart: true,
                loop: true,
                delay: 150,
              }}
            />
          </h2>

          <p className="text-base md:text-lg lg:text-xl mb-6">
            I am deeply passionate about machine learning, deep learning,
            computer vision, natural language processing (NLP), and web
            development. I am dedicated to mastering new technologies and
            tackling intricate challenges.
          </p>

          <div className="flex justify-center md:justify-start">
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              className="group text-white px-6 py-3 md:py-4 md:px-8 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>

          <div className="flex justify-center md:justify-start mt-4">
            {socialMediaLinks.map((socialMedia, index) => (
              <a
                key={index}
                href={socialMedia.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-gray-300 mx-2 md:mx-4"
              >
                {socialMedia.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="md:w-1/2 md:text-center mt-6 md:mt-0">
          <img
            src={HeroImage}
            alt="my profile"
            className="mx-auto w-4/5 md:w-full h-auto object-contain rounded-lg"
            style={{
              maxWidth: "400px",
              maxHeight: "400px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
