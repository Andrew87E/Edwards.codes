import { Contact, Page } from "../Components";
import React from "react";
import { GetStaticProps } from "next";

const ContactMe: GetStaticProps = () => {
    return (
        <>
            <Page currentPage="Contact" meta={{ desc: "Drop me a line!" }}>
                <Contact />
            </Page>
        </>
    );
};

export default ContactMe;
