import {HorizontalContainer, VerticalContainer} from "./utils.js";
import {experiences} from "../experiences.js";

export interface ExperienceProps {
    dateBegin: string;
    dateEnd: string;
    company: string;
    position: string;
    description: string[];
}


export function Experience(props: ExperienceProps) {
    function ExperienceDate(props: { dateBegin: string, dateEnd: string }) {
        return (
            <div className="experience-date">
                <p>{props.dateBegin} - {props.dateEnd}</p>
            </div>
        )
    }

    function ExperienceInfo(props: { company: string, position: string, description: string[] }) {
        return (
            <div className="experience-info" id="experiences">
                <h3>{props.position} @ {props.company}</h3>
                <ul>
                    {props.description.map((item) => <li>{item}</li>)}
                </ul>
            </div>
        )
    }

    return (
        <HorizontalContainer wrap={true} elements={[
            <ExperienceDate dateBegin={props.dateBegin} dateEnd={props.dateEnd}/>,
            <ExperienceInfo company={props.company} position={props.position} description={props.description}/>
        ]}/>
    )
}

export function ExperienceList() {
    return (
        <section className="experiences">
            <h2>Experiences</h2>
            <VerticalContainer wrap={false} elements={experiences.map((experience) => <Experience {...experience} />)}/>
        </section>
    )
}