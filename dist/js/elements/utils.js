import { jsx as _jsx } from "react/jsx-runtime";
export function HorizontalContainer(props) {
    let flexClass = `flexcontainer-horizontal ${props.wrap ? "flex-wrap" : "flexcontainer"}`;
    return (_jsx("div", { className: flexClass, children: props.elements }));
}
export function VerticalContainer(props) {
    let flexClass = `flexcontainer-vertical ${props.wrap ? "flex-wrap-no-grow" : "flexcontainer"}`;
    return (_jsx("div", { className: flexClass, children: props.elements }));
}
