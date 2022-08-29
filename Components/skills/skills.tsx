import { Hover } from "./Hover";
import { DiJqueryLogo } from "react-icons/di";
import { TbApi, TbBrandBootstrap } from "react-icons/tb";
import { FcGoogle, FcLinux } from "react-icons/fc";
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

export const Skills: React.FC = () => {
    return (
        <section className="w-full text-white relative mb-20 relative p-4 mt-10">
            <section className="w-full flex justify-center">
                <section className="inline-flex flex-wrap">
                    <FaHtml5
                        color={"#E34F26"}
                        className="mx-2 my-2 hover:scale-105"
                        size={"10em"}
                        id="html"
                        data-tip
                        data-for="html"
                    />
                    <Hover
                        id="html"
                        name="HTML"
                        textColor="black"
                        backgroundColor="#3EB143"
                    />

                    <FaCss3Alt
                        color={"#1572B6"}
                        className="mx-2 my-2 hover:scale-105"
                        size={"10em"}
                        id="css"
                        data-tip
                        data-for="css"
                    />
                    <Hover
                        id="css"
                        name="CSS"
                        textColor="black"
                        backgroundColor="#3EB143"
                    />

                    <SiJavascript
                        color={"#F7DF1E"}
                        className="mx-2 my-2 hover:scale-105"
                        size={"10em"}
                        id="js"
                        data-tip
                        data-for="js"
                    />
                    <Hover
                        id="js"
                        name="JavaScript"
                        textColor="black"
                        backgroundColor="#3EB143"
                    />

                    <SiTypescript
                        color={"#3178C6"}
                        className="mx-2 my-2 hover:scale-105"
                        size={"10em"}
                        id="ts"
                        data-tip
                        data-for="ts"
                    />
                    <Hover
                        id="ts"
                        name="TypeScript"
                        textColor="black"
                        backgroundColor="#3EB143"
                    />

                    <DiJqueryLogo
                        color={"#0769AD"}
                        className="mx-2 my-2 hover:scale-105"
                        size={"10em"}
                        id="jquery"
                        data-tip
                        data-for="jquery"
                    />
                    <Hover
                        id="jquery"
                        name="jQuery"
                        textColor="black"
                        backgroundColor="#3EB143"
                    />
                </section>
            </section>

            <section className="w-full flex justify-center">
                <section className="inline-flex flex-wrap">
                    <FaReact
                        color={"#61DAFB"}
                        className="mx-2 my-2 hover:scale-105"
                        size={"10em"}
                        id="react"
                        data-tip
                        data-for="react"
                    />
                    <Hover
                        id="react"
                        name="React"
                        textColor="black"
                        backgroundColor="#3EB143"
                    />

                    <SiRedux
                        color={"#764ABC"}
                        className="mx-2 my-2 hover:scale-105"
                        size={"10em"}
                        id="redux"
                        data-tip
                        data-for="redux"
                    />
                    <Hover
                        id="redux"
                        name="Redux"
                        textColor="black"
                        backgroundColor="#3EB143"
                    />

                    <SiNextdotjs
                        color={"#ffffff"}
                        className="mx-2 my-2 hover:scale-105"
                        size={"10em"}
                        id="next"
                        data-tip
                        data-for="next"
                    />
                    <Hover
                        id="next"
                        name="Next js"
                        textColor="black"
                        backgroundColor="#3EB143"
                    />

                    <SiVite
                        color={"#646CFF"}
                        className="mx-2 my-2 hover:scale-105"
                        size={"10em"}
                        id="vite"
                        data-tip
                        data-for="vite"
                    />
                    <Hover
                        id="vite"
                        name="Vite"
                        textColor="black"
                        backgroundColor="#3EB143"
                    />
                    <SiHandlebarsdotjs
                        color={"#FF2F1C"}
                        className="mx-2 my-2 hover:scale-105"
                        size={"10em"}
                        id="handlebars"
                        data-tip
                        data-for="handlebars"
                    />
                    <Hover
                        id="handlebars"
                        name="Handlebars"
                        textColor="black"
                        backgroundColor="#3EB143"
                    />
                </section>
            </section>

            <section className="w-full flex justify-center">
                <section className="inline-flex flex-wrap">
                    <FaSass
                        color={"#CC6699"}
                        className="mx-2 my-2 hover:scale-105"
                        size={"10em"}
                        id="sass"
                        data-tip
                        data-for="sass"
                    />
                    <Hover
                        id="sass"
                        name="Sass"
                        textColor="black"
                        backgroundColor="#3EB143"
                    />

                    <SiTailwindcss
                        color={"#06B6D4"}
                        className="mx-2 my-2 hover:scale-105"
                        size={"10em"}
                        id="tailwind"
                        data-tip
                        data-for="tailwind"
                    />
                    <Hover
                        id="tailwind"
                        name="Tailwind"
                        textColor="black"
                        backgroundColor="#3EB143"
                    />

                    <SiBulma
                        color={"#00D1B2"}
                        className="mx-2 my-2 hover:scale-105"
                        size={"10em"}
                        id="bulma"
                        data-tip
                        data-for="bulma"
                    />
                    <Hover
                        id="bulma"
                        name="Bulma"
                        textColor="black"
                        backgroundColor="#3EB143"
                    />
                    <TbBrandBootstrap
                        color={"#7952B3"}
                        className="mx-2 my-2 hover:scale-105"
                        size={"10em"}
                        id="bootstrap"
                        data-tip
                        data-for="bootstrap"
                    />
                    <Hover
                        id="bootstrap"
                        name="Boot Strap"
                        textColor="black"
                        backgroundColor="#3EB143"
                    />
                </section>
            </section>

            <section className="w-full flex justify-center">
                <section className="inline-flex flex-wrap ">
                    <SiNodedotjs
                        color={"#339933"}
                        className="mx-2 my-2 hover:scale-105"
                        size={"10em"}
                        id="node"
                        data-tip
                        data-for="node"
                    />
                    <Hover
                        id="node"
                        name="Node js"
                        textColor="black"
                        backgroundColor="#3EB143"
                    />
                    <SiExpress
                        color={""}
                        className="mx-2 my-2 hover:scale-105"
                        size={"10em"}
                        id="express"
                        data-tip
                        data-for="express"
                    />
                    <Hover
                        id="express"
                        name="Express"
                        textColor="black"
                        backgroundColor="#3EB143"
                    />

                    <TbApi
                        color={"#ffffff"}
                        className="mx-2 my-2 hover:scale-105"
                        size={"10em"}
                        id="api"
                        data-tip
                        data-for="api"
                    />
                    <Hover
                        id="api"
                        name="Custom & Third Party APIs"
                        textColor="black"
                        backgroundColor="#3EB143"
                    />
                    <SiAuth0
                        color={"#EB5424"}
                        className="mx-2 my-2 hover:scale-105"
                        size={"10em"}
                        id="auth0"
                        data-tip
                        data-for="auth0"
                    />
                    <Hover
                        id="auth0"
                        name="Auth0"
                        textColor="black"
                        backgroundColor="#3EB143"
                    />
                    <FaNpm
                        color={"#CB3837"}
                        className="mx-2 my-2 hover:scale-105"
                        size={"10em"}
                        id="npm"
                        data-tip
                        data-for="npm"
                    />
                    <Hover
                        id="npm"
                        name="NPM"
                        textColor="black"
                        backgroundColor="#3EB143"
                    />

                    <SiYarn
                        color={"#2C8EBB"}
                        className="mx-2 my-2 hover:scale-105"
                        size={"10em"}
                        id="yarn"
                        data-tip
                        data-for="yarn"
                    />
                    <Hover
                        id="yarn"
                        name="yarn"
                        textColor="black"
                        backgroundColor="#3EB143"
                    />
                </section>
            </section>

            <section className="w-full flex justify-center">
                <section className="inline-flex flex-wrap">
                    <SiDocker
                        color={"#2496ED"}
                        className="mx-2 my-2 hover:scale-105"
                        size={"10em"}
                        id="docker"
                        data-tip
                        data-for="docker"
                    />
                    <Hover
                        id="docker"
                        name="Docker"
                        textColor="black"
                        backgroundColor="#3EB143"
                    />
                    <SiMongodb
                        color={"#47A248"}
                        className="mx-2 my-2 hover:scale-105"
                        size={"10em"}
                        id="mongo"
                        data-tip
                        data-for="mongo"
                    />
                    <Hover
                        id="mongo"
                        name="MongoDB"
                        textColor="black"
                        backgroundColor="#3EB143"
                    />

                    <SiMysql
                        color={"#4479A1"}
                        className="mx-2 my-2 hover:scale-105"
                        size={"10em"}
                        id="MySQl"
                        data-tip
                        data-for="mysql"
                    />
                    <Hover
                        id="mysql"
                        name="mysql"
                        textColor="black"
                        backgroundColor="#3EB143"
                    />
                </section>
            </section>
            <section className="w-full flex justify-center">
                <section className="inline-flex flex-wrap">
                    <SiJest
                        color={"#C21325"}
                        className="mx-2 my-2 hover:scale-105"
                        size={"10em"}
                        id="jest"
                        data-tip
                        data-for="jest"
                    />
                    <Hover
                        id="jest"
                        name="Jest"
                        textColor="black"
                        backgroundColor="#3EB143"
                    />

                    <SiStorybook
                        color={"#FF4785"}
                        className="mx-2 my-2 hover:scale-105"
                        size={"10em"}
                        id="storybook"
                        data-tip
                        data-for="storybook"
                    />
                    <Hover
                        id="storybook"
                        name="Storybook"
                        textColor="black"
                        backgroundColor="#3EB143"
                    />
                </section>
            </section>
            <section className="w-full flex justify-center">
                <section className="inline-flex flex-wrap">
                    <SiVercel
                        color={"#ffffff"}
                        className="mx-2 my-2 hover:scale-105"
                        size={"10em"}
                        id="vercel"
                        data-tip
                        data-for="vercel"
                    />
                    <Hover
                        id="vercel"
                        name="Vercel"
                        textColor="black"
                        backgroundColor="#3EB143"
                    />

                    <SiFirebase
                        color={"#FFCA28"}
                        className="mx-2 my-2 hover:scale-105"
                        size={"10em"}
                        id="firebase"
                        data-tip
                        data-for="firebase"
                    />
                    <Hover
                        id="firebase"
                        name="Firebase"
                        textColor="black"
                        backgroundColor="#3EB143"
                    />

                    <FcGoogle
                        className="mx-2 my-2 hover:scale-105"
                        size={"10em"}
                        id="google"
                        data-tip
                        data-for="google"
                    />
                    <Hover
                        id="google"
                        name="Google services"
                        textColor="black"
                        backgroundColor="#3EB143"
                    />

                    <SiHeroku
                        color={"#430098"}
                        className="mx-2 my-2 hover:scale-105"
                        size={"10em"}
                        id="heroku"
                        data-tip
                        data-for="heroku"
                    />
                    <Hover
                        id="heroku"
                        name="Heroku"
                        textColor="black"
                        backgroundColor="#3EB143"
                    />
                </section>
            </section>

            <section className="w-full flex justify-center">
                <section className="inline-flex flex-wrap">
                    <FaGithub
                        className="mx-2 my-2 hover:scale-105 text-gray-300"
                        size={"10em"}
                        id="github"
                        data-tip
                        data-for="github"
                    />
                    <Hover
                        id="github"
                        name="GitHub"
                        textColor="black"
                        backgroundColor="#3EB143"
                    />
                    <FaMarkdown
                        color={"#2C8EBB"}
                        className="mx-2 my-2 hover:scale-105"
                        size={"10em"}
                        id="markdown"
                        data-tip
                        data-for="markdown"
                    />
                    <Hover
                        id="markdown"
                        name="Markdown"
                        textColor="black"
                        backgroundColor="#3EB143"
                    />
                    <SiGnubash
                        color={"#4EAA25"}
                        className="mx-2 my-2 hover:scale-105"
                        size={"10em"}
                        id="bash"
                        data-tip
                        data-for="bash"
                    />
                    <Hover
                        id="bash"
                        name="bash"
                        textColor="black"
                        backgroundColor="#3EB143"
                    />

                    <FcLinux
                        className="mx-2 my-2 hover:scale-105"
                        size={"10em"}
                        id="linux"
                        data-tip
                        data-for="linux"
                    />
                    <Hover
                        id="linux"
                        name="Linux"
                        textColor="black"
                        backgroundColor="#3EB143"
                    />
                </section>
            </section>
        </section>
    );
};
