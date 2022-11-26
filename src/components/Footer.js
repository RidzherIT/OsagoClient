import React from "react";
import footerCompany1 from '../img/footer/footerCompany1.svg';
import footerCompany2 from '../img/footer/footerCompany2.svg';
import footerCompany3 from '../img/footer/footerCompany3.svg';
import footerCompany4 from '../img/footer/footerCompany4.svg';
import footerCompany5 from '../img/footer/footerCompany5.svg';
import footerCompany6 from '../img/footer/footerCompany6.svg';
import footerCompany7 from '../img/footer/footerCompany7.svg';
import footerCompany8 from '../img/footer/footerCompany8.svg';
import footerCompany9 from '../img/footer/footerCompany9.svg';
import footerViber from '../img/footer/footerViber.svg';
import footerTelegram from '../img/footer/footerTelegram.svg';
import footerWhatsup from '../img/footer/footerWhatsup.svg';
import footerVisa from '../img/footer/footerVisa.svg';
import footerMastercard from '../img/footer/footerMastercard.svg';
import footerLogo from '../img/footer/footerLogo.svg';
import footerPhone from '../img/footer/footerPhone.svg';
import { useNavigate } from "react-router-dom";
export default function Footer() {
    const navigate = useNavigate();
    return (
        <>
            <footer className="footer">
                <div className="footer__top">
                    <div className="container">
                        <div className="footer__top-inner">
                            <img src={footerPhone} alt="Phone" />
                            <div>
                                <h2>Хочешь страховку по минимальной цене?</h2>
                                <p>— Пишите нам в Вайбер или Телеграм +380503524107 или заполняте данные на нашем сайте
                                    самостоятельно!<br />
                                    Раньше нужно было звонить и вызывать агента для оформления полиса. Сейчас, с вводом
                                    электроного полиса, ситуация на<br /> рынке изменилась. По телефону полис не оформляется.
                                    Нужно
                                    писать в Вайбер или оформлять самостоятельно.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__company">
                    <img src={footerCompany1} alt="" />
                    <img src={footerCompany2} alt="" />
                    <img src={footerCompany3} alt="" />
                    <img src={footerCompany4} alt="" />
                    <img src={footerCompany5} alt="" />
                    <img src={footerCompany6} alt="" />
                    <img src={footerCompany7} alt="" />
                    <img src={footerCompany8} alt="" />
                    <img src={footerCompany9} alt="" />
                </div>
                <div className="footer__content">
                    <div className="footer__content-inner__top">
                        <div className="container">
                            <div className="footer__flex">
                                <div className="footer__top-nav">
                                    <ul>
                                        <li>
                                            <a onClick={() => navigate('/')} className="footer__btn" href="#">Главная</a>
                                        </li>
                                        <li>
                                            <a onClick={() => navigate('/promo')} className="footer__btn" href="#">Акции</a>
                                        </li>
                                        <li>
                                            <a onClick={() => navigate('/blog')} className="footer__btn" href="#">Блог</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2>Компания</h2>
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
                                        <li>
                                            <a onClick={() => navigate('/error')} href="#">Юридическая гарантия</a>
                                        </li>
                                        <li>
                                            <a onClick={() => navigate('/error')} href="#">Публичный договор</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2>Страхование</h2>
                                    <ul>
                                        <li>
                                            <a onClick={() => navigate('/osago')} href="#">Онлайн ОСАГО</a>
                                        </li>
                                        <li>
                                            <a onClick={() => navigate('/greencard')} href="#">Зеленая карта</a>
                                        </li>
                                        <li>
                                            <a onClick={() => navigate('/weapon')} href="#">Страхование оружия</a>
                                        </li>
                                        <li>
                                            <a onClick={() => navigate('/notary')} href="#">Страхование нотариусов</a>
                                        </li>
                                        <li>
                                            <a onClick={() => navigate('/casco')} href="#">Онлайн КАСКО</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="hidden">Страхование</h2>
                                    <ul>
                                        <li>
                                            <a onClick={() => navigate('/realty')} href="#">Квартира и дом</a>
                                        </li>
                                        <li>
                                            <a onClick={() => navigate('/covid')} href="#">От Короновируса</a>
                                        </li>
                                        <li>
                                            <a onClick={() => navigate('/tourists')} href="#">Страхование туристов</a>
                                        </li>
                                        <li>
                                            <a onClick={() => navigate('/assistans')} href="#">Ассистанс</a>
                                        </li>
                                        <li>
                                            <a onClick={() => navigate('/health')} href="#">Здоровье</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer__feedback">
                                    <h2>Обратная связь</h2>
                                    <div>
                                        <img src={footerViber} alt="" />
                                        <img src={footerTelegram} alt="" />
                                        <img src={footerWhatsup} alt="" />
                                    </div>
                                    <p className="footer__number">0503524107</p>
                                    <p>ответим в течении 5 минут с 9 до 21<br />
                                        оформим полис в течении 5 минут с 10 до 18</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__content-inner__bottom">
                        <div className="container">
                            <div className="footer__flex">
                                <p>© 2011-2021 polisosago.kiev.ua. Авторские права на сайт защищены</p>
                                <ul className="footer__nav-bottom">
                                    <li>
                                        <a onClick={() => navigate('/map')} href="#">Карта сайта</a>
                                    </li>
                                    <li>
                                        <p>Можно оплатить с помощью:
                                        </p>
                                    </li>
                                    <li>
                                        <img src={footerVisa} alt="" />
                                    </li>
                                    <li>
                                        <img src={footerMastercard} alt="" />
                                    </li>
                                    <li>
                                        <img src={footerLogo} alt="" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}