import { JSXElementConstructor, Key, ReactElement, ReactFragment, useEffect } from "react";
import { TagCloud } from "react-tagcloud";

const data = [
    { value: "Html" },
    { value: "Css" },
    { value: "Sass" },
    { value: "Tailwind Css" },
    { value: "Bootstrap" },
    { value: "JavaScript" },
    { value: "JQuery" },
    { value: "TypeScript" },
    { value: "Node js" },
    { value: "Express" },
    { value: "React" },
    { value: "MongoDB" },
    { value: "Git" },
    { value: "Redux" },
    { value: "Next js" },
    { value: "MySQl" },
    { value: "Docker" },
    { value: "Jest" },
    { value: "Bash" },
    { value: "Linux" },
    { value: "Firebase" },
    { value: "Vercel" },
    { value: "Handlebars" },
    { value: "Bulma" },
    { value: "yarn" },
    { value: "Axios" },
    { value: "Moment js" },
    { value: "Storybook" },
];

const options = {
    radius: 350,
    maxSpeed: "fast",
    initSpeed: "fast",
    direction: "135",
    keep: "true",
};

const customRenderer = (tag: any, size: number, color: any) => (
    <span
        key={tag.value}
        style={{
            animation: "alternate",
            animationDelay: "${Math.random() * 4}s",
            fontSize: `${size / 4}em`,
            border: `none`,
            margin: `6px`,
            color: 'white',
        }}
    >
        {tag.value}
    </span>
);

export const WordCloud = () => {
return (
    <TagCloud tags={data} minSize={2} maxSize={6} renderer={customRenderer} />
)}


