import Project from "./Project";
import { projects } from "../data/projects";

const Projects = () => {
    // States:
    return (
        <div className="flex flex-col gap-5">
            <div className="flex gap-4 align-middle items-center">
                {projects.map((project)=>(
                    <Project project={project} />
                ))}
            </div>
            <h1 className="text-8xl font-semilight">PROJECTS </h1>
        </div>
    )
}

export default Projects