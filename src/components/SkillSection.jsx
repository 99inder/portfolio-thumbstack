import React from 'react'
import { blobImage, skillsImagesData } from '../assets/data/skillsSectionData'

const SkillSection = () => {
    return (
        <div id="skills" className="container skills-container ">
            <div className="skill-fade-text">Skills</div>

            <div className="skill-container-left">
                <h2 className="skill-heading">
                    <span className="caps">M</span>e and
                    <br />
                    MyTech Stack
                </h2>

                <div className="skill-subHeading">
                    <p>
                        Hi Everyone, My name is John Doe. I am a Full Stack Web Developer. I
                        have been working since last 3 Years and currently I am working with a
                        Budding Startup in India and a Full Time Freelancer. Currently I am
                        working on NextJs and Making Beautiful UI-UX are my fey features.
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
                        doloremque aspernatur, maiores voluptatum minus laudantium?
                        Perspiciatis accusamus minima porro dolores necessitatibus, magni
                        dolorem et qui veniam nulla sequi molestiae maxime.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quidem
                        quos ullam veritatis voluptates tenetur qui ipsa nulla culpa itaque?
                    </p>
                </div>
            </div>

            <div className="skill-container-right">
                <img src={blobImage} className="blob-style" alt="" />
                {
                    skillsImagesData.map((imgSrc, index) => (
                        <img key={index} src={imgSrc} alt="skill_img" className="skills-logo" />
                    ))
                }
            </div>
        </div>
    )
}

export default SkillSection