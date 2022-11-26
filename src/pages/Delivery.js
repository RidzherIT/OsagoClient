import React from 'react';
import Requisites from '../components/Requisites';
import deliveryArrow from '../img/delivery/deliveryArrow.svg';
import Garant from '../components/Garant';
export default function Delivery() {
    return (
        <>
            <section className="delivery">
                <div className="container">
                    <div className="delivery__inner">
                        <h1 className="delivery__title">
                            Оплата и Доставка
                        </h1>
                        <div className="delivery__inner-content">
                            <div className="delivery__inner-content__requisites">
                                <p className="delivery__inner-content__title"><span>Оплата</span> любым удобным способом по
                                    реквизитам:</p>
                                <Requisites />
                            </div>
                            <div className="delivery__inner-content__to">
                                <p className="delivery__inner-content__title"><span>Доставка</span> осуществляется в:</p>
                                <div>
                                    <ul>
                                        <li>
                                            <div><img src={deliveryArrow} alt="" /></div>
                                            <p className="list__item">Вайбер</p>
                                        </li>
                                        <li>
                                            <div><img src={deliveryArrow} alt="" /></div>
                                            <p className="list__item">Телеграм</p>
                                        </li>
                                        <li>
                                            <div><img src={deliveryArrow} alt="" /></div>
                                            <p className="list__item">Вацап</p>
                                        </li>
                                        <li>
                                            <div><img src={deliveryArrow} alt="" /></div>
                                            <p className="list__item">Электронную почту</p>
                                        </li>
                                    </ul>
                                    <div className="delivery__shield">
                                        <p>З 01.01.2022 всі платежі проводяться<br /> під наглядом податкової інспекції з<br />
                                            обов'язковою
                                            фіксалізацією</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="delivery__pdf-wrapper">
                            <div className="delivery__pdf">
                                <p>Мы продаём только электронные полисы</p>
                                <p>Получить исчерпывающую информацию про электронный<br />
                                    полис можно по <span>ссылке</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Garant />
        </>
    )
}