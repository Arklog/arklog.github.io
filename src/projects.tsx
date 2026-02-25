export interface ProjectInterface {
    name: string;
    smallDescription: string;
    description: string;
    image: string;
    technologies: string[];
    specifications: string[];
    challenges: string[];
    toImprove: string[];
}

export const projects: ProjectInterface[] = [
    {
        name: "KFS - 1",
        smallDescription: "Premier project d'une suite de project amenant a la creation d'un kernel",
        description: "L'objectif de ce projet est de creer un kernel repondant a des specifications tres simples",
        image: "https://via.placeholder.com/150",
        technologies: [
            "C++",
            "i386 assembly"
        ],
        specifications: [
            "Prise en charge de l'affichage en mode texte (VGA)",
        ],
        challenges: [
            ""
        ],
        toImprove: []
    }
]

export const projectsMap = new Map<string, ProjectInterface>(projects.map(project => [project.name, project]));

