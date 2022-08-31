type Route = {
    title: string;
    path: string;
};

type Projects = {
    project: string;
    desc: string;
    github?: string;
    deploy: {
        url?: string;
    };
    alt: string;
    img: string;
    children?: JSX.Element | JSX.Element[];
};

export const routes: Route[] = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "Projects",
        path: "/projects",
    },
    {
        title: "Blog",
        path: "/blog",
    },
    {
        title: "Skills",
        path: "/skills",
    },
    {
        title: "Contact",
        path: "/contact",
    },
];

export const projects: Projects[] = [
    {
        project: "Password Generator",
        desc: "A simple JS Password Generator",
        github: "https://github.com/Andrew87E/password-generator",
        deploy: {
            url: "https://andrew87e.github.io/Password-Generator",
        },
        alt: "deployed page in action",
        img: "https://github.com/Andrew87E/Password-Generator/blob/main/assets/images/Password_Generator_.gif?raw=true",
    },
];
