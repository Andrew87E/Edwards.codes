import { GetStaticProps } from "next";
import React from "react";
import { BetterLetters, Page, Fireworks } from "../Components";


const Thanks: GetStaticProps = () => {
    return (
        <>
            <Fireworks />
            <Page currentPage="Contact" meta={{ desc: "Thank you!" }}>
                <section className="text-white text-6xl h-screen w-full self-center test-center">
                    <article className="text-center mt-56">
                        <BetterLetters 
                        words="Thank you! I will be in touch soon"
                        custom=""
                        />
                    </article>
                </section>
            </Page>
        </>
    );
};

export default Thanks;
