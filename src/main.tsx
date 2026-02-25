import { createRoot } from "react-dom/client";
import {ProjectMin, projects} from "./projects.js";

function Header() {
    return (
        <header>
            <h1>Header</h1>
        </header>
    );
}

function Footer() {
    return (
        <footer>
            <h1>Footer</h1>
        </footer>
    );
}


function Main() {
    return (
        <main>
            <section className="projects">
                <div className="flex-wrap">
                    {
                        projects.map((project) => (<ProjectMin {...project}/>)).concat(
                            projects.map((project) => (<ProjectMin {...project}/>))
                        )
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

console.log('test')
const root = createRoot(document.querySelector('body')!)
root.render(<Root />)
