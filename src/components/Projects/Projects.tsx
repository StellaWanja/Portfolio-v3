import Card from "./Card/Card";
// image imports
import EnvisioIMG from "../../assets/envisio.png";
import "./Projects.css";

const projects: Project[] = [
  {
    id: 1,
    name: "Envisio",
    description:
      "A web application that predicts whether breast cancer is benign or malignant.",
    websiteLink: "https://envisio-frontend.vercel.app",
    githubLink: "https://github.com/StellaWanja/MERN-Envisio",
    img: `${EnvisioIMG}`,
  },
  {
    id: 2,
    name: "Envisio",
    description:
      "A web application that predicts whether breast cancer is benign or malignant.",
    websiteLink: "https://envisio-frontend.vercel.app",
    githubLink: "https://github.com/StellaWanja/MERN-Envisio",
    img: `${EnvisioIMG}`,
  },
  {
    id: 3,
    name: "Envisio",
    description:
      "A web application that predicts whether breast cancer is benign or malignant.",
    websiteLink: "https://envisio-frontend.vercel.app",
    githubLink: "https://github.com/StellaWanja/MERN-Envisio",
    img: `${EnvisioIMG}`,
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
