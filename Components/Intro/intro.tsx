import { useState } from "react";
import { AnimatedLetters } from "../letters/letters";



export const Intro: React.FC = () => {

    return (
        <main className="">
            <section className="inline-flex bg-transparent drop-shadow-md min-h-min mr-1 overflow-hidden min-w-min">
                <article className="text-white">
                    <AnimatedLetters />
                </article>

            </section>

        </main>
    );
};
