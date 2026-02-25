import {ProjectInterface} from "../projects.js";

export function Project(props: ProjectInterface) {
    return (
        <div className="project">
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </div>
    )
}