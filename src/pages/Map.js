import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Garant from '../components/Garant';
export default function Map() {
    // Mock data (switch on data GETTING with server)
    const navigate = useNavigate();
    const [list, setList] = useState([
        'Главная',
        'О нас',
        'Контакты',
        'Оплата и доставка',
        'Блог',
        'Акции',
        'Юридическая Гарантия',
        'Публичный договор',
        'Онлайн ОСАГО',
        'Зеленая карта',
        'Страхование оружия',
        'Страхование нотариусов',
        'Онлайн КАСКО',
        'Квартира и дом',
        'От Короновируса',
        'Страхование туристов',
        'Ассистанс',
        'Здоровье'
    ])
    const array = [
        '/',
        '/about',
        '/contacts',
        '/delivery',
        '/blog',
        '/promo',
        '/error',
        '/error',
        '/osago',
        '/greencard',
        '/weapon',
        '/notary',
        '/casco',
        '/realty',
        '/covid',
        '/tourists',
        '/assistans',
        '/health'
    ]
    return (
        <>
            <section className='map'>
                <div className='container'>
                    <div className='map__inner'>
                        <h1 className='map__title'>Карта сайта</h1>
                        <ul className='map__items'>
                            {list.map((elem, i) => <li key={elem} className='map__item'><a onClick={() => navigate(array[i])} href='#'>{elem}</a></li>)}
                        </ul>
                    </div>
                </div>
                <Garant />
            </section>
        </>
    )
}