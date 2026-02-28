import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { createRoot } from "react-dom/client";
import { ProjectMin } from "../elements/project_min.js";
import { projects } from "../projects.js";
import { Header } from "../elements/header.js";
import { HorizontalContainer, VerticalContainer } from "../elements/utils.js";
import { ExperienceList } from "../elements/experience.js";
function Presentation() {
    function getText() {
        return (_jsx(VerticalContainer, { wrap: false, elements: [
                _jsx("p", { children: "Je suis d\u00E9veloppeur backend, avec de l'exp\u00E9rience dans le DevOps et le Cloud." }),
                _jsxs("p", { children: ["Durant mon parcours professionnel et acad\u00E9mique, j'ai r\u00E9alis\u00E9 plusieurs projets dans le domaine du backend. ", _jsx("br", {}), "Ce qui m'a permis d'acqu\u00E9rir une solide expertise dans la conception et le d\u00E9veloppement d'applications backend performantes et scalables. ", _jsx("br", {}), "Notamment dans le d\u00E9veloppement d'API RESTful, la gestion de bases de donn\u00E9es relationnelles et NoSQL, ainsi que l'impl\u00E9mentation de microservices."] }),
                _jsxs("p", { children: ["J'ai \u00E9galement pu d\u00E9velopper mes comp\u00E9tences en DevOps gr\u00E2ce \u00E0 des projets ou j'ai mis en place des pipelines CI/CD, utilis\u00E9 des outils de conteneurisation comme Docker et d\u00E9ploy\u00E9 des applications sur des plateformes cloud telles que AWS. ", _jsx("br", {}), "Par cons\u00E9quent, l'automatisation des processus de d\u00E9veloppement et de d\u00E9ploiement est une partie int\u00E9grante de mon approche pour assurer la qualit\u00E9 et la fiabilit\u00E9 des applications que je d\u00E9veloppe."] }),
                _jsxs("p", { children: ["Dans ce m\u00EAme parcours, j'ai d\u00E9ploy\u00E9 des applications Cloud sur AWS, dans le but de garantir leur scalabilit\u00E9, leur disponibilit\u00E9 et leur r\u00E9silience. ", _jsx("br", {}), "J'ai donc acquis une bonne compr\u00E9hension des services AWS tels que EC2, S3, RDS et Lambda, et je suis capable de concevoir des architectures cloud efficaces pour r\u00E9pondre aux besoins sp\u00E9cifiques des projets."] }),
                _jsxs("p", { children: ["Pour r\u00E9aliser ces projets, il \u00E9tait important de garder une bonne coordination avec les \u00E9quipes de travail, de communiquer et de r\u00E9fl\u00E9chir ensemble dans une logique d'optimisation et d'am\u00E9lioration continue. ", _jsx("br", {}), "Et individuellement rester conscient des points d'am\u00E9lioration, de fa\u00E7on \u00E0 monter en comp\u00E9tence."] })
            ] }));
    }
    return (_jsx("section", { className: "presentation", children: _jsx(HorizontalContainer, { wrap: false, elements: [
                _jsx("h2", { children: "Presentation" }),
                getText()
            ] }) }));
}
function Main() {
    return (_jsxs("main", { children: [_jsx(Presentation, {}), _jsx(ExperienceList, {}), _jsxs("section", { className: "projects", children: [_jsx("h2", { children: "Projets" }), _jsx("div", { className: "flex-wrap flexcontainer-vertical", children: projects.map((project) => (_jsx(ProjectMin, { ...project }))) })] })] }));
}
export function Root() {
    return (_jsx(_Fragment, { children: _jsx(HorizontalContainer, { elements: [
                _jsx(Header, {}),
                _jsx("div", { children: _jsx(Main, {}) })
            ], wrap: false }) }));
}
const root = createRoot(document.querySelector('body'));
root.render(_jsx(Root, {}));
