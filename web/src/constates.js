import Github from "./components/icons/Github.astro";

export const TAGS = [
    {
        title: "Github",
        class: "bg-blue-500 text-white",
    },
    {
        title: "Preview",
        class: "bg-blue-500 text-white",
    },
];
export const PROJECTS = [
    {
        title: "Juego de Pong en 2D",
        description:
            "Este proyecto incluye dos paletas controladas por el jugador, una bola que rebota en las paredes y las paletas, y un sistema de puntuación. Lógica de colisiones en JavaScript.",
        tangs: TAGS,
        image:
            "projects/01-pong-2D/pong.webp",
        demon: "projects/01-pong-2D/index.html",
        Github: "https://github.com/Jinson25/100-proyectos-pruebas-tecnicas/tree/main/01-pong-2D"
    },
];
