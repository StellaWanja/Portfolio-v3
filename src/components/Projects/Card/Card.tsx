import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "./Card.css";

const Card: React.FC<{ projects: Project[] }> = ({ projects }) => {
  return (
    <>
      {projects.map((project) => {
        return (
          <div key={project.id} className="card">
            <div className="card-img">
              <img src={project.img} alt={`Project ${project.id}`} />
            </div>
            <div className="card-text">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <Link to={"/"} className="project-link">
                View Project{" "}
                <MdOutlineKeyboardArrowRight className="project-arrow" />
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
