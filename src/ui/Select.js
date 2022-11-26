import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '..';

export default observer(function Select({ title, name, type, options }) {
    const [active, setActive] = useState(false);
    const [accept, setAccept] = useState(options[0]);
    const setSelect = (option) => {
        setAccept(option);
        setActive(!active);
    }
    const { store } = useContext(Context);
    const data = {
        [name]: accept,
    }
    useEffect(() => {
        if (store.calcBool) {
            store.setCalcInfo(data);
        }
    }, [store.calcBool])
    return (
        <>
            {type == 'select' && <>
                <div>
                    <p className='select-title'>{title}</p>
                    <div className='select-wrapper'>
                        <p onClick={() => setActive(!active)} className='select-wrapper__select'>{accept}</p>
                        {active && <ul>
                            {options.map(option => <li onClick={() => setSelect(option)} className='select-wrapper__option' key={option}>{option}</li>)}
                        </ul>}
                    </div>
                </div>
            </>}
        </>
    )
})