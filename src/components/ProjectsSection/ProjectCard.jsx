import { FaGithub, FaLink } from "react-icons/fa6";

const ProjectCard = ({ projectData, index }) => {

    const { heading, subHeading, backgroundImage, skillsImgsData, githubLink, websiteLink } = projectData;

    const projectNumber = index < 9 ? "0" + (index + 1) : index + 1;
    const numberingPositioningClass = index % 2 === 0 ? "project-number-right" : "project-number-left";
    const contentPositioningClass = index % 2 === 0 ? "project-content-left" : "project-content-right";
    const cardPositioningClass = index % 2 !== 0 ? "projectMarginLeft" : "";

    const style = {
        backgroundImage: `url(${backgroundImage})`
    }

    return (
        <div className={`project-card ${cardPositioningClass}`} style={style}>
            <div className={`project-number ${numberingPositioningClass}`}>
                {projectNumber}
            </div>
            <div className={`project-content ${contentPositioningClass}`}>

                <div className="project-skills-container">
                    {
                        skillsImgsData.map((imgSrc, index) => (
                            <img key={index} className="project-skill" src={imgSrc} alt="skill_img" />
                        ))
                    }
                </div>

                <h2 className="project-heading">{heading}</h2>

                <p className="project-subHeading">
                    {subHeading}
                </p>
                <div className="btn-grp">
                    <button className="btn-pink btn-project">Read More</button>
                    <a href={githubLink}>
                        <FaGithub className="icon" />
                    </a>
                    <a href={websiteLink}>
                        <FaLink className="icon" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard