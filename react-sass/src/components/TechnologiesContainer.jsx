import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiReact,
    DiSass,
    DiBootstrap,
    DiGithubBadge
} from "react-icons/di"

import {
    SiTypescript
} from "react-icons/si"

import "../styles/components/technologiescontainer.sass"

const technologies = [
    { id:"html", name: "HTML", icon: <DiHtml5 /> },
    { id:"css", name: "CSS3", icon: <DiCss3 /> },
    { id:"js", name: "JavaScript", icon: <DiJsBadge /> },
    { id:"react", name: "React", icon: <DiReact /> },
    { id:"sass", name: "Sass", icon: <DiSass /> },
    { id:"bootstrap", name: "Bootstrap", icon: <DiBootstrap /> },
    { id:"github", name: "Github", icon: <DiGithubBadge /> },
    { id:"typescript", name: "Typescript", icon: <SiTypescript /> },
]

const TechnologiesContainer = () => {
    return <section className="technologies-container">
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
           {technologies.map((tech) => (
                <div className="technology-card" id={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className="techlogy-info">
                        <h3>{tech.name}</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
           ))} 
        </div>
    </section>
}

export default TechnologiesContainer;