import React, { useContext, useEffect } from "react";
import { Context } from "..";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import pdfIcon from '../img/utils/pdfIcon.svg';
import Garant from "../components/Garant";
import Product from "../components/Product";
import infoBg9 from '../img/info/infoBg9.jpg';
import healthItem1 from '../img/health/healthItem1.jpg';
import healthItem2 from '../img/health/healthItem2.jpg';
import healthItem3 from '../img/health/healthItem3.jpg';
import healthItem4 from '../img/health/healthItem4.jpg';
export default observer(function Health() {
    const navigate = useNavigate();
    const polis = 'health';
    const polisTitle = 'Здоровье';
    const polisType = 'Здоровье';
    const titleMedicine = <>Добровольное<br /> медицинское страхование<br /><span> здоровья</span> на случай<br /> болезни</>;
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
            <Product img={infoBg9} title={titleMedicine} />
            <section class="health">
                <div class="container">
                    <div class="health__inner">
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
                            <div class="universal__content-item">
                                <img src={healthItem1} alt="" />
                                <div class="health__text">
                                    <p class="n-1">Онлайн консультация квалифицированного врача:</p>
                                    <p class="check-gray">по медицинским вопросам;</p>
                                    <p class="check-gray">по результатам лабораторных исследований
                                        (полученных застрахованным лицом за собственный)</p>
                                </div>
                            </div>
                            <div class="universal__content-item">
                                <img src={healthItem2} alt="" />
                                <div class="health__text">
                                    <p class="n-2">Оплата лабораторного обследования Застрахованного
                                        лица для подтверджения острого заболевания</p>
                                    <p class="check-gray">не больше трех показателей;</p>
                                    <p class="check-gray">нализы следующих видов: анализ крови общий (ОАК),
                                        анализ мочи (ОАМ), загальний билирубин, амилаза
                                        крови, щелочная фосфатаза.</p>
                                </div>
                            </div>
                            <div class="universal__content-item">
                                <img src={healthItem3} alt="" />
                                <div class="health__text">
                                    <p class="n-3">Вызов и оплата бригады экстренной и неотложной медицинской помощи</p>
                                    <p class="check-gray">(в т.ч. коммерческой при наличии в регионе) при
                                        состояниях и заболеваниях, угрожающих жизни и здоровью
                                        Застрахованного лица;</p>
                                    <p class="check-gray">Транспортирование в стационар:
                                        при состоянии, угрожающей жизни Застрахованного лица
                                        (по перечню, утвержденному Минздравом Украины) и при
                                        отсутствии возможности воспользоваться каретой
                                        экстренной медицинской помощи.</p>
                                </div>
                            </div>
                            <div class="universal__content-item">
                                <img src={healthItem4} alt="" />
                                <div class="health__text">
                                    <p class="n-4">Оплата лечения, включая медикаменты, в условиях
                                        неотложного стационара следующих острых заболеваний: </p>
                                    <p class="check-gray">инфаркт миокарда, инсульт, возникающим в период
                                        действия Договора</p>
                                    <p class="check-gray">острый менингит, энцефалит, менингоэнцефалит,
                                        панкреонекроз;</p>
                                    <p class="check-gray">острый апедицит с перитонитом, перфоративная язва
                                        желудка и 12-перстной кишки, острая паралитическая
                                        кишечная непроходимость.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Garant />
        </>
    )
})