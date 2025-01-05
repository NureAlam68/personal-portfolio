import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  figma,
  threejs,
} from "../assets";
import expressjs from "../assets/tech/expressjs.png";
import pixso from "../assets/tech/pixso.png";
import github from "../assets/tech/github-logo.png";
import firebase from "../assets/firebase.png";
import espressoEmporium from "../assets/espresso-emporium.png"
import luxeway from "../assets/luxeway.png";
import globepass from "../assets/globepass.png";
import jobnest from "../assets/jobnest.png"
import lingual from "../assets/lingual.png";
import gadget from "../assets/gadget.png"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Non-Cse Student",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: expressjs,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "pixso",
    icon: pixso,
  },
];

const experiences = [
  {
    title: "MongoDB",
    company_name: "Self-Employed",
    icon: mongodb,
    iconBg: "#4DB33D",
    date: "Jan 2024 - Present",
    points: [
      "Designing and managing databases using MongoDB for optimal performance and scalability.",
      "Implementing complex queries and aggregations to efficiently retrieve data.",
      "Ensuring data integrity and implementing backup strategies for MongoDB databases.",
      "Integrating MongoDB with backend APIs for dynamic data manipulation and management.",
    ],
  },
  {
    title: "Express Js",
    icon: expressjs,
    iconBg: "#000000",
    date: "Jan 2024 - Present",
    points: [
      "Building RESTful APIs using Express.js to handle server-side logic.",
      "Creating middleware to manage authentication, authorization, and error handling.",
      "Integrating third-party services and APIs for enhanced application functionality.",
      "Optimizing Express.js routes for faster request handling and performance improvements.",
    ],
  },
  {
    title: "React Js",
    icon: reactjs,
    iconBg: "#000000",
    date: "Jan 2024 - Present",
    points: [
      "Building and maintaining dynamic user interfaces using React.js and functional components.",
      "Managing application state with Redux and Context API for scalable, maintainable code.",
      "Implementing hooks like useState, useEffect, and custom hooks to optimize React functionality.",
      "Ensuring responsive design using CSS frameworks like Tailwind CSS and media queries.",
    ],
  },
  {
    title: "Node Js",
    icon: nodejs,
    iconBg: "#000000",
    date: "Jan 2024 - Present",
    points: [
      "Building server-side applications with Node.js to support scalable web applications.",
      "Creating and managing API endpoints to interact with front-end applications.",
      "Integrating authentication mechanisms like JWT and OAuth for secure user sessions.",
      "Using Node.js with Express.js to handle requests, middleware, and database interactions efficiently.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Nur proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Nur does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Nur optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Espresso Emporium",
    description:
      "A modern web application to explore, order, and enjoy coffee! Espresso Emporium is built with a sleek and responsive design using Tailwind CSS, React, Express, and MongoDB.",
    tags: [
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
    ],
    image: espressoEmporium,
    source_code_link: "https://github.com/NureAlam68/espresso-emporium",
    live_link: "https://coffee-store-6e1bf.web.app/"
  },
  {
    name: "LuxeWay",
    description:
      "LuxeWay is a sleek and modern hotel booking platform designed to provide users with a seamless and engaging experience for discovering and booking hotel rooms.",
    tags: [
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
    ],
    image: luxeway,
    source_code_link: "https://github.com/programming-hero-web-course2/b10a11-client-side-NureAlam68",
    live_link: "https://luxe-way-2a039.web.app/"
  },
  {
    name: "GlobePass",
    description:
      "GlobePass is a full-stack web application designed to streamline the visa application process. Users can explore detailed visa requirements, apply for visas.",
    tags: [
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
    ],
    image: globepass,
    source_code_link: "https://github.com/programming-hero-web-course2/b10-a10-client-side-NureAlam68?tab=readme-ov-file",
    live_link: "https://globe-pass.web.app/#slide1"
  },
  {
    name: "JobNest",
    description:
      "A smart job posting platform that connects employers with the right candidates by aggregating job listings from various sources. Simplify hiring and job searching with ease.",
    tags: [
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
    ],
    image: jobnest,
    source_code_link: "https://github.com/NureAlam68/job-nest-client",
    live_link: "https://jobnest-1fa99.web.app/"
  },
  {
    name: "Lingual Leap",
    description:
      "A fun and interactive language learning application designed to help users expand their vocabulary and improve communication skills in multiple languages.",
      tags: [
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "white-text-gradient",
        },
      ],
    image: lingual,
    source_code_link: "https://github.com/programming-hero-web-course1/b10-a9-authentication-NureAlam68",
    live_link: "https://lingual-leap.web.app/#slide1"
  },
  {
    name: "Gadget Heaven",
    description:
      "Gadget Heaven is a modern e-commerce platform built to showcase gadgets and provide users with a seamless shopping experience.",
      tags: [
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "white-text-gradient",
        },
      ],
    image: gadget,
    source_code_link: "https://github.com/NureAlam68/gadget-heaven?tab=readme-ov-file",
    live_link: "https://vermillion-marzipan-9c851e.netlify.app/"
  },
];

export { services, technologies, experiences, testimonials, projects };
