import React from "react";
import pytorch from "../assets/tech_logo/pytorch-icon.svg";
import opencv from "../assets/tech_logo/opencv-icon.svg";
import python from "../assets/tech_logo/python-icon.svg";
import tensorflow from "../assets/tech_logo/tensorflow-icon.svg";
import mongodb from "../assets/tech_logo/mongodb-icon.svg";
import react_lang from "../assets/tech_logo/reactjs-icon.svg";

const Experince = () => {
  const techs = [
    {
      id: 1,
      name: "Python",
      src: python,
      title: "python",
      style: "shadow-yellow-500",
    },
    {
      id: 2,
      name: "Pytorch",
      src: pytorch,
      title: "pytorch",
      style: "shadow-red-500",
    },
    {
      id: 3,
      name: "OpenCV",
      src: opencv,
      title: "opencv",
      style: "shadow-green-500 half-shadow-blue-500",
    },
    {
      id: 4,
      name: "Tensorflow",
      src: tensorflow,
      title: "tensorflow",
      style: "shadow-orange-500",
    },
    {
      id: 5,
      name: "MongoDB",
      src: mongodb,
      title: "mongodb",
      style: "shadow-green-600",
    },
    {
      id: 6,
      name: "React",
      src: react_lang,
      title: "react",
      style: "shadow-blue-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen text-white"
    >
      <div className="max-w-screen-lg mx-auto p-8 flex flex-col justify-center w-full h-full md:h-screen">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Technologies
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, name, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt={name} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experince;
