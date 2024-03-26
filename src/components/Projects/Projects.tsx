import Card from "./Card/Card";
// image imports
import EnvisioIMG from "../../assets/envisio.png";
import BoltIMG from "../../assets/bolt.png";
import PlantlyfIMG from "../../assets/plantlyf.jpg";
import "./Projects.css";

const projects: Project[] = [
  {
    id: 1,
    name: "Envisio",
    description:
      "A full-stack web application that predicts whether breast cancer is benign or malignant, built with React, Node.js, Express.js, MongoDB",
    websiteLink: "https://envisio-frontend.vercel.app",
    githubLink: "https://github.com/StellaWanja/MERN-Envisio",
    img: `${EnvisioIMG}`,
  },
  {
    id: 2,
    name: "Bolt",
    description:
      "Developed a shoe ecommerce website using HTML,CSS and JavaScript.",
    websiteLink: "https://stellawanja.github.io/Bolt/",
    githubLink: "https://github.com/StellaWanja/Bolt",
    img: `${BoltIMG}`,
  },
  {
    id: 3,
    name: "PlantLyf",
    description:
      "A responsive landing page built using HTML and CSS.",
    websiteLink: "https://stellawanja.github.io/PlantLyf/",
    githubLink: "https://github.com/StellaWanja/PlantLyf/",
    img: `${PlantlyfIMG}`,
  }
];

const Projects = () => {
  return (
    <section className="projects-section ">
      <h2>Projects</h2>
      <p className="text">Take a look at some of the projects I've dedicated my time to.</p>
      <div className="projects-container">
        <Card projects={projects} />
      </div>
    </section>
  );
};

export default Projects;
