import React, { useContext, useState } from "react";
import companySavitar from '../img/company/companySavitar.svg';
import calculationBank from '../img/calculation/calculationBank.svg';
import exitIcon from '../img/utils/exitIcon.svg';
import { observer } from "mobx-react-lite";
import { Context } from "..";
export default observer(function Company({ funcNextComponent, polis, polisType, nameCompany, covid, imgCompany, franschiza, fullPrice, discountPrice, currentPrice }) {
    const dataCompany = {
        name: nameCompany,
        img: imgCompany,
        franschiza: franschiza,
        sale: currentPrice
    }
    const sendData = () => {
        store.setDataCompany(dataCompany);
        funcNextComponent(true);
    }
    const { store } = useContext(Context);
    const [modalAssistans, setModalAssistans] = useState(false);
    const [modalRating, setModalRating] = useState(false);
    const [assistans, setAssistans] = useState(false);
    const [selectLimit, setSelectLimit] = useState({
        check: false,
        value: 'Оберіть ліміт'
    });
    const [modalProgramm, setModalProgramm] = useState(false);
    const funcSelectLimit = (e) => {
        e.preventDefault();
        if (e.target.tagName == 'LI') {
            setSelectLimit({ ...selectLimit, value: e.target.innerHTML.trim(), check: !selectLimit.check })
            return;
        }
        setSelectLimit({ ...selectLimit, check: !selectLimit.check });
    }
    return (
        <>
            <li class="calculation__company">
                <div class="calculation__company-rating">
                    <img src={imgCompany} alt="" />
                    {
                        (polis == 'osago' || polis == 'greencard') && <div class="calculation__company-rating__modal-wrapper">
                            <a onMouseOver={() => setModalRating(true)} onMouseOut={() => setModalRating(false)} href="#">Рейтинг МТСБУ</a>
                            {modalRating && <div class="calculation__company-rating__modal">
                                <ul>
                                    <li>Общая оценка:</li>
                                    <li>Качество
                                        урегулирования:</li>
                                    <li>Уровень жалоб:</li>
                                    <li>Скорость выплаты:</li>
                                </ul>
                                <ul>
                                    <li>Отлично</li>
                                    <li>Хорошо</li>
                                    <li>Низкий</li>
                                    <li>89 дней</li>
                                </ul>
                            </div>}
                        </div>
                    }
                </div>


                <div class="calculation__company-content">
                    {(polis == 'tourists' || polis == 'osago' || polis == 'greencard') && <div class="calculation__company-franschiza">
                        <h3>{store.dataPolis.polisType} от {nameCompany}</h3>
                        {polis == 'tourists' && <p>Страховая сумма: 30 000€</p>}
                        {((polis == 'tourists' && <p>Франшиза: {franschiza}₴</p>) || (polis == 'osago' && <p>Франшиза: {franschiza}₴</p>))}
                    </div>}


                    <div class="calculation__company-content__items">


                    {/* (polis == 'dgo' || polis == 'casco' || polis == 'weapon' || polis == 'notary' || polis == 'realty' || polis == 'covid' || polis == 'health' || polis == 'assistans') */}
                        { polis == 'other' && <>
                            <p class="calculation__company-title">Страховая компания<br />
                                {nameCompany}</p>
                            <p class="calculation__company-amount">50 000₴</p>
                            <p class="calculation__company-price">100₴</p></>}



                        {(polis == 'osago' || polis == 'tourists' || polis == 'greencard') && <>
                            <div class="calculation__company-content__list">
                                <h3>Включено в стоимость</h3>
                                {polis == 'osago' && <>                                <p>Электронный полис от {nameCompany}</p>
                                    <p>Поддержка 24/7 при ДТП</p>
                                    <p>Возмещение ответственности по имуществу до 130 000 грн.</p>
                                    <p>Возмещение ответственности за здоровьем до 260 000 грн.</p></>}



                                {polis == 'greencard' && <><p>Страхование гражданской ответственности водителя на территории государства,
                                    состоящего в<br /> международной системе автомобильного страхования Зеленая
                                    карта</p>
                                    <p>Возмещение убытков имущества третьих лиц до 1 400 000€</p>
                                    <p>Возмещение убытков жисзни и здоровья третьих лиц до 6 300 000€</p></>}

                                {polis == 'tourists' && <><p>Неотложная медицинская помощь</p>
                                    <p>Неотложное стационарное лечение </p>
                                    <p>Неотложная стоматологическая помощь</p>
                                    <p>Медикаментозное обеспечение</p></>}

                            </div>



                            {polis == 'tourists' && <><div class="calculation__company-content__list">
                                <p>Оплата стоматологии</p>
                                {(covid && <p>Диагностика и лечение Covid-19</p>) || <p>Возврат домой детей</p>}
                                <p>Медицинские перевозки</p>
                                <p>Репатриация на родину</p>
                            </div>
                                <div class="calculation__company-content__list">
                                    <h3 onClick={() => setModalProgramm(true)} class="modal-active">Программа:</h3>
                                    <input checked class="input-radio" type="radio" />
                                    <input class="input-radio" type="radio" />
                                    <input class="input-radio" type="radio" />
                                    <div class="assistans-active">
                                        <a onMouseOver={() => setModalAssistans(true)} onMouseOut={() => setModalAssistans(false)} class="assistans-active__btn" href="">Ассистанс</a>
                                        {modalAssistans && <div class="modal-assistans__wrapper">
                                            <p>Служба поддержки, которая обеспечивает<br /> огранизацию быстрой и
                                                качественной<br /> помощи клиенту за границей </p>
                                            <div>
                                                <img src={companySavitar} alt="" />
                                                <h3>Savitar Group </h3>
                                            </div>
                                        </div>}
                                    </div>
                                </div></>}
                        </>}
                        {polis == 'osago' && <div class="calculation__company-content__inputs">
                            <h3>Купить дополнительно</h3>
                            <p class="question-item">Увеличить лимит по имуществу</p>
                            <div class="calculation__company-content__select select-form">
                                <a onClick={funcSelectLimit} href="">{selectLimit.value}</a>
                                {selectLimit.check && <ul onClick={funcSelectLimit}>
                                    <li>Оберіть ліміт</li>
                                    <li>100 000₴ – 150₴</li>
                                    <li>200 000₴ – 250₴</li>
                                    <li>300 000₴ – 350₴</li>
                                    <li>400 000₴ – 450₴</li>
                                    <li>1 000 000 – 460₴</li>
                                </ul>}
                            </div>
                            <p class="calculation__company-content__stock">Акция на миллион – 460₴</p>
                            <div class="calculation__company-content__checkbox">
                                <input onClick={() => setAssistans(!assistans)} type="checkbox" name="" id="" />
                                {!assistans && <p class="question-item">Помощь в дороге 300₴</p> || <p>Помощь выбрана</p>}
                            </div>
                        </div>}
                    </div>
                </div>
                <div class="calculation__company-sale">
                    {(polis == 'other' && <button className="info__item-content__btn" onClick={sendData}>Купить</button>) || <>                    <p><span>-{discountPrice}₴</span><span>{fullPrice}₴</span></p>
                        <h3>{currentPrice}₴ {(polis == 'tourists' && <span>цена за выбранных туристов</span>) || <span>цена</span>}</h3>
                        <button className="info__item-content__btn" onClick={sendData}>Купить</button>
                        <img src={calculationBank} alt="" /></>}
                </div>
            </li>



            {modalProgramm && <div class="modal-wrapper">
                <div class="modal">
                    <img onClick={() => setModalProgramm(false)} src={exitIcon} alt="" class="modal__img" />
                    <h2>
                        Туристическая страховка ПЗУ Украина
                    </h2>
                    <ul>
                        <li><span class="modal__type-name">Программа
                            страхования</span>
                            <div class='modal__span-wrapper'><span>Express</span><span>Gold</span><span>Platinum</span></div>
                        </li>
                        <li><span class="modal__type-name">COVID-19</span>
                            <div class='modal__span-wrapper'><span>1000 €/$</span><span>1000 €/$</span><span>5000
                                €/$</span></div>
                        </li>
                        <li><span class="modal__type-name">Неотложная медицинская
                            помощь</span>
                            <div class='modal__span-wrapper'><span>100%</span><span>100%</span><span>100%</span></div>
                        </li>
                        <li><span class="modal__type-name">Неотложная амбулаторная
                            помощь</span>
                            <div class='modal__span-wrapper'><span>100%</span><span>100%</span><span>100%</span></div>
                        </li>
                        <li><span class="modal__type-name">Неотложная стоматологическая помощь</span>
                            <div class='modal__span-wrapper'><span>200
                                €/$</span><span>200 €/$</span><span>1000
                                    €/$</span></div>
                        </li>
                        <li><span class="modal__type-name">Медикаментозное
                            обеспечение</span>
                            <div class='modal__span-wrapper'><span>100%</span><span>100%</span><span>100%</span></div>
                        </li>
                        <li><span class="modal__type-name">Неотложная акушерско-гинекологическая<br />
                            помощь (до 28 недель)</span>
                            <div class='modal__span-wrapper'><span>100%</span><span>100%</span><span>100%</span></div>
                        </li>
                        <li><span class="modal__type-name">Медицинские
                            перевозки</span>
                            <div class='modal__span-wrapper'><span>100%</span><span>100%</span><span>100%</span></div>
                        </li>
                        <li><span class="modal__type-name">Репатриация к постоянному месту
                            проживания</span>
                            <div class='modal__span-wrapper'><span>100%</span><span>100%</span><span>100%</span></div>
                        </li>
                    </ul>
                    <div class="modal__amount">
                        <p>
                            Страховая сумма
                        </p>
                        <input type="checkbox" />
                        <input type="checkbox" />
                    </div>
                </div>
            </div>}
        </>
    )
})