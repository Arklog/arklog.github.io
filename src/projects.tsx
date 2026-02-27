export interface ProjectInterface {
    name: string;
    description: string;
    technologies: string[];
    url?: string;
}

export const projects: ProjectInterface[] = [
    {
        name: "KFS - 1",
        description: "L'objectif de ce projet est de creer un kernel repondant a des specifications tres simples",
        technologies: [
            "C++",
            "i386 assembly",
            "GNU Make",
            "CMake",
            "Docker",
            "Qemu"
        ],
    }
]

export const projectsMap = new Map<string, ProjectInterface>(projects.map(project => [project.name, project]));

