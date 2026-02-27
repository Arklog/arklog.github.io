import {createRoot} from "react-dom/client";
import {ProjectMin} from "../elements/project_min.js";
import {projects} from "../projects.js";
import {Header} from "../elements/header.js";
import {HorizontalContainer, VerticalContainer} from "../elements/utils.js";
import {ExperienceList} from "../elements/experience.js";

function Presentation() {
    function getText() {
        return (
            <VerticalContainer wrap={false} elements={
                [
                    <p>Diplômé de l’école 42, je suis <strong>développeur backend junior</strong> spécialisé en Python
                        et TypeScript,
                        avec une forte appétence pour l’architecture des systèmes et les
                        environnements <strong>DevOps</strong>.
                        <br/> Je conçois et
                        développe des applications robustes en utilisant notamment Django et Express, avec une attention
                        particulière portée à la qualité du code, à la performance et à la maintenabilité.
                        <br/>À l’aise en environnement <strong>Linux</strong>, j’intègre des pratiques <strong>DevOps
                            modernes : conteneurisation avec Docker, mise en place de pipelines CI/CD et déploiement sur
                            AWS</strong>. J’ai déjà mené des projets jusqu’en
                        production,
                        en assurant leur stabilité, leur sécurité et leur fiabilité.
                        <br/><strong>Autonome, proactif et rigoureux, je m’adapte rapidement à de nouveaux
                            environnements techniques</strong> et
                        monte
                        efficacement en compétence sur des technologies variées. Ma capacité d’apprentissage rapide me
                        permet
                        d’être opérationnel rapidement et d’apporter une réelle valeur sur des projets exigeants.
                    </p>,
                    <p>
                        Aujourd’hui, je recherche un CDI me permettant de contribuer à des projets techniques ambitieux,
                        d’évoluer sur des architectures variées et de continuer à développer mon expertise backend et
                        DevOps.
                    </p>
                ]
            }/>
        )
    }

    return (
        <section className="presentation">
            <HorizontalContainer wrap={false} elements={[
                <h2>Presentation</h2>,
                getText()
            ]}/>
        </section>
    )
}

function Main() {
    return (
        <main>
            <Presentation/>
            <ExperienceList/>
            <section className="projects">
                <h2>Projets</h2>
                <div className="flex-wrap flexcontainer-vertical">
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
            <HorizontalContainer elements={[
                <Header/>,
                <div>
                    <Main/>
                    {/*<Footer/>*/}
                </div>
            ]} wrap={false}/>
        </>
    );
}

const root = createRoot(document.querySelector('body')!)
root.render(<Root/>)
