import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3 key={name}>{name}</h3>
      <p key={about}>{about}</p>
      <div className="technologies span">
        {technologies.map((technology) => {
          return <span key={technology}>{technology}</span>;
        })}
        ;
      </div>
    </div>
  );
}

export default ProjectItem;
