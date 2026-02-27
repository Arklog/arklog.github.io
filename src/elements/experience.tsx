import {HorizontalContainer} from "./utils.js";

export interface ExperienceProps {
    dateBegin: string;
    dateEnd: string;
    company: string;
    position: string;
    description: string;
}


export function Experience(props: ExperienceProps) {
    function ExperienceDate(props: { dateBegin: string, dateEnd: string }) {
        return (
            <div className="experience-date">
                <p>{props.dateBegin} - {props.dateEnd}</p>
            </div>
        )
    }

    function ExperienceInfo(props: { company: string, position: string, description: string }) {
        return (
            <div className="experience-info">
                <h2>{props.position} @ {props.company}</h2>
                <p>{props.description}</p>
            </div>
        )
    }

    return (
        <HorizontalContainer wrap={false} elements={[
            <ExperienceDate dateBegin={props.dateBegin} dateEnd={props.dateEnd}/>,
            <ExperienceInfo company={props.company} position={props.position} description={props.description}/>
        ]}/>
    )
}
