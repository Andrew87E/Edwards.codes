import TextLoop from "react-text-loop";
import React from "react";

type Props = {
    line1: string | JSX.Element | JSX.Element[];
    line2: string | JSX.Element | JSX.Element[];
    line3?: string | JSX.Element | JSX.Element[];
    line4?: string | JSX.Element | JSX.Element[];
    line5?: string | JSX.Element | JSX.Element[];
    line6?: string | JSX.Element | JSX.Element[];
    line7?: string | JSX.Element | JSX.Element[];
    line8?: string | JSX.Element | JSX.Element[];
};

export const Animated = (props: Props) => {
    return (
        <TextLoop>
            <span>{props.line1}</span>
            <span>{props.line2}</span>
            <span>{props.line3}</span>
            <span>{props.line4}</span>
            <span>{props.line5}</span>
            <span>{props.line6}</span>
            <span>{props.line7}</span>
            <span>{props.line8}</span>
        </TextLoop>
    );
};
