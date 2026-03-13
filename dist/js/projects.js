export const projects = [
    {
        name: "Transcendence",
        description: "Creation d'un site de jeu de 'Pong' multijoueur en ligne avec une architecture microservices." +
            " Le projet utilise Django pour le backend, Angular pour le frontend, et Docker pour la conteneurisation." +
            " Le projet comprend des fonctionnalités telles que l'authentification des utilisateurs (OAuth2), la gestion" +
            " des parties en temps réel au travers de WebSockets, un système d'expérience et de classement des joueurs," +
            " un systeme de tournois ainsi que" +
            " des salons de discussion, et une interface utilisateur responsive.",
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
        description: "Inception est un projet de conteneurisation et d'orchestration de services, visant à créer une " +
            "infrastructure de microservices pour une application web. Le projet utilise Docker Compose pour la " +
            "conteneurisation permettant ainsi de déployer, gérer et faire évoluer facilement les services de l'application.",
        technologies: [
            "Docker",
            "Nginx",
            "MariaDB",
            "WordPress",
            "Redis"
        ],
        url: "git@github.com:Arklog/inception.git"
    },
    {
        name: "IRC",
        description: "Creation d'un serveur de chat IRC en C++, avec gestion asynchrone des sockets. Implementations de " +
            "commandes basiques telles que NICK, USER, JOIN, PART, PRIVMSG, etc... Le serveur supporte les connexions " +
            "simultanées de plusieurs clients et la gestion de canaux de discussion.",
        technologies: [
            "C++",
            "GNU Make"
        ],
        url: "https://github.com/Quoicobhelia/irc"
    },
    {
        name: "KFS - 1",
        description: "La premiere partie d'un kernel sous architecture x86 ecrit en C++, l'objectif etant d'avoir un kernel minimaliste capable" +
            " de booter, de prendre en charge le multiboot, d'afficher des messages a l'ecran et de recevoir des inputs utilisateur.",
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
];
export const projectsMap = new Map(projects.map(project => [project.name, project]));
