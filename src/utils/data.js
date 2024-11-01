import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiImageOn } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";

export const projectExperience = [
  {
    name: "Back End",
    projects: 2,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Front End",
    projects: 3,
    icon: CiImageOn,
    bg: "#EEC048",
  },
  {
    name: "Full Stack",
    projects: 5,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "I have skills in JavaScript and love for coding. I've collaborated with diverse teams worldwide, enhancing my ability to communicate effectively in any setting.",
  "I`m currently seeking opportunities in web development where I can leverage my technical expertise and cooperative spirit to create impactful digital solutions!",
];

export const comments = [
  {
    img: "./api.png"
  },
  {
    img: "./css.png"
  },
  {
    img: "./express_js.png"
  },
  {
    img: "./html.png"
  },
  {
    img: "./node.png"
  },
  {
    img: "./rails.png",
  },
  {
    img: "./react.png"
  },
  {
    img: "./sql.png"
  },
  {
    img: "./next_js.png"
  },
  {
    img: "./prisma.png"
  },
  {
    img: "./django-python.png"
  },
  {
    img: "./firebase_google.png"
  }
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
