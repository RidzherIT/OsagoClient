import React, { useContext, useEffect } from "react";
import { Context } from "..";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import pdfIcon from '../img/utils/pdfIcon.svg';
import Garant from "../components/Garant";
import Product from "../components/Product";
import infoBg4 from '../img/info/infoBg4.jpg';
export default observer(function Realty() {
    const navigate = useNavigate();
    const polis = 'realty';
    const polisTitle = 'Недвижимость';
    const polisType = 'Недвижимость';
    const titleRealty = <>Страхование недвижимого<br /> имущества:<br /><span> квартиры, дома, дачи</span></>;
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
            <Product img={infoBg4} title={titleRealty} />
            <section class="realty">
                <div class="container">
                    <div class="realty__inner">
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
                                Страхування без попереднього огляду та оцінки:
                            </h3>
                            <p class="check-gray">Оформлення полісу займає до 5-ти хвилин;</p>
                            <p class="check-gray">Повний пакет страхових ризиків: пожежа; вибух газу, удар
                                блискавки, стихійні явища, пошкодження водою з водопровідних,
                                каналізаційних, опалювальних систем, протиправні дії третіх осіб
                                (грабіж, розбій, умисне знищення або пошкодження майна)</p>
                            <p class="check-gray">Страхування відповідальності перед сусідами;</p>
                            <p class="check-gray">Розмір страхової суми обирається клієнтом;</p>
                            <p class="check-gray">Можливість застрахувати орендоване житло;</p>
                            <p class="check-gray">Виплата відшкодування здійснюється в розмірі фактичного
                                збитку в межах страхової суми</p>
                        </div>
                    </div>
                </div>
            </section>
            <Garant />
        </>
    )
})