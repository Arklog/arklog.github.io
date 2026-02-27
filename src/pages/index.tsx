import {createRoot} from "react-dom/client";
import {ProjectMin} from "../elements/project_min.js";
import {projects} from "../projects.js";
import {Footer} from "../elements/footer.js";
import {Header} from "../elements/header.js";
import {HorizontalContainer} from "../elements/utils.js";

function Presentation() {
    return (
        <section className="presentation">
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia augue magna, sed commodo nulla
                sagittis sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer aliquet
                mattis fringilla. Donec finibus, lectus vel ullamcorper lacinia, nibh dui mollis magna, eget congue erat
                eros at quam. Vivamus iaculis turpis ac augue lacinia, rhoncus dapibus felis tincidunt. Nam mollis
                iaculis risus, at auctor mauris vestibulum nec. Nulla consectetur sit amet velit ullamcorper volutpat.
                Proin et justo sodales, tempor felis ut, imperdiet erat. Nunc cursus, elit dapibus malesuada bibendum,
                eros odio vulputate velit, nec vulputate tellus nibh non diam. Suspendisse et rhoncus tellus. Nulla non
                nisl scelerisque, viverra nibh ut, cursus libero. Sed tristique risus consectetur mauris suscipit
                faucibus. Nullam iaculis, leo et egestas tincidunt, neque odio consequat lacus, faucibus pretium orci
                urna a lorem. Quisque massa dui, luctus quis erat ullamcorper, facilisis feugiat felis. </p>
        </section>
    )
}

function Main() {
    return (
        <main>
            <Presentation/>
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
            <HorizontalContainer elements={[
                <Header/>,
                <div>
                    <Main/>
                    <Footer/>
                </div>
            ]} wrap={false}/>
            {/*<Header/>*/}
            {/*<Main/>*/}
            {/*<Footer/>*/}
        </>
    );
}

const root = createRoot(document.querySelector('body')!)
root.render(<Root/>)
