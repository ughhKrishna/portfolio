// Projects.jsx
import { useEffect, useState } from "react";
import "./projects.css"; // Import the CSS file for styles

const projectsData = [
  {
    id: 1,
    title: "Glacier",
    summary:
      "We’re thrilled to unveil our latest logo design for Glacier, a cutting-edge technology brand dedicated to helping people seamlessly integrate technology into their lives. From smart devices to innovative solutions, Glacier is your gateway to a smarter, more connected world. Stay tuned for more exciting updates!",
    image: "glacier.jpg",
    link: "https://www.instagram.com/p/C8pdID2ybMP/?img_index=1", // Replace with your Instagram post link
  },
  {
    id: 2,
    title: "Raj Era",
    summary:
      "Honored to have created a brand identity that captures the essence and elegance of the Raj era. Bringing history and sophistication into every detail. ✨🏰🌿📜",
    image: "rajera.jpg",
    link: "https://www.instagram.com/p/C27Yr5Hxoen/?img_index=1",
  },
  {
    id: 3,
    title: "Roop",
    summary:
      "Introducing the brand identity for Koop 🥚🌟 Our design agency is proud to unveil this logo and brand guidelines for an online egg delivery service. From concept to creation, we’re dedicated to delivering excellence in design! 🎨💼",
    image: "roop.jpg",
    link: "https://www.instagram.com/p/C4niXClxy5B/?img_index=1",
  },
  {
    id: 4,
    title: "Flames",
    summary:
      "Unveiling the brand identity for Flames 🔥🍴 Our design agency crafted this logo and brand guidelines for a unique restaurant on wheels. Dive into the delicious details and vibrant visuals of our design journey! 🎨✨",
    image: "flames.jpg",
    link: "https://www.instagram.com/p/C4sX_i-rXf5/?img_index=1",
  },
  {
    id: 5,
    title: "Mumble",
    summary:
      " Mumble, your new go-to dessert shop for delightful treats! 🍰✨ Indulge in our scrumptious cakes and pastries, crafted with love and the finest ingredients. Follow us for a daily dose of sweetness!",
    image: "mumble.jpg",
    link: "https://www.instagram.com/p/C90JnFfypWA/?img_index=1",
  },
  //   {
  //     id: 6,
  //     title: "Project Title 6",
  //     summary: "Summary of Project 6",
  //     image: "project6.jpg",
  //     link: "https://www.instagram.com/p/PROJECT_LINK_6/",
  //   },
];

const Projects = () => {
  const [visibleItems, setVisibleItems] = useState(
    new Array(projectsData.length).fill(false)
  );

  useEffect(() => {
    const options = {
      threshold: 0.1, // Change this value as needed (0.1 = 10% visibility)
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = Number(entry.target.dataset.index);
        if (entry.isIntersecting) {
          setVisibleItems((prev) => {
            const newVisibleItems = [...prev];
            newVisibleItems[index] = true; // Mark this item as visible
            return newVisibleItems;
          });
        } else {
          setVisibleItems((prev) => {
            const newVisibleItems = [...prev];
            newVisibleItems[index] = false; // Mark this item as hidden
            return newVisibleItems;
          });
        }
      });
    }, options); // Pass the options to the observer

    const projectItems = document.querySelectorAll(".project-item");
    projectItems.forEach((item, index) => {
      item.dataset.index = index; // Store index in the dataset
      observer.observe(item); // Observe each item
    });

    return () => {
      observer.disconnect(); // Clean up the observer on component unmount
    };
  }, []);

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-header">My Work ↴</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            className={`project-item ${visibleItems[index] ? "fade-in" : ""}`} // Add fade-in class if visible
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {" "}
              {/* Ensure it opens in a new tab */}
              <img src={project.image} alt={`Image of ${project.title}`} />
            </a>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
