import { Link } from "react-router-dom";
import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiPostman,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import "./Skills.css";

const toolsData = [
  { icon: FaHtml5, name: "HTML5" },
  { icon: FaCss3Alt, name: "CSS3" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: IoLogoJavascript, name: "JavaScript" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: FaNodeJs, name: "Node" },
  { icon: SiExpress, name: "Express" },
  { icon: FaBootstrap, name: "Bootstrap" },
  { icon: FaReact, name: "React" },
  { icon: TbBrandNextjs, name: "Next" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: FaGitAlt, name: "Git" },
  { icon: SiPostman, name: "Postman" },
  { icon: FaFigma, name: "Figma" },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h2>Skills & Experience</h2>
      <p>
        I have full-stack developer experience working with the following
        technologies. For more details, visit my{" "}
        <Link
          to="https://www.linkedin.com/in/stella-w-njoroge/"
          target="_blank"
          className="text-[#86c232]"
        >
          LinkedIn.
        </Link>
      </p>
      <div className="tools">
        {toolsData.map((tool, index) => (
          <div className="tool-show" key={index}>
            <tool.icon className="tool-icon" />
            <span>{tool.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
