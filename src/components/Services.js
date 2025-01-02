import React, { useEffect, useRef } from "react";

export const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Creating modern and responsive web solutions tailored to your business needs. We focus on performance, accessibility, and scalability.",
      image: require("../assets/img/web-development.png"),
    },
    {
      title: "Mobile Development",
      description:
        "Building intuitive and user-friendly mobile apps for both Android and iOS platforms. Our solutions ensure seamless user experiences.",
      image: require("../assets/img/mobile-development.png"),
    },
    {
      title: "Software Development",
      description:
        "Delivering scalable and robust software solutions for diverse industries. Our services include custom software, system integration, and enterprise applications.",
      image: require("../assets/img/software-development.png"),
    },
    {
      title: "AI Development",
      description:
        "Integrating artificial intelligence for smarter applications. We specialize in machine learning models, predictive analytics, and AI-driven automation.",
      image: require("../assets/img/ai-development1.png"),
    },
  ];

  const serviceRefs = useRef([]);

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

    serviceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      serviceRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="services">
      {services.map((service, index) => (
        <div
          className={`service-section ${index % 2 === 0 ? "left-align" : "right-align"}`}
          key={index}
          ref={(el) => (serviceRefs.current[index] = el)}
        >
          <div className="service-image">
            <img src={service.image} alt={service.title} className="image" />
          </div>
          <div className="service-text">
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Add CSS for .fade-in, .left-align, .right-align, and other necessary styles in your stylesheet to complete the functionality.
