import React from 'react';
import GarantUs from '../components/GarantUs';
import contactsClock from '../img/contacts/contactsClock.svg';
import contactsItem1 from '../img/contacts/contactsItem1.svg';
import contactsItem2 from '../img/contacts/contactsItem2.svg';
import OurRecommend from '../components/OurRecommend';

export default function Contacts() {

    return (
        <>
            <section class="contacts">
                <div class="container">
                    <div class="contacts__inner">
                        <h1 class="contacts__title">
                            Контакты
                        </h1>
                        <div class="contacts__wrapper">
                            <div class="contacts__content">
                                <div class="contacts__content-top__wrapper">
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
                                <div class="contacts__content-bottom">
                                    <p>Для быстрой связи, консультации, заказа …<br />
                                        <span>пишите в любое удобное время!</span>
                                    </p>
                                    <ul>
                                        <li>ответим в течении 5 минут с 9 до 21</li>
                                        <li>оформим полис в течении 5 минут с 10 до 18</li>
                                        <li>Самовывоза нет</li>
                                    </ul>
                                    <p>VIBER / WHATSAP / TELEGRAM: <span>0503524107</span></p>
                                </div>
                            </div>
                            <div class="contacts__modal">
                                <h2>
                                    Напишите нам:
                                </h2>
                                <ul>
                                    <li class="contacts__modal-btn">
                                        <img src={contactsItem1} alt="" />
                                        <a href="#">Заказать полис</a>
                                    </li>
                                    <li class="contacts__modal-btn">
                                        <img src={contactsItem2} alt="" />
                                        <a href="#">Пожаловатся<br />директору</a>
                                    </li>
                                </ul>
                                <p>
                                    Всегда готовы помочь и решить любой<br /> возникший вопрос оперативно
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <OurRecommend />
                <GarantUs />
            </section>
        </>
    )
}