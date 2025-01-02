// src/data/projectData.js
import img1 from "../assets/img/projects/TrBlg/1.jpg";
import img2 from "../assets/img/projects/TrBlg/2.jpg";
import img3 from "../assets/img/projects/TrBlg/3.jpg";
import img4 from "../assets/img/projects/TrBlg/4.jpg";
import img5 from "../assets/img/projects/TrBlg/5.jpg";
import img21 from "../assets/img/projects/AITP/1.png";
import img22 from "../assets/img/projects/AITP/2.png";
import img23 from "../assets/img/projects/AITP/3.png";
import img31 from "../assets/img/projects/MedTrk/1.jpg";
import img32 from "../assets/img/projects/MedTrk/2.jpg";


export const projectData = [
  {
    title: "Travel Blog Website",
    description:
      "The Travel Blog Website is a platform built using the MERN stack that allows users to share and explore travel experiences. Featuring full CRUD functionality, users can post their own blogs, edit them, and delete entries as needed. Visitors can also browse through a collection of engaging travel stories accompanied by vivid images, categorized for easy navigation. This project demonstrates an efficient use of modern web technologies to create an intuitive and interactive platform for travel enthusiasts.",
    images: [img1, img2, img3, img4, img5],
  },
  {
    title: "Travel Planner (Mobile App)",
    description:
      "The Travel Planner is an AI-powered mobile app that assists users in creating personalized itineraries based on their location, preferences, and budget. Built with React Native and Firebase, the app features seamless navigation, integration with external APIs, and an intuitive interface. Users can discover hidden gems, gain local insights, and plan trips that cater to their specific needs. It’s the ultimate tool for stress-free travel planning, designed to enhance the travel experience by combining technology with convenience.",
    images: [img21, img22, img23],
  },
  {
    title: "Meditrack (Mobile App)",
    description:
      "Meditrack is a comprehensive health and medical tracking app developed with React Native and Firebase. It enables users to monitor their sleep, diet, fitness, and water intake while connecting with wearable devices for real-time health data synchronization. The app incorporates a machine learning model to detect potential diseases based on symptoms. It also provides tools to manage medical records and health reports efficiently. Meditrack ensures users have a holistic approach to their well-being, emphasizing convenience and advanced analytics.",
    images: [img31, img32],
  },
];

