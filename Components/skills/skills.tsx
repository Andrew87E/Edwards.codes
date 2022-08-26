import { DiJqueryLogo } from "react-icons/di";
import ReactTooltip from "react-tooltip";
import { TbApi, TbBrandJavascript, TbBrandBootstrap } from "react-icons/tb";
import { FcGoogle, FcLinux } from "react-icons/fc";
import { TiWeatherPartlySunny } from "react-icons/ti";
import {
    FaReact,
    FaSass,
    FaGithub,
    FaHtml5,
    FaCss3Alt,
    FaMarkdown,
    FaNpm,
} from "react-icons/fa";
import {
    SiJavascript,
    SiTypescript,
    SiNodedotjs,
    SiExpress,
    SiTailwindcss,
    SiMongodb,
    SiYarn,
    SiVite,
    SiVercel,
    SiNextdotjs,
    SiBulma,
    SiAuth0,
    SiRedux,
    SiMysql,
    SiDocker,
    SiJest,
    SiGnubash,
    SiFirebase,
    SiHandlebarsdotjs,
    SiStorybook,
    SiHeroku,
} from "react-icons/si";
import { Hover } from "./Hover";

export const Skills: React.FC = () => {
    return (
        <section className="mt-20 w-full inline-flex flex flex-wrap justify-center text-white relative top-52 mb-20">
            <FaHtml5
                color={"#E34F26"}
                className="mx-2 my-2 hover:scale-105"
                size={"10em"}
                id="html"
                data-tip
                data-for="html"
            />
            <Hover id="Html" name="HTML" />

            <FaCss3Alt
                color={"#1572B6"}
                className="mx-2 my-2 hover:scale-105"
                size={"10em"}
                id="css"
            />
            <SiJavascript
                color={"#F7DF1E"}
                className="mx-2 my-2 hover:scale-105"
                size={"10em"}
                id="js"
            />
            <SiTypescript
                color={"#3178C6"}
                className="mx-2 my-2 hover:scale-105"
                size={"10em"}
                id="ts"
            />
            <DiJqueryLogo
                color={"#0769AD"}
                className="mx-2 my-2 hover:scale-105"
                size={"10em"}
                id="jquery"
            />
            <FaSass
                color={"#CC6699"}
                className="mx-2 my-2 hover:scale-105"
                size={"10em"}
                id="sass"
            />
            <SiTailwindcss
                color={"#06B6D4"}
                className="mx-2 my-2 hover:scale-105"
                size={"10em"}
                id="tailwind"
            />
            <SiBulma
                color={"#00D1B2"}
                className="mx-2 my-2 hover:scale-105"
                size={"10em"}
                id="bulma"
            />
            <FaNpm
                color={"#CB3837"}
                className="mx-2 my-2 hover:scale-105"
                size={"10em"}
                id="npm"
            />
            <SiYarn
                color={"#2C8EBB"}
                className="mx-2 my-2 hover:scale-105"
                size={"10em"}
                id="yarn"
            />
            <SiExpress
                color={""}
                className="mx-2 my-2 hover:scale-105"
                size={"10em"}
                id="express"
            />
            <SiNodedotjs
                color={"#339933"}
                className="mx-2 my-2 hover:scale-105"
                size={"10em"}
                id="node"
            />
            <TbApi
                color={"#ffffff"}
                className="mx-2 my-2 hover:scale-105"
                size={"10em"}
                id="api"
            />
            <FaReact
                color={"#61DAFB"}
                className="mx-2 my-2 hover:scale-105"
                size={"10em"}
                id="react"
            />
            <SiRedux
                color={"#764ABC"}
                className="mx-2 my-2 hover:scale-105"
                size={"10em"}
                id="redux"
            />
            <SiNextdotjs
                color={"#ffffff"}
                className="mx-2 my-2 hover:scale-105"
                size={"10em"}
                id="next"
            />
            <SiVite
                color={"#646CFF"}
                className="mx-2 my-2 hover:scale-105"
                size={"10em"}
                id="vite"
            />
            <SiAuth0
                color={"#EB5424"}
                className="mx-2 my-2 hover:scale-105"
                size={"10em"}
                id="auth0"
            />
            <SiMongodb
                color={"#47A248"}
                className="mx-2 my-2 hover:scale-105"
                size={"10em"}
                id="mongo"
            />
            <SiMysql
                color={"#4479A1"}
                className="mx-2 my-2 hover:scale-105"
                size={"10em"}
                id="mysql"
            />
            <FaGithub
                className="mx-2 my-2 hover:scale-105 text-gray-300"
                size={"10em"}
                id="github"
            />
            <TbBrandBootstrap
                color={"#7952B3"}
                className="mx-2 my-2 hover:scale-105"
                size={"10em"}
                id="bootstrap"
            />
            <SiDocker
                color={"#2496ED"}
                className="mx-2 my-2 hover:scale-105"
                size={"10em"}
                id="docker"
            />
            <FaMarkdown
                color={"#2C8EBB"}
                className="mx-2 my-2 hover:scale-105"
                size={"10em"}
                id="markdown"
            />
            <SiJest
                color={"#C21325"}
                className="mx-2 my-2 hover:scale-105"
                size={"10em"}
                id="jest"
            />
            <SiStorybook
                color={"#FF4785"}
                className="mx-2 my-2 hover:scale-105"
                size={"10em"}
                id="storybook"
            />
            <SiGnubash
                color={"#4EAA25"}
                className="mx-2 my-2 hover:scale-105"
                size={"10em"}
                id="bash"
            />
            <FcLinux
                className="mx-2 my-2 hover:scale-105"
                size={"10em"}
                id="linux"
            />
            <SiHandlebarsdotjs
                color={"#FF2F1C"}
                className="mx-2 my-2 hover:scale-105"
                size={"10em"}
                id="handlebars"
            />
            <SiVercel
                color={"#ffffff"}
                className="mx-2 my-2 hover:scale-105"
                size={"10em"}
                id="vercel"
            />
            <SiFirebase
                color={"#FFCA28"}
                className="mx-2 my-2 hover:scale-105"
                size={"10em"}
                id="firebase"
            />
            <FcGoogle
                className="mx-2 my-2 hover:scale-105"
                size={"10em"}
                id="google"
            />
            <SiHeroku
                color={"#430098"}
                className="mx-2 my-2 hover:scale-105"
                size={"10em"}
                id="heroku"
            />
        </section>
    );
};
