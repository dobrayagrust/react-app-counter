import React from "react";

type DisplayCounterValueType = {
    value: number
}

export const DisplayCounterValue = (props: DisplayCounterValueType) => {
    return (
        <div>
            {props.value}
        </div>
    );
}