import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { HorizontalContainer, VerticalContainer } from "./utils.js";
import { experiences } from "../experiences.js";
export function Experience(props) {
    function ExperienceDate(props) {
        return (_jsx("div", { className: "experience-date", children: _jsxs("p", { children: [props.dateBegin, " - ", props.dateEnd] }) }));
    }
    function ExperienceInfo(props) {
        return (_jsxs("div", { className: "experience-info", id: "experiences", children: [_jsxs("h3", { children: [props.position, " @ ", props.company] }), _jsx("ul", { children: props.description.map((item) => _jsx("li", { children: item })) })] }));
    }
    return (_jsx(HorizontalContainer, { wrap: true, elements: [
            _jsx(ExperienceDate, { dateBegin: props.dateBegin, dateEnd: props.dateEnd }),
            _jsx(ExperienceInfo, { company: props.company, position: props.position, description: props.description })
        ] }));
}
export function ExperienceList() {
    return (_jsxs("section", { className: "experiences", children: [_jsx("h2", { children: "Experiences" }), _jsx(VerticalContainer, { wrap: false, elements: experiences.map((experience) => _jsx(Experience, { ...experience })) })] }));
}
