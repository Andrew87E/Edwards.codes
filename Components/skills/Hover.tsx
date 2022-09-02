import ReactTooltip from "react-tooltip";
import React from "react";

export const Hover = (props: {
    backgroundColor: string;
    textColor: string;
    id: string;
    name:
        | string
        | number
        | boolean
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | React.ReactFragment
        | React.ReactPortal;
}) => {
    return (
        <ReactTooltip
            id={props.id}
            type="success"
            textColor={props.textColor}
            backgroundColor={props.backgroundColor}
            className="text-lg transition-transform duration-1000"
        >
            <span>{props.name}</span>
        </ReactTooltip>
    );
};
