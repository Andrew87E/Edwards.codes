import ReactTooltip from "react-tooltip";
import React from "react";

export const Hover = (props: {
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
        <ReactTooltip id={props.id} type="success">
            <span>{props.name}</span>
        </ReactTooltip>
    );
};
