import { projectsData } from "../../assets/data/projectsSectionData";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
    return (
        <div className="project-section" id="projects">
            <h2 className="page-header">Projects</h2>

            <div className="project-container">
                {
                    projectsData.map((projectData, index) => (
                        <ProjectCard key={index} projectData={projectData} index={index} />
                    ))
                }
            </div>

        </div>
    )
}

export default ProjectsSection