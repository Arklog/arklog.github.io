import {ProjectInterface} from "../projects";



export function ProjectMin(props: ProjectInterface) {
    function handleClick() {
        window.location.href = `project.html?id=${props.name}`;
    }

    return (
        <div className="project-min" onClick={handleClick}>
            <h2>{props.name}</h2>
            <p>{props.smallDescription}</p>
            <img src={props.image} alt={props.name} />
        </div>
    );
}