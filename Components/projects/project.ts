type ProjectProps = {
    project: string;
    desc: string;
    github?: string;
    deploy: {
        url?: string;
    };
    alt: string
    img: string;
    name: string;
    children?: JSX.Element | JSX.Element[];
};

export const projects = [
    {
        project: "Password Generator"
    },
]

