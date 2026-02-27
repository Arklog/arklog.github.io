import {ProjectInterface} from "../projects";


export function ProjectMin(props: ProjectInterface) {
    function handleClick() {
        if (props.url) {
            window.location.href = props.url;
        }
    }

    return (
        <div className="project-min" onClick={handleClick}>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <div className="flex-wrap-no-grow flexcontainer-horizontal">
                {
                    props.technologies.map((technology, i) => {
                        return (
                            <div className="rounded-container">
                                <p>{technology}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}