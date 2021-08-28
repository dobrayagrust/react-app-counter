import React, {useState} from "react";
import {Button} from "./Button";
import {DisplayCounterValue} from "./DisplayCounter";

export const Counter = () => {

    let [value, setValue] = useState(0)

    const IncreaseValue = () => {
        const LocalIncreaseValue = value + 1
        setValue(LocalIncreaseValue)
    }
    const ResetCounterValue = () => {
        setValue(0)
    }

    return (
        <div>
            <div>
                <DisplayCounterValue value={value}/>
            </div>
            <div>
                <Button onClick={IncreaseValue}
                        title={"Inc"}
                        disabled={value === 7}
                />
                <Button onClick={ResetCounterValue}
                        title={"Reset"}
                        disabled={value === 0}
                />
            </div>
        </div>
    );
}