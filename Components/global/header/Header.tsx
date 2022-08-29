import React from "react";

type Props = {
    title: string | JSX.Element | React.ReactNode;
    custom?: string;
    children?: JSX.Element | React.ReactNode;
};

export const Header = ({ title, custom, children }: Props) => {
    return (
        <div className={`w-full text-white mt-20 ${custom}`}>
            <h1>{title}</h1>
            {children}
        </div>
    );
};
