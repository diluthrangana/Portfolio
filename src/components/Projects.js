import React, { useEffect, useRef, useState } from "react";
import { projectData } from "../data/projectData"; // Adjust the path as necessary

export const Projects = () => {
  const projectRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          } else {
            entry.target.classList.remove("fade-in");
          }
        });
      },
      { threshold: 0.7 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 1000);

      return () => clearInterval(interval);
    }, [images.length]);

    return (
      <div className="project-carousel">
        <img src={images[currentIndex]} alt={`Carousel ${currentIndex + 1}`} />
      </div>
    );
  };

  return (
    <div className="projects">
      {projectData.map((project, index) => (
        <div
          className={`project-section ${
            index % 2 === 0 ? "left-align" : "right-align"
          }`}
          key={index}
          ref={(el) => (projectRefs.current[index] = el)}
        >
          <Carousel images={project.images} />
          <div className="project-text">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
