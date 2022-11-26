import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "..";

export default observer(function Input({ className, type, name, placeholder }) {
    const [value, setValue] = useState('');
    const { store } = useContext(Context);
    useEffect(() => {
        if (store.isBoolean) {
            store.setIsInfoInputs({
                name: name,
                value: value
            });
            setValue('');
        }
    }, [store.isBoolean])
    return (
        <>
            <input className={className} onChange={e => setValue(e.target.value)} value={value} name={name} placeholder={placeholder} type={type} />
        </>
    )
})