export interface ProjectMinInterface {
    name: string;
    smallDescription: string;
    description: string;
    image: string;
}

export const projects: ProjectMinInterface[] = [
    {
        name: "test",
        smallDescription: "test",
        description: "test",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "test",
        smallDescription: "test",
        description: "test",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "test",
        smallDescription: "test",
        description: "test",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "test",
        smallDescription: "test",
        description: "test",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "test",
        smallDescription: "test",
        description: "test",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "test",
        smallDescription: "test",
        description: "test",
        image: "https://via.placeholder.com/150"
    }
]

export function ProjectMin(props: ProjectMinInterface) {
    return (
        <div className="project-min">
            <h2>{props.name}</h2>
            <p>{props.smallDescription}</p>
            <img src={props.image} alt={props.name} />
        </div>
    );
}