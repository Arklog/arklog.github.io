import {JSX} from "react";

export interface HorizontalContainerProps {
    wrap: boolean
    elements: JSX.Element[]
}

export function HorizontalContainer(props: HorizontalContainerProps) {
    let flexClass = `flexcontainer-horizontal ${props.wrap ? "flex-wrap" : "flexcontainer"}`;
    console.log(flexClass);
    return (
        <div className={flexClass}>
            {props.elements}
        </div>
    )
}
