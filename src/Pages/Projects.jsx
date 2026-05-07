import { projects } from "../data/project";

function Projects(){
    return(
        <>
        <div className="projects">
            <h1>Projects</h1>
            <div className="showcase">
                {projects.map((project) => (
                    <div className="show" key={project.id}>
                        <img src={project.img[1]} alt="" />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="tags">
                            {project.tags.map((tag) => (
                                <div className="tag" key={tag}>{tag}</div>
                            ))}
                        </div>
                        <a href={project.link}> <button>View</button></a>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}
export default Projects;