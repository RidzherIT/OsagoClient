import React, { useEffect, useState } from "react";

export default function PolisForm({ polis, polisType, sizeComponent, polisImg, polisName, polisFranschiza, polisDate, polisWay, polisPeople, polisPurpose, polisTypeAuto, polisVAuto, polisSale }) {
    useEffect(() => {
        const polisTitle = document.querySelector('.requisites-form__polis-title');
        const polisContent = document.querySelector('.requisites-form__polis-content');
        const polisSale = document.querySelector('.requisites-form__polis-sale');
        sizeComponent && polisTitle.classList.add('big-polis__title');
        sizeComponent && polisContent.classList.add('big-polis__content');
        sizeComponent && polisSale.classList.add('big-polis__sale');
    }, [])
    const [select, setSelect] = useState('Оберіть ліміт');
    const [selectCheck, setSelectCheck] = useState(false);
    const [inputCheckbox, setInputCheckbox] = useState(false);
    const selectChange = e => {
        setSelect(e.target.innerHTML.trim())
        setSelectCheck(!selectCheck)
    }
    return (
        <>
            <div className='requisites-form__polis'>
                <div className='requisites-form__polis-title'>
                    <h1>
                        Електронний поліс {polisType}
                    </h1>
                </div>
                <div className='requisites-form__polis-content'>
                    <div className='requisites-form__polis-content__top'>
                        <h2>
                            Дані страхової
                        </h2>
                        <ul>
                            <li className='requisites-form__polis-company'>
                                <p className='title'><img src={polisImg} /></p>
                                <p class='text'>
                                    {polisName}
                                </p>
                            </li>
                            {
                                (polis == 'osago' || polis == 'dgo' || polis == 'kasko') && <>
                                    <li>
                                        <p class='title'>
                                            Франшиза:
                                        </p>
                                        <p class='text'>
                                            {polisFranschiza}
                                        </p>
                                    </li>
                                    <li>
                                        <p class='title'>
                                            Реєстрація:
                                        </p>
                                        <p class='text'>
                                            Інші країни
                                        </p>
                                    </li>
                                    <li>
                                        <p class='title'>
                                            Пільги:
                                        </p>
                                        <p class='text'>
                                            Чорнобильське посвідчення
                                        </p>
                                    </li>
                                    <li>
                                        <p class='title'>
                                            Термін дії:
                                        </p>
                                        <p class='text'>
                                            {polisDate}
                                        </p>
                                    </li>
                                </>
                            }
                            {
                                polis == 'osago' && <>
                                    <li>
                                        <p class='title input-assistans__title'>
                                            Ассистанс:
                                        </p>
                                        <p className='text'>
                                            {
                                                !inputCheckbox
                                                    ?
                                                    <input onClick={() => setInputCheckbox(true)} className='input-assistans' type='checkbox' />
                                                    :
                                                    '300₴'
                                            }
                                        </p>
                                    </li>
                                    <li>
                                        <p class='title select-limit__title'>
                                            Збільшення лімінту
                                            відповідальності:
                                        </p>
                                        <p className='select-limit'>
                                            <a onClick={() => setSelectCheck(!selectCheck)}>{select}</a>
                                            {
                                                selectCheck && <>
                                                    <div onClick={selectChange}>
                                                        <p>Оберіть ліміт</p>
                                                        <p>100 000₴ – 150₴</p>
                                                        <p>200 000₴ – 250₴</p>
                                                        <p>300 000₴ – 350₴</p>
                                                        <p>400 000₴ – 450₴</p>
                                                        <p>1 000 000  – 460₴</p>
                                                    </div>
                                                </>
                                            }
                                        </p>
                                    </li>
                                </>
                            }
                            {
                                (polis == 'greenCard' || polis == 'tourist') && <>
                                    <li>
                                        <p class='title'>
                                            Напрямок:
                                        </p>
                                        <p class='text'>
                                            {polisWay}
                                        </p>
                                    </li>
                                    <li>
                                        <p class='title'>
                                            Термін дії:
                                        </p>
                                        <p class='text'>
                                            {polisDate}
                                        </p>
                                    </li>
                                    <li>
                                        <p class='title'>
                                            Кількість туристів:
                                        </p>
                                        <p class='text'>
                                            {polisPeople}
                                        </p>
                                    </li>
                                    <li>
                                        <p class='title'>
                                            Мета поїздки:
                                        </p>
                                        <p class='text'>
                                            {polisPurpose}
                                        </p>
                                    </li>
                                </>

                            }
                        </ul>
                    </div>
                    {
                        (polis == 'osago' || polis == 'dgo' || polis == 'kasko') && <>
                            <hr />
                            <div className='requisites-form__polis-content__bottom'>
                                <h2>
                                    Дані транспортного засобу
                                </h2>
                                <ul>
                                    <li>
                                        <p class='title'>
                                            Тип транспортного
                                            засобу:
                                        </p>
                                        <p class='text'>
                                            {polisTypeAuto}
                                        </p>
                                    </li>
                                    <li>
                                        <p class='title'>
                                            Об'єм двигуна:
                                        </p>
                                        <p class='text'>
                                            {polisVAuto}
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </>
                    }
                </div>
                <div className='requisites-form__polis-sale'>
                    <p>Вартість:<span>{polisSale}₴</span></p>
                </div>
            </div>
        </>
    )
}