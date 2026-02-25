import {ProjectInterface} from "../projects.js";

interface HTMLListProps {
    items: string[];
}

export function HTMLList(props: HTMLListProps) {
    return (
        <ul>
            {props.items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    )

}

export function Project(props: ProjectInterface) {
    return (
        <div className="project">
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <div className="container flex-wrap flexcontainer-horizontal">
                <div className="flex-wrap-no-grow flexcontainer-vertical">
                    <h2>Specifications</h2>
                    <HTMLList items={props.specifications} />
                </div>
                <div className="flex-wrap-no-grow flexcontainer-vertical">
                    <h2>Technologies</h2>
                    <HTMLList items={props.technologies}/>
                </div>
            </div>
            <div className="container flex-wrap-no-grow flexcontainer-vertical">
                <div className="flex-wrap-no-grow flexcontainer-vertical">
                    <h2>challenges</h2>
                    <HTMLList items={props.challenges}/>
                </div>
                <div className="flex-wrap-no-grow flexcontainer-vertical">
                    <h2>a ameliorer</h2>
                    <HTMLList items={props.toImprove} />
                </div>
            </div>
        </div>
    )
}