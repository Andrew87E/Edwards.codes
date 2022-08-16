import { ProjectCards } from "../projectCard/ProjectCards";

export const passwordGen = () => {

    return(
        <ProjectCards
        project="Password Generator"
        desc="A simple random password generator using javascript jquery html and css. It prompts the user for some info and generates a password based off of the responses!"
        github="https://github.com/Andrew87E/Password-Generator"
        deploy={{
        url: "https://andrew87e.github.io/Password-Generator/"
    }}
        >

        </ProjectCards>
    )
}
