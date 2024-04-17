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
              <div className="project-links">
                {project.websiteLink !== "" && (
                  <Link
                    to={project.websiteLink}
                    target="_blank"
                    className="project-link"
                  >
                    Live Project{" "}
                    <MdOutlineKeyboardArrowRight className="project-arrow" />
                  </Link>
                )}

                <Link
                  to={project.githubLink}
                  target="_blank"
                  className="project-link"
                >
                  Learn More{" "}
                  <MdOutlineKeyboardArrowRight className="project-arrow" />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
