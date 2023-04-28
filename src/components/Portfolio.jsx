import React from "react";
import carLidar from "../assets/images/car_lidar.jpg";
import mask_auto from "../assets/images/mask.jpg";
import chess_nn from "../assets/images/ChessSet.jpg";
import hawkeye from "../assets/images/drdo_img.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: carLidar,
      title: "Depth Estimation",
      details: "Estimating the depth of an object using camera data",
    },
    {
      id: 2,
      src: mask_auto,
      title: "Mask Auto",
      details: "A web app for automatic mask detection",
    },
    {
      id: 3,
      src: chess_nn,
      title: "Chess Neural Network",
      details: "Automated chess game using neural network like AlphaZero",
    },
    {
      id: 4,
      src: hawkeye,
      title: "DRUSE 2018",
      details:
        "Quadcopter (Hawkeye-UAV) for surveillance in the remote areas for border security presented at DRDO Robotics and Umanned System Exposition at JCBCAT, Jadavpur ",
    },
  ];

  //bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen

  //max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div className="p-8 max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title, details }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt={title}
                className="rounded-t-lg w-full h-64 object-cover duration-200 hover:scale-105"
              />

              <div className="p-4">
                <p className="text-2xl font-bold">{title}</p>
                <p className="py-2">{details}</p>
                <div className="flex item-center justify-center">
                  <button className="w-1/2 px-6 m-4 duration-200 hover:scale-105"></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
