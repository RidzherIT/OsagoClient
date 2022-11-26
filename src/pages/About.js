import React from "react";
import aboutBg from '../img/about/aboutBg.jpg';
import aboutArrow from '../img/about/aboutArrow.svg';
import Requisites from '../components/Requisites';
import GarantUs from "../components/GarantUs";

export default function About() {
    return (
        <>
            <div className="about">
                <div className="container">
                    <div className="about__inner">
                        <h1 className="about__title">
                            О нас
                        </h1>
                        <div className="about__us">
                            <div className="about__us-content">
                                <h2>
                                    Сайт <span>официального</span>, независимого, страхового агента.
                                </h2>
                                <p>
                                    Работаем официально, в юридически правовом поле Украины.<br />
                                    Организационно-правовая форма: ФОП – Фізична Особа Підприємець.
                                </p>
                                <ul className="about__us-content__items">
                                    <li className="about__us-content__item">
                                        <div><img src={aboutArrow} /></div><p>Официально зарегистрированный предприниматель</p>
                                    </li>
                                    <li className="about__us-content__item">
                                        <div><img src={aboutArrow} /></div><p>Официально оплачиваю налоги</p>
                                    </li>
                                    <li className="about__us-content__item">
                                        <div><img src={aboutArrow} /></div><p>Официальный агент МТСБУ</p>
                                    </li>
                                    <li className="about__us-content__item">
                                        <div><img src={aboutArrow} /></div> <p>Сайт работает 10 лет</p>
                                    </li>
                                </ul>
                            </div>
                            <img className="about__img" src={aboutBg} />
                        </div>
                        <div className="about__requisites">
                            <div className="about__requisites-content">
                                <h2 className="about__requisites-title">
                                    Реквизиты
                                </h2>
                                <div className="delivery__inner-content__requisites">
                                    <Requisites />
                                </div>
                            </div>
                            <div className="about__requisites-question">
                                <h2 className="about__requisites-title">
                                    Почему <span>нужно покупать</span><br /> именно у нас
                                </h2>
                                <div>
                                    <p className="about__requisites-question__text">Заполняет полисы СПЕЦИАЛИСТ!<br />
                                        - что обезопасит Вас от отказа в выплате,<br />
                                        как в случае с неверно заполненным полисом<br /> САМОСТОЯТЕЛЬНО ОНЛАЙН!</p>
                                    <p className="about__requisites-question__text">Мы всегда на стороне клиента!</p>
                                    <p className="about__requisites-question__text">У нас дешевле – делаем дополнительную<br /> скидку со своих комиссионных</p>
                                    <div className="about__checked-wrapper">
                                        <div>
                                            <h2>
                                                Наша цель
                                            </h2>
                                            <p><span>упростить </span>процедуру страхования</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <GarantUs />
            </div>
        </>
    )
}