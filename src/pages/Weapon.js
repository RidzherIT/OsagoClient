import React, { useContext, useEffect } from "react";
import { Context } from "..";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import pdfIcon from '../img/utils/pdfIcon.svg';
import Garant from "../components/Garant";
import Product from "../components/Product";
import infoBg3 from '../img/info/infoBg3.jpg';
export default observer(function Weapon() {
    const navigate = useNavigate();
    const polis = 'weapon';
    const polisTitle = 'Оружие';
    const polisType = 'Оружие';
    const titleWeapon = <>Страхование<br /> ответственности<br />владельцев<br /><span> оружия</span></>;
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
            <Product img={infoBg3} title={titleWeapon} />
            <section class="weapon">
                <div class="container">
                    <div class="weapon__inner">
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
                                Які витрати покриває страховий поліс?
                            </h3>
                            <p>Страховий тариф незалежно від виду та кількості зброї в одного громадянина.</p>
                            <p class="n-1">Термін страхування 1 рік - 17 гривень</p>
                            <p class="n-2">Термін страхування 3 роки - 51 гривня</p>
                            <p>Страхова сума встановлюється:</p>
                            <p class="check-gray">відшкодування спадкоємцям особи, яка загинула (померла) внаслідок страхового
                                випадку 11000 гривень</p>
                            <p class="check-gray">призначення потерпілій третій особі групи інвалідності</p>
                            <p class="n-1">I група 8250 гривень</p>
                            <p class="n-2">II група 5500 гривень</p>
                            <p class="n-3">III група 2750 гривень</p>
                            <p class="check-gray">за кожний день непрацездатності потерпілої третьої особи 20 гривень,
                                але не більш як 2500 гривень</p>
                            <p class="check-gray">у разі пошкодження (знищення) майна у розмірі балансової вартості,
                                але не більш як 30000 гривень.</p>
                            <p>Страхування цивільної відповідальності громадян України, які мають у власності чи іншому
                                законному володінні
                                зброю (у тому числі нагородну), проводиться з метою забезпечення відшкодування шкоди, заподіяної
                                цією зброєю
                                життю, здоров'ю та/або майну інших осіб. Даний вид страхування здійснюється на умовах,
                                викладених у Постанові
                                Кабінету Міністрів України від 29.03.2002 р. No402.</p>
                            <h3 class="universal__content-title question-yellow">
                                Хто повинен укласти договір страхування?
                            </h3>
                            <p>Громадяни України, які володіють, зберігають або використовують:</p>
                            <p class="check-gray">Бойову нарізну вогнепальну зброю армійських зразків або зброю, виготовлену за
                                спеціальним замовленням</p>
                            <p class="check-gray">Спортивну вогнепальну зброю (спортивні пістолети, револьвери, гвинтівки,
                                рушниці, призначені для використання в
                                спортивних цілях тощо)</p>
                            <p class="check-gray">Мисливську нарізну вогнепальну зброю (карабіни, малокаліберні гвинтівки,
                                комбіновані рушниці тощо)</p>
                            <p class="check-gray">Вихолощену та навчальну зброю</p>
                            <p class="check-gray">Несучасну стрілецьку зброю</p>
                            <p class="check-gray">Мисливську гладкоствольну вогнепальну зброю </p>
                            <p class="check-gray">Холодну зброю (арбалети, луки, мисливські ножі, катани, мечі, палаші, ятагани,
                                фінські ножі, кортики, кинджали,
                                багнети, багнети-ножі, що не перебувають на озброєнні військових формувань)</p>
                            <p class="check-gray">Пневматичну зброю (пістолети, револьвери, гвинтівки калібру більш як 4,5
                                міліметра і швидкістю польоту кулі понад
                                100 метрів за секунду, в яких снаряд (куля) приводиться в рух за рахунок стиснутих газів)</p>
                        </div>
                    </div>
                </div>
            </section>
            <Garant />
        </>
    )
})