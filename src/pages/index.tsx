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
                    <p>Je suis développeur backend, avec de l'expérience dans le DevOps et le Cloud.</p>,
                    <p>
                        Durant mon parcours professionnel et académique, j'ai réalisé plusieurs projets dans le domaine du backend. <br/>
                        Ce qui m'a permis d'acquérir une solide expertise dans la conception et le développement d'applications backend performantes et scalables. <br/>
                        Notamment dans le développement d'API RESTful, la gestion de bases de données relationnelles et NoSQL, ainsi que l'implémentation de microservices.
                    </p>,
                    <p>
                        J'ai également pu développer mes compétences en DevOps grâce à des projets ou j'ai mis en place des pipelines CI/CD, utilisé des outils de conteneurisation comme Docker et déployé des applications sur des plateformes cloud telles que AWS. <br/>
                        Par conséquent, l'automatisation des processus de développement et de déploiement est une partie intégrante de mon approche pour assurer la qualité et la fiabilité des applications que je développe.
                    </p>,
                    <p>
                        Dans ce même parcours, j'ai déployé des applications Cloud sur AWS, dans le but de garantir leur scalabilité, leur disponibilité et leur résilience. <br/>
                        J'ai donc acquis une bonne compréhension des services AWS tels que EC2, S3, RDS et Lambda, et je suis capable de concevoir des architectures cloud efficaces pour répondre aux besoins spécifiques des projets.
                    </p>,
                    <p>
                        Pour réaliser ces projets, il était important de garder une bonne coordination avec les équipes de travail, de communiquer et de réfléchir ensemble dans une logique d'optimisation et d'amélioration continue. <br/>
                        Et individuellement rester conscient des points d'amélioration, de façon à monter en compétence.
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
