import {JSX} from "react";

export interface HorizontalContainerProps {
    wrap: boolean
    elements: JSX.Element[]
}

export function HorizontalContainer(props: HorizontalContainerProps) {
    let flexClass = `flexcontainer-horizontal ${props.wrap ? "flex-wrap" : "flexcontainer"}`;
    return (
        <div className={flexClass}>
            {props.elements}
        </div>
    )
}

export function VerticalContainer(props: HorizontalContainerProps) {
    let flexClass = `flexcontainer-vertical ${props.wrap ? "flex-wrap-no-grow" : "flexcontainer"}`;
    return (
        <div className={flexClass}>

            {props.elements}
        </div>
    )
}