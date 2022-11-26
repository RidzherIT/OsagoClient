import React, { useContext, useEffect } from "react";
import osagoClock from '../img/osago/osagoClock.svg';
import touristsPolis from '../img/osago/touristsPolis.svg';
import touristsPhone from '../img/osago/touristsPhone.jpg';
import osagoAudio from '../img/osago/osagoAudio.svg';
import osagoYoutube from '../img/osago/osagoYoutube.svg';
import osagoShield from '../img/osago/osagoShield.svg';
import TelegramAndViber from "../ui/TelegramAndViber";
import Garant from "../components/Garant";
import OurRecommend from "../components/OurRecommend";
import infoBg10 from '../img/info/infoBg10.jpg';
import Product from "../components/Product";
import contactsClock from '../img/contacts/contactsClock.svg';
import { Context } from "..";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

export default observer(function Tourists() {
    const navigate = useNavigate();
    const polis = 'tourists';
    const polisTitle = 'Туристическая страховка';
    const polisType = 'Тур. страховка';
    const data = {
        polis,
        polisType,
        polisTitle
    }
    const textNotary = <>Cтрахование<br /> профессиональной<br /> ответственности<br /> <span>нотариусов</span></>;
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
                            <div class="polis-main__top-right">
                                <div class="polis-main__top-right__info wrapper-gradient">
                                    <div>
                                        <img src={osagoClock} alt="" />
                                        <p><span>через<br />
                                            5 минут<br /></span>полис<br />
                                            зарегистрирован<br />
                                            в МТСБУ</p>
                                    </div>
                                </div>
                                <img class="polis-main__top-right__img-polis" src={touristsPolis} alt="" />
                                <img src={touristsPhone} alt="" /><img src="" alt="" />
                            </div>
                            <div class="polis-main__content-left">
                                <h2>
                                    Для оформления понадобятся документы
                                </h2>
                                <ul>
                                    <li class="n-1">Водительское удостоверение или паспорт</li>
                                    <li class="n-2">Свидетельство о регистрации авто (тех паспорт)</li>
                                    <li class="n-3">Идентификационный код</li>
                                    <li class="n-4">Льготное удостоверение (если льготник владелец авто)</li>
                                </ul>
                                <div class="polis-main__content-left__btns">
                                    <div>
                                        <div><img src={osagoAudio} alt="" /></div>
                                        <p><span>Прослушать</span> подробную<br />
                                            аудио-инструкцию</p>
                                    </div>
                                    <div>
                                        <div><img src={osagoYoutube} alt="" /></div>
                                        <p><span>Посмотреть</span> подробную<br />
                                            видео-инструкцию</p>
                                    </div>
                                </div>
                            </div>
                            <div class="polis-main__content-right">
                                <h2>Оформить полис <span>элементарно!</span></h2>
                                <h3>Заказывайте полис «Автоцивилки» онлайн<br /> <span>через месенджеры</span></h3>
                                <p>
                                    Нужно лишь сфотографировать документы и отправить нам фото —<br /> мы сами внесем все данные
                                </p>
                                <TelegramAndViber />
                                <div>
                                    <hr />
                                    <span>
                                        или
                                    </span>
                                    <hr />
                                </div>
                                <h3>Заполните все данные <span>самостоятельно</span></h3>
                                <p>
                                    Интуитивно понятная форма — минимум действий, необходимых<br />
                                    для приобретения полиса
                                </p>
                                <button className="info__item-content__btn" onClick={() => navigate('/fullPolis')}>Заполнить форму</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Garant />
                <OurRecommend />
                <Product img={infoBg10} title={textNotary} />
                <div class="polis-main__list">
                    <div class="container">
                        <div class="polis-main__list-inner">
                            <h2>
                                У нас покупают
                            </h2>
                            <div class="polis-main__list-items">
                                <div class="polis-main__list-item">

                                    <div class="auto-icon">
                                        <img src={osagoShield} alt="" />
                                        <i>
                                            <h3>
                                                Автоцивика
                                            </h3>
                                            <p>
                                                обязательное страхование автомобиля в Украине
                                            </p>
                                        </i>
                                    </div>
                                </div>
                                <div class="polis-main__list-item">

                                    <div class="greencard-icon">
                                        <img src={osagoShield} alt="" />
                                        <i>
                                            <h3>
                                                Зеленая карта
                                            </h3>
                                            <p>
                                                страхование при поездке
                                                за границу на авто
                                            </p>
                                        </i>
                                    </div>
                                </div>
                                <div class="polis-main__list-item">

                                    <div class="health-icon">
                                        <img src={osagoShield} alt="" />
                                        <i>
                                            <h3>
                                                Здоровье
                                            </h3>
                                            <p>
                                                На случай болезни
                                            </p>
                                        </i>
                                    </div>
                                </div>
                                <div class="polis-main__list-item">

                                    <div class="weapon-icon">
                                        <img src={osagoShield} alt="" />
                                        <i>
                                            <h3>
                                                Оружие
                                            </h3>
                                            <p>
                                                Обязательная страховка
                                            </p>
                                        </i>
                                    </div>
                                </div>
                                <div class="polis-main__list-item">
                                    <div class="notary-icon">
                                        <img src={osagoShield} alt="" />
                                        <i>
                                            <h3>
                                                Нотариусов
                                            </h3>
                                            <p>
                                                Обязательное страхование ответственности
                                            </p>
                                        </i>
                                    </div>
                                </div>
                                <div class="polis-main__list-item">

                                    <div class="casco-icon">
                                        <img src={osagoShield} alt="" />
                                        <i>
                                            <h3>
                                                КАСКО
                                            </h3>
                                            <p>
                                                полная защита своего авто
                                            </p>
                                        </i>
                                    </div>
                                </div>
                                <div class="polis-main__list-item">

                                    <div class="house-icon">
                                        <img src={osagoShield} alt="" />
                                        <i>
                                            <h3>
                                                Квартира и дом
                                            </h3>
                                            <p>
                                                от возможных рисков, затопления, пожара, кражи
                                            </p>
                                        </i>
                                    </div>
                                </div>
                                <div class="polis-main__list-item">

                                    <div class="covid-icon">
                                        <img src={osagoShield} alt="" />
                                        <i>
                                            <h3>
                                                От Короновируса
                                            </h3>
                                            <p>
                                                защита от последствий COVID – 19
                                            </p>
                                        </i>
                                    </div>
                                </div>
                                <div class="polis-main__list-item">

                                    <div class="tourists-icon">
                                        <img src={osagoShield} alt="" />
                                        <i>
                                            <h3>
                                                Туристов
                                            </h3>
                                            <p>
                                                Покрытие медицинских расходов
                                            </p>
                                        </i>
                                    </div>
                                </div>
                                <div class="polis-main__list-item">

                                    <div class="assistans-icon">
                                        <img src={osagoShield} alt="" />
                                        <i>
                                            <h3>
                                                Ассистанс
                                            </h3>
                                            <p>
                                                Эвакуатор, замена колеса, доставка топлива, …
                                            </p>
                                        </i>
                                    </div>
                                </div>
                                <div class="contacts__content-top">
                                    <div class="contacts__content-top__left">
                                        <h2><span>За 1 минуту</span></h2>
                                        <p>автоответчик расскажет как оформить<br /> полис и что для этого понадобится</p>
                                    </div>
                                    <img src={contactsClock} alt="" />
                                    <div class="contacts__content-top__right">
                                        <p>0673524107</p>
                                        <p>0503524107</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="calculation__info-text">
                        <div>
                            <h4 class="calculation__info-text__h1">
                                Н1 Стоит ли сейчас купить ОСАГО онлайн
                            </h4>
                            <p>
                                Мы продаем ОСАГО онлайн вот уже третий год. И авторитетно Вам заявляем. Что у нас купить
                                Безопасно.
                                В качестве гарантии предоставляем Вам ГАРАНТИЙНОЕ ПИСЬМО. В котором гарантируем Вам ЮРИДИЧЕСКИ
                                получение полиса!
                                Заказать ОСАГО онлайн элементарно! Сфотографируйте документы и вышлите в Вайбер. Или заполните
                                данные самостоятельно! Отправлять фото документов в первую очередь нужно Вам, чтоб мы могли
                                правильно все заполнить. При этом обезопасив Вас от БЮРОКРАТИИ и Излишних придирок страховых
                                компаний при ДТП

                            </p>
                            <p>
                                Застраховать автомобиль онлайн это лучшее решение на сегодняшний день. В обиходе много фальшивых
                                бумажных полисов. От компаний, которые давно утратили лицензии. Сэкономите сейчас, но Вам
                                никогда не
                                получить выплату от такого вложения денег. Электронный полис оформляется прямо в базе МТСБУ.
                                Покупая
                                у нас Вы ничем не рискуете!
                            </p>
                        </div>
                        <div>
                            <h4 class="calculation__info-text__h2">
                                Н2 Страховка ОСАГО или КАСКО
                            </h4>
                            <p>
                                Это два совершенно разных вида страхования.
                                Без Автогражданки Вас оштрафуют! В случае ДТП, оплатите ремонт чужого автомобиля со своего
                                кармана. Цена на страховку у нас самая низка. Выбор компаний огромен. Купить ОСАГО дешево –
                                возможно. Но лучше сделайте правильный выбор. Если дешевая ОСАГО, то с нулевой франшизой!

                            </p>
                            <p>
                                КАСКО - покроет затраты на ремонт своего автомобиля.
                                КАСКО мы подбираем от хороших компаний. Чтоб Вы гарантировано получили выплату на ремонт своего
                                авто.
                            </p>
                        </div>
                        <div>
                            <h4 class="calculation__info-text__h3">
                                Н3 Страховка авто в Киеве по минимальной цене
                            </h4>
                            <p>
                                У нас можно выгодно застраховать автомобиль онлайн. Или вызвать курьера. Сделать страховку на
                                машину осаго онлайн, или застраховать квартиру, можно не вставая с любимого дивана. Любые виды
                                страховок:
                            </p>
                            <p class="check-gray">
                                ОСЦПВ (Автоцивилка, Автогражданка, ОСАГО) – обязательное страхование. За отсутствие предусмотрен
                                штраф. Покрывает затраты на ремонт чужого авто, если Вы виновны в ДТП
                            </p>
                            <p class="check-gray">
                                ДГО – Начинает работать если суммы 130 000 выплат по Автоцивилке не хватило
                            </p>
                            <p class="check-gray">
                                Зеленая карта – таже Автоцивилка только для выезда за рубеж
                            </p>
                            <p class="check-gray">
                                КАСКО – Покрывает любые повреждения своего автомобиля подробней здесь
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
})