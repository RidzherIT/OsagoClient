import React, { useContext, useEffect } from "react";
import osagoClock from '../img/osago/osagoClock.svg';
import cascoPolis from '../img/osago/cascoPolis.svg';
import cascoPhone from '../img/osago/cascoPhone.jpg';
import ViberIcon from '../img/casco/ViberIcon.svg';
import Telegram from '../img/casco/Telegram.svg';
import { Context } from "..";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Garant from "../components/Garant";

export default observer(function Casco() {
    const navigate = useNavigate();
    const polis = 'casco';
    const polisTitle = 'КАСКО';
    const polisType = 'Полис КАСКО';
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
            <section class="polis-main">
                <div class="container">
                    <div class="polis-main__inner">
                        <div class="polis-main__top">
                            <div class="polis-main__top-left">
                                <h1 class="polis-main__top-left__title">
                                    Полис {polisTitle} <span>онлайн</span>
                                </h1>
                                <p class="polis-main__top-left__text">
                                    Сравните цены и условия 100+ ведущих страховых компаний
                                </p>
                                <ul>
                                    <li>Введите параметры<br />
                                        своего авто</li>
                                    <li>Сравните цены<br />
                                        и выберите компанию</li>
                                    <li>Оформите полис онлайн<br />
                                        и получите на почту</li>
                                </ul>
                                <div class="polis-main__top-left__path">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <button className="info__item-content__btn" onClick={() => navigate('/fullPolis')}>Далее</button>
                            </div>
                        </div>
                        <div class="polis-main__content">
                            <div class="polis-main__top-right casco__top-right">
                                <div class="polis-main__top-right__info wrapper-gradient">
                                    <div>
                                        <img src={osagoClock} alt="" />
                                        <p><span>через<br />
                                            5 минут<br /></span>полис<br />
                                            зарегистрирован<br />
                                            в МТСБУ</p>
                                    </div>
                                </div>
                                <img class="polis-main__top-right__img-polis" src={cascoPolis} alt="" />
                                <img src={cascoPhone} alt="" /><img src="" alt="" />
                            </div>
                            <div class="site">
                                <div class="container">
                                    <div class="site__inner">
                                        <h2 class="casco-title">
                                            <span>КАСКО</span> Цена на разные варианты страховки
                                        </h2>
                                        <div class="casco-top">
                                            <div class="wrapper-gradient">
                                                <div class="casco-top__stock">
                                                    <span>
                                                        Акция
                                                    </span>
                                                    <div class="casco-table">
                                                        <ul class="casco-table__titles">
                                                            <li>Страховая сумма</li>
                                                            <li>Полная цена</li>
                                                            <li>Акционная цена</li>
                                                        </ul>
                                                        <ul class="casco-table__content">
                                                            <li>25 000₴</li>
                                                            <li>1000,00₴</li>
                                                            <li>899,99₴</li>
                                                        </ul>
                                                        <ul class="casco-table__content">
                                                            <li>50 000₴</li>
                                                            <li>1700,00₴</li>
                                                            <li>1499,99₴</li>
                                                        </ul>
                                                        <ul class="casco-table__content">
                                                            <li>100 000₴</li>
                                                            <li>2900,00₴</li>
                                                            <li>2299,99₴</li>
                                                        </ul>
                                                    </div>
                                                    <p class="casco-top__stock-text">
                                                        Покрывает риск Дорожно-транспортного происшествия, повреждения своего авто
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="casco-top__calc">
                                                <div class="casco-top__calc-wrapper">
                                                    <h3 class="casco-top__calc-title">
                                                        Пишите в Вайбер, Телеграм
                                                    </h3>
                                                    <div class="casco-top__calc-contacts">
                                                        <img src={ViberIcon} alt="" />
                                                        <img src={Telegram} alt="" />
                                                        <p>(050) 352 4107</p>
                                                    </div>
                                                    <p class="casco-top__calc-text">
                                                        Рабочее время
                                                        с 10 до 18
                                                    </p>
                                                </div>
                                                <button onClick={() => navigate('/fullPolis')}>Рассчитать стоимость полного КАСКО</button>
                                            </div>
                                        </div>
                                        <div class="casco-bottom">
                                            <div class="casco-bottom-left">
                                                <div class="casco-bottom__minicasco">
                                                    <p class="minicasco-title">
                                                        Покрывает риск Дорожно-транспортного происшествия. Повреждения Своего Авто
                                                    </p>
                                                    <div class="minicasco__table">
                                                        <ul class="minicasco__table-titles">
                                                            <li>Страховая
                                                                сумма</li>
                                                            <li>Цена</li>
                                                        </ul>
                                                        <ul class="minicasco__table-content">
                                                            <li>25 000₴</li>
                                                            <li>900₴</li>
                                                        </ul>
                                                        <ul class="minicasco__table-content">
                                                            <li>50 000₴</li>
                                                            <li>1 500₴</li>
                                                        </ul>
                                                        <ul class="minicasco__table-content">
                                                            <li>100 000₴</li>
                                                            <li>2 300₴</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="casco-bottom__theftcasco">
                                                    <p class="theftcasco-title">
                                                        Покрывает риск Угона Вашего автомобиля
                                                    </p>
                                                    <ul class="theftcasco__table-titles">
                                                        <li>Страховая
                                                            сумма</li>
                                                        <li>Цена</li>
                                                    </ul>
                                                    <ul class="theftcasco__table-content">
                                                        <li>100 000₴</li>
                                                        <li>900₴</li>
                                                    </ul>
                                                    <p class="theftcasco__text">
                                                        Оставляя свой автомобиль на автостоянке, ты не получаешь никаких гарантий, что авто не
                                                        будет похищенное! Администрация стоянки не несет ответственности за сохранность твоего
                                                        автомобиля! Если хочешь гарантированно получить выплату при угоне - приобрети договор
                                                        страхования!
                                                    </p>
                                                </div>
                                                <div class="casco-bottom__halfcasco">
                                                    <p class="halfcasco-title">Вы платите 50 % стоимости страховки. Если страховых случаев не
                                                        произойдет Вы сэкономили. Если страховые случаи будут Вы платите оставшиеся 50%
                                                        стоимости страховки
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="casco-bottom-right">
                                                <div class="casco-bottom__fullcasco">
                                                    <ul class="fullcasco-title">
                                                        <li>Покрывает риски</li>
                                                        <li>Дорожно-транспортное происшествие</li>
                                                        <li>Угон транспортного средства</li>
                                                        <li>Стихийные бедствия и другие случайные
                                                            события</li>
                                                        <li>Противоправные действия третьих лиц</li>
                                                    </ul>
                                                    <p class="fullcasco__text">
                                                        Стоимость зависит от выбранных опций и колеблется от 2 до 6% от оценочной стоимости авто
                                                    </p>
                                                    <ul class="fullcasco__table-titles">
                                                        <li>Опция</li>
                                                        <li>%</li>
                                                    </ul>
                                                    <ul class="fullcasco__table-content">
                                                        <li>Франшиза по Угону</li>
                                                        <li>5 или 10%</li>
                                                    </ul>
                                                    <ul class="fullcasco__table-content">
                                                        <li>Франшиза по Повреждению</li>
                                                        <li>0, 0.5 или 1%</li>
                                                    </ul>
                                                    <ul class="fullcasco__table-content">
                                                        <li>Лицо, которое управляет ТС<br />
                                                            старше 23 лет</li>
                                                        <li>0%</li>
                                                    </ul>
                                                    <ul class="fullcasco__table-content">
                                                        <li>Водительский стаж водителей<br />
                                                            больше 3 или меньше</li>
                                                        <li>%</li>
                                                    </ul>
                                                    <ul class="fullcasco__table-content-condition">
                                                        <p class="fullcasco__table-content-subtitle">
                                                            Условия хранения ТС
                                                        </p>
                                                        <ul class="fullcasco__table-content-subcontent">
                                                            <li>в ночное время на стоянке</li>
                                                            <li>%</li>
                                                        </ul>
                                                        <ul class="fullcasco__table-content-subcontent">
                                                            <li>гараже</li>
                                                            <li>%</li>
                                                        </ul>
                                                        <ul class="fullcasco__table-content-subcontent">
                                                            <li>под домом</li>
                                                            <li>%</li>
                                                        </ul>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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