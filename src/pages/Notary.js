import React, { useContext, useEffect } from "react";
import { Context } from "..";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import pdfIcon from '../img/utils/pdfIcon.svg';
import Garant from "../components/Garant";
import Product from "../components/Product";
import infoBg10 from '../img/info/infoBg10.jpg';
export default observer(function Notary() {
    const navigate = useNavigate();
    const polis = 'notary';
    const polisTitle = 'Нотариус';
    const polisType = 'Нотариус';
    const titleNotorius = <>Cтрахование<br /> профессиональной<br /> ответственности<br /> <span>нотариусов</span></>;
    const data = {
        polis,
        polisType,
        polisTitle
    }
    const { store } = useContext(Context);
    useEffect(() => {
        store.setDataPolis(data);
    }, [])
    return (
        <>
            <Product img={infoBg10} title={titleNotorius} />
            <section class="notary">
                <div class="container">
                    <div class="notary__inner">
                        <div class="universal__request">
                            <div class="wrapper-gradient">
                                <div class="universal__request-pdf">
                                    <p><span>это электронный полис</span><br />доставляется на электронную почту или в Вайбер,
                                        Телеграм</p>
                                    <img src={pdfIcon} alt="" />
                                </div>
                            </div>
                            <div class="universal__request-btns">
                                <p>Напишите нам в <span>Вайбер</span><br />или <span>заполните заявку</span> на сайте</p>
                                <div class="universal__request-links">
                                    <a href="#">Viber</a>
                                    <a onClick={() => navigate('/fullPolis')} href="#">Подать заявку</a>
                                </div>
                            </div>
                        </div>
                        <div class="universal__content">
                            <h2 class="universal__subtitle">
                                Загальні <span>умови</span>
                            </h2>
                            <h3 class="universal__content-title question-yellow">
                                Що дає страховий поліс?
                            </h3>
                            <p>Обов’язкове страхування цивільно-правової відповідальності приватного нотаріуса здійснюється
                                відповідно до Законів України «Про страхування», «Про нотаріат», «Про державну реєстрацію
                                юридичних
                                осіб, фізичних осіб – підприємств та громадських формувань» та «Про державну реєстрацію речових
                                прав на
                                нерухоме майно та їх обтяжень», Порядку і правил проведення обов’язкового страхування
                                цивільно-правової відповідальності приватного нотаріуса, затверджених постановою Кабінету
                                Міністрів
                                України від 19.08.2015 р. No 624.</p>
                            <p>Страхова сума встановлюється за згодою сторін, але не може бути менше 1000 мінімальних розмірів
                                заробітної плати.</p>
                            <p>Страхова сума:</p>
                            <p class="n-1">з 01.09.2020 року (мінімальна) 5 000 000,00 гривень.</p>
                            <p class="n-2">з 01.01.2021року можливо обрати страхову сумму 6 000 000,00 гривень або 6 500 000,00
                                гривень.</p>
                            <p>У разі якщо в процесі своєї професійної діяльності нотаріус зробив помилку, яка призвела до
                                певної міри
                                шкоди для його клієнтів (фізичних або юридичних осіб), страхова компанія відшкодує завдані
                                збитки (згідно
                                рівня компенсації на підставі рішення суду).</p>
                            <h3 class="universal__content-title question-yellow">
                                Кому потрібен поліс страхування професійної відповідальності нотаріуса?
                            </h3>
                            <p class="check-gray">Нотаріусу якій займаєтеся приватною практикою;</p>
                            <p class="check-gray">Приватному нотаріусу якій виконуєте функції державного реєстратора прав на
                                нерухоме майно.</p>
                            <p>Строк дії договору обов'язкового страхування професійної відповідальності нотаріусів 1 рік.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Garant />
        </>
    )
})