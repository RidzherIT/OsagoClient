import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "..";

export default observer(function Checkbox({ name, question, text }) {
    const [checkbox, setCheckbox] = useState(false);
    const { store } = useContext(Context);
    const data = {
        [name]: checkbox,
    }
    useEffect(() => {
        if (store.calcBool) {
            store.setCalcInfo(data);
        }
    }, [store.calcBool])
    return (
        <>
            <div className="checkbox-flex">
                <input name={name} checked={checkbox} onClick={() => setCheckbox(!checkbox)} type="checkbox" />
                <p className={question && "calculation__input-text__question"}>{text}</p>
            </div>
        </>
    )
})