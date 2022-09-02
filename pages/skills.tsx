import {
    BetterLetters,
    Container,
    Header,
    Page,
    Skills,
    Snow,
} from "../Components";
import React from "react";
import { GetStaticProps } from "next";

const SkillsPage: GetStaticProps = () => {
    return (
        <>
        <Snow />
            <Page
                currentPage="Skills"
                meta={{
                    desc: "These are some of the skills I've been working on!",
                }}
            >
                <section className="text-center w-full mb-24">
                    <Header
                        custom="text-white ae-title-letters"
                        title={
                            <BetterLetters
                                words="Skills"
                                custom="text-9xl"
                            />
                        }
                    />
                </section>
                <Skills />
                <Container />
            </Page>
        </>
    );
};

export default SkillsPage;
