import React, { useState } from "react";
import logo from '../img/header/logo.svg';
import headerViber from '../img/header/headerViber.svg';
import headerTelegram from '../img/header/headerTelegram.svg';
import headerWhatsup from '../img/header/headerWhatsup.svg';
import { useNavigate } from "react-router-dom";
export default function Header() {
    const [accordeon, setAccordeon] = useState(false);
    const changeAccordeon = () => {
        if (!accordeon) {
            setAccordeon(true);
            return;
        }
        setAccordeon(false);
    }
    const navigate = useNavigate();
    return (
        <>
            <div className="wrapper">
                <div className="language">
                    <p>Только электронный полис безопасней</p>
                    <p>Минимум действий — экономия времени</p>
                    <p>Оформление через Вайбер или сайт</p>
                    <div>
                        <a href="#">RU</a>
                        <a href="#">UA</a>
                    </div>
                </div>
                <header className="header">
                    <div className="container">
                        <div className="header__inner">
                            <div className="logo__inner">
                                <div onClick={() => navigate('/')} className="logo__items">
                                    <img src={logo} alt="" />
                                    <div>
                                        <p className="logo__title">Дарим 300₴</p>
                                        <p className="logo__text">если у нас будет дороже</p>
                                    </div>
                                </div>
                            </div>
                            <nav className="menu">
                                <ul>
                                    <li>
                                        <a onClick={() => navigate('/about')} href="#">О нас</a>
                                    </li>
                                    <li>
                                        <a onClick={() => navigate('/contacts')} href="#">Контакты</a>
                                    </li>
                                    <li>
                                        <a onClick={() => navigate('/delivery')} href="#">Оплата и доставка</a>
                                    </li>
                                </ul>
                            </nav>
                            <div className="header__menu">
                                <button onClick={changeAccordeon} className="header__menu-btn">
                                    Застраховать
                                </button>
                                {accordeon && <div className="header__menu-items">
                                    <ul>
                                        <li>
                                            <a onClick={() => navigate('/osago')} href="#">Автоцивика</a>
                                        </li>
                                        <li>
                                            <a onClick={() => navigate('/greencard')} href="#">Зеленая карта</a>
                                        </li>
                                        <li>
                                            <a onClick={() => navigate('/weapon')} href="#">Оружие</a>
                                        </li>
                                        <li>
                                            <a onClick={() => navigate('/notary')} href="#">Нотариусов</a>
                                        </li>
                                        <li>
                                            <a onClick={() => navigate('/casco')} href="#">КАСКО</a>
                                        </li>
                                        <li>
                                            <a onClick={() => navigate('/realty')} href="#">Квартира и дом</a>
                                        </li>
                                        <li>
                                            <a onClick={() => navigate('/covid')} href="#">От Короновируса</a>
                                        </li>
                                        <li>
                                            <a onClick={() => navigate('/tourists')} href="#">Туристов</a>
                                        </li>
                                        <li>
                                            <a onClick={() => navigate('/assistans')} href="#">Ассистанс</a>
                                        </li>
                                        <li>
                                            <a href="#">Здоровье</a>
                                        </li>
                                    </ul>
                                </div>}
                            </div>
                            <div className="header__contacts">
                                <div className="header__contacts-apps">
                                    <img src={headerViber} alt="" />
                                    <img src={headerTelegram} alt="" />
                                    <img src={headerWhatsup} alt="" />
                                </div>
                            </div>
                            <div className="header__contacts-info">
                                <p>0503524107</p>
                                <p>10:00 - 18:00</p>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}