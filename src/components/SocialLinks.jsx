import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaKaggle,
  FaMedium,
  FaYoutube,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/priteshraj10/",
      meta: "linkedin",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Priteshraj10",
      meta: "github",
    },
    {
      id: 3,
      child: (
        <>
          Kaggle <FaKaggle size={30} />
        </>
      ),
      href: "https://www.kaggle.com/priteshraj10",
      meta: "kaggle",
    },

    {
      id: 4,
      child: (
        <>
          Medium <FaMedium size={30} />
        </>
      ),
      href: "https://priteshraj.medium.com/",
      meta: "medium",
    },

    {
      id: 5,
      child: (
        <>
          YouTube <FaYoutube size={30} />
        </>
      ),
      href: "https://www.youtube.com/channel/UC-93g1xYCwlxvsnkiYJIhFQ",
      meta: "YouTube",
    },

    {
      id: 6,
      child: (
        <>
          Email <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:priteshraj41@gmail.com",
      meta: "gmail",
      style: "rounded-br-md",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] lef-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, meta }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] bg-gray-500 hover:rounded-md duration-300" +
              " " +
              style
            }
            meta={meta}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
