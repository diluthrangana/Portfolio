import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import { SiTensorflow, SiMongodb, SiDocker, SiGit, SiBlender } from "react-icons/si";
import { MdVideoLibrary } from "react-icons/md"; // Icon for Premiere Pro and After Effects

export const Skills = () => {
  const skills = [
    { name: "React", icon: <FaReact className="skill-icon react" />, description: "Building dynamic and responsive user interfaces.", percentage: 90 },
    { name: "Node.js", icon: <FaNodeJs className="skill-icon nodejs" />, description: "Backend development with scalable solutions.", percentage: 85 },
    { name: "Python", icon: <FaPython className="skill-icon python" />, description: "Data analysis, scripting, and machine learning applications.", percentage: 80 },
    { name: "Databases", icon: <FaDatabase className="skill-icon database" />, description: "Efficient database design and management.", percentage: 75 },
    { name: "HTML5", icon: <FaHtml5 className="skill-icon html" />, description: "Crafting semantic and SEO-friendly web pages.", percentage: 95 },
    { name: "CSS3", icon: <FaCss3Alt className="skill-icon css" />, description: "Creating visually appealing and responsive designs.", percentage: 90 },
    { name: "JavaScript", icon: <FaJsSquare className="skill-icon javascript" />, description: "Writing clean and efficient frontend and backend code.", percentage: 85 },
    { name: "TensorFlow", icon: <SiTensorflow className="skill-icon tensorflow" />, description: "Developing machine learning models and AI solutions.", percentage: 70 },
    { name: "MongoDB", icon: <SiMongodb className="skill-icon mongodb" />, description: "NoSQL database solutions for modern applications.", percentage: 80 },
    { name: "Docker", icon: <SiDocker className="skill-icon docker" />, description: "Containerization and deployment of applications.", percentage: 75 },
    { name: "Git", icon: <SiGit className="skill-icon git" />, description: "Version control and collaborative development.", percentage: 90 },
    { name: "Blender", icon: <SiBlender className="skill-icon blender" />, description: "3D modeling and rendering for creative projects.", percentage: 70 },
    { name: "Premiere Pro", icon: <MdVideoLibrary className="skill-icon premiere-pro" />, description: "Professional video editing and post-production.", percentage: 65 },
    { name: "After Effects", icon: <MdVideoLibrary className="skill-icon after-effects" />, description: "Motion graphics and visual effects design.", percentage: 60 },
  ];

  return (
    <div className="skills">
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="icon-wrapper">{skill.icon}</div>
            <h3 className="skill-name">{skill.name}</h3>
            <p className="skill-description">{skill.description}</p>
            <div className="skill-progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
