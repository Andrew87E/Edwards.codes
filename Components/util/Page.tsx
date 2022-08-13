import Head from "next/head";
import React from "react";
import { Footer } from "../global/footer/footer";
import { MobileMenu } from "../global/navbar/mobileMenu";
import { Navbar } from "../global/navbar/navbar";



type PageProps = {
    currentPage: string
    meta: {
        title?: string
        desc?: string
    }
    children?: JSX.Element | JSX.Element[]
}


export const Page = ({ currentPage, meta: { title, desc }, children }: PageProps) => {
    const pageTitle = `${
        currentPage === 'home'
        ? "Andrew Edwards - Web Developer"
        : `${currentPage} - Edwards.codes`
    }`




    return(
        <div>
            <Head>
                <title>{pageTitle}</title>
                <meta 
                name="title"
                content={pageTitle}
                />
                <meta
                name="description"
                content={desc}
                />
            </Head>

            <main>
            <nav className="fixed top-0 right-0 left-0 h-16 inline-flex drop-shadow-lg items-center justify-between bg-transparent ae-nav">
                <div className="w-full flex items-center justify-between">
                <Navbar currentPage={currentPage} />
                </div>
            </nav>

            {children}

            <Footer />
            </main>
        </div>
    )
}

