import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function ProjectMin(props) {
    function handleClick() {
        if (props.url) {
            window.location.href = props.url;
        }
    }
    return (_jsxs("div", { className: "project-min", onClick: handleClick, children: [_jsx("h2", { children: props.name }), _jsx("p", { children: props.description }), _jsx("div", { className: "flex-wrap-no-grow flexcontainer-horizontal", children: props.technologies.map((technology, i) => {
                    return (_jsx("div", { className: "rounded-container", children: _jsx("p", { children: technology }) }));
                }) })] }));
}
