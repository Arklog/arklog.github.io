import { createRoot } from "react-dom/client";
import {ProjectMin} from "../elements/project_min.js";
import { projects } from "../projects.js";
import { Footer } from "../elements/footer.js";
import { Header } from "../elements/header.js";

function Main() {
    return (
        <main>
            <section className="projects">
                <div className="flex-wrap">
                    {
                        projects.map((project) => (<ProjectMin {...project}/>))
                    }
                </div>
            </section>
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

const root = createRoot(document.querySelector('body')!)
root.render(<Root />)
