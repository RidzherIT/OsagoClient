import React from 'react';
import Garant from '../components/Garant';
import promoSignal from '../img/promo/promoSignal.svg';
export default function Promo() {
    return (
        <>
            <section className='promo'>
                <div className='container'>
                    <div className='promo__inner'>
                        <h1 className='promo__title'>
                            <span>Подарок</span> в 300₴ если у нас будет дороже
                        </h1>
                        <div className='wrapper__gradient'>
                            <div className='promo__signal'>
                                <div>
                                    <p className='promo__signal-text'>
                                        Подарок в 300₴ это оформления полиса<br /> <span>ТЕХНИЧЕСКОЙ ПОМОЩИ В ДОРОГЕ</span>
                                    </p>
                                </div>
                                <img src={promoSignal} />
                                <p className='promo__signal-subtext'>бесплатно</p>
                            </div>
                        </div>
                        <h2 className='promo__subtitle'>
                            <span>Oформим Вам</span> «ПОМОЩЬ В ДОРОГЕ»
                        </h2>
                        <div className='promo__inner-items'>
                            <ul className='promo__items'>
                                <li>Эвакуатор</li>
                                <li>Замена колеса</li>
                                <li>Доставка топлива</li>
                            </ul>
                            <ul className='promo__items'>
                                <li>Запуск двигателя при разряде АКБ</li>
                                <li>Юридическая консультация</li>
                            </ul>
                        </div>
                        <p className='promo__text'>Если Вы найдете аналогичное предложение дешевле, больше чем на 10 грн. При оформлении полиса у нас. Мы подарим полис Технической помощи в дороге. Только для легковых авто, стоимостью страховки от 1000 грн.</p>
                    </div>
                </div>
                <Garant />
            </section>
        </>
    )
}