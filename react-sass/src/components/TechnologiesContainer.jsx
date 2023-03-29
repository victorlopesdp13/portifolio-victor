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
    { id:"html", name: "HTML", text: "Com o HTML aprendi a criar paginas que contenham conteúdos simples, como textos, imagens, vídeos e etc.", icon: <DiHtml5 /> },
    { id:"css", name: "CSS3", text: "Aprendi que com o css podemos estilizar as páginas web, de forma responsiva com o uso do flex-box e media querys.", icon: <DiCss3 /> },
    { id:"js", name: "JavaScript", text: "Linguagem de programação responsavel pela interação da pagina com o usuário.", icon: <DiJsBadge /> },
    { id:"react", name: "React", text: "Biblioteca do javascript com foco em criar interfaces de usuário em paginas web.", icon: <DiReact /> },
    { id:"sass", name: "Sass", text: "Onde aprendi a escrever css mais limpo, reutilizável e escalável.", icon: <DiSass /> },
    { id:"bootstrap", name: "Bootstrap", text: "Onde aprendi a melhorar ainda mais minha produtividade no estilos da página.", icon: <DiBootstrap /> },
    { id:"github", name: "Git e Github", text: "Onde aprendi a contribuir em projetos com uma equipe de forma assincrona.", icon: <DiGithubBadge /> },
    { id:"typescript", name: "Typescript", text: "Onde aprendi definir o tipo correto de cada dado , manipular dados, criar interfaces entre outras coisas.", icon: <SiTypescript /> },
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
                        <p>{tech.text}</p>
                    </div>
                </div>
           ))} 
        </div>
    </section>
}

export default TechnologiesContainer;