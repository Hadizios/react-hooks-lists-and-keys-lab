import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  const projectss = projects.map((project) => (
    <ProjectItem
      key={project.id}
      name={project.name}
      about={project.about}
      technologies={project.technologies}
    />
  ));
  return (
    <div id="projects">
      <h2>My Projects</h2>w<div id="project-list">{projectss}</div>
    </div>
  );
}

export default ProjectList;
