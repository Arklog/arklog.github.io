export interface ProjectInterface {
    name: string;
    description: string;
    technologies: string[];
    url?: string;
}

export const projects: ProjectInterface[] = [
    {
        name: "Transcendence",
        description: "Transcendence est un projet de jeu multijoueur en ligne inspiré du célèbre jeu 'Pong'. Le projet vise à créer une expérience de jeu immersive et compétitive, où les joueurs peuvent s'affronter dans des arènes spatiales en utilisant des raquettes pour renvoyer une balle et marquer des points.",
        technologies: [
            "Python",
            "Django",
            "Angular",
            "Typescript",
            "Docker",
            "MySQL"
        ],
        url: "https://github.com/Arklog/transcendence"
    },
    {
        name: "Inception",
        description: "Inception est un projet de conteneurisation et d'orchestration de services, visant à créer une infrastructure de microservices pour une application web. Le projet utilise Docker Compose pour la conteneurisation permettant ainsi de déployer, gérer et faire évoluer facilement les services de l'application.",
        technologies: [
            "Docker",
            "Nginx"
        ],
        url: "git@github.com:Arklog/inception.git"
    },
    {
        name: "IRC",
        description: "Ce projet consiste à créer un serveur de chat en ligne utilisant le protocole IRC (Internet Relay Chat). Le serveur permettra aux utilisateurs de se connecter, de rejoindre des canaux de discussion et d'échanger des messages en temps réel.",
        technologies: [
            "C++",
            "GNU Make"
        ],
        url: "https://github.com/Quoicobhelia/irc"
    },
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
        url: "https://github.com/Arklog/kfs-1"
    },
    {
        name: "Minishell",
        description: "Creation d'un shell minimaliste en C, avec gestion des redirections, des pipes et des commandes internes.",
        technologies: [
            "C",
            "GNU Make",
        ],
        url: "https://github.com/Arklog/minishell"
    }

]

export const projectsMap = new Map<string, ProjectInterface>(projects.map(project => [project.name, project]));

