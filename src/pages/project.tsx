import { createRoot } from "react-dom/client";
import {ProjectMin} from "../elements/project_min.js";
import { projectsMap } from "../projects.js";
import { Footer } from "../elements/footer.js";
import { Header } from "../elements/header.js";
import {Project} from "../elements/project.js";

function Main() {
    const searchParams = new URLSearchParams(window.location.search);

    const project = projectsMap.get(searchParams.get('id') || "");

    if (!project) {
        return (
            <main>
                <h1>Project not found</h1>
            </main>
        );
    }

    return (
        <main>
            <Project {...project} />
        </main>
    );
}

export function Root() {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
}

console.log('test')
const root = createRoot(document.querySelector('body')!)
root.render(<Root />)
