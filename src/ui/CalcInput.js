import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "..";


export default observer(function CalcInput({ name, placeholder, question, text }) {
    const [value, setValue] = useState('');
    const { store } = useContext(Context);
    const data = {
        [name]: value,
    }
    useEffect(() => {
        if (store.calcBool) {
            store.setCalcInfo(data)
        }
    }, [store.calcBool])
    return (
        <>
            <div>
                <p className={question && "calculation__input-text__question"}>{text}</p>
                <input onChange={(e) => setValue(e.target.value)} value={value} type="text" placeholder={placeholder} />
            </div>
        </>
    )
})