import React from "react";

type Props = {
    words: string;
    custom?: string;
};

export const BetterLetters = (props: Props) => {
    return (
        <>
            {props.words.split("").map((letter, index): any => {
                return (
                    <span
                        key={index}
                        className={`cursor-default transition-all duration-700 hover:duration-100 hover:scale-125 hover:text-lime-500 text-white ${props.custom}`}
                    >
                        {letter}
                    </span>
                );
            })}
        </>
    );
};
