import Head from "next/head";
import React from "react";
import { Footer } from "../global/footer/footer";
import { MobileMenu } from "../global/navbar/mobileMenu";
import { Navbar } from "../global/navbar/navbar";
import { Github } from "../global/buttons/github";

type PageProps = {
    currentPage: string;
    meta: {
        title?: string;
        desc?: string;
    };
    children?: JSX.Element | React.ReactNode;
};

export const Page = ({ currentPage, meta: { desc }, children }: PageProps) => {
    const pageTitle = `${
        currentPage === "home"
            ? "Andrew Edwards - Web Developer"
            : `${currentPage} - Edwards.codes`
    }`;

    return (
        <div>
            <Head>
                <title>{pageTitle}</title>
                <meta name="title" content={pageTitle} />
                <meta name="description" content={desc} />
            </Head>

            <main>
                <nav className="fixed top-0 right-0 left-0 h-16 inline-flex items-center justify-between z-30 ae-nav">
                    <div className="hidden md:inline-flex w-full items-center justify-between">
                        <Navbar currentPage={currentPage} />
                    </div>
                    <div className="inline-flex justify-between md:hidden w-full items-center">
                        <MobileMenu currentPage={currentPage} />
                    </div>
                </nav>

                {children}
            </main>
            <Github />
            <Footer />
        </div>
    );
};
