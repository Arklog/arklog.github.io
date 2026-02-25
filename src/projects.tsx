export interface ProjectInterface {
    name: string;
    smallDescription: string;
    description: string;
    image: string;
}

export const projects: ProjectInterface[] = [
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

export const projectsMap = new Map<string, ProjectInterface>(projects.map(project => [project.name, project]));

