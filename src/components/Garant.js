import React from "react";
import garartIcon1 from '../img/garant/garantIcon1.svg';
import garartIcon2 from '../img/garant/garantIcon2.svg';
import garartIcon3 from '../img/garant/garantIcon3.svg';
import garartIcon4 from '../img/garant/garantIcon4.svg';
import garartIcon5 from '../img/garant/garantIcon5.svg';
import garartIcon6 from '../img/garant/garantIcon6.svg';

export default function Garant() {
    return (
        <>
            <section className="garant">
                <div className="container">
                    <div className="garant__inner">
                        <h1 className="garant-title">
                            Покупая у нас Вы ничем не рискуете
                        </h1>
                        <div className="garant__content">
                            <div className="garant__content-item">
                                <div><img src={garartIcon1} alt="" /></div>
                                <p>Сайт работает 10 лет – это лучшая гарантия стабильности!</p>
                            </div>
                            <div className="garant__content-item">
                                <div><img src={garartIcon2} alt="" /></div>
                                <p>Полис оформит специалист с 10 летним стажем</p>
                            </div>
                            <div className="garant__content-item">
                                <div><img src={garartIcon3} alt="" /></div>
                                <p>Официальный агент МТСБУ</p>
                            </div>
                            <div className="garant__content-item">
                                <div><img src={garartIcon4} alt="" /></div>
                                <p>Предоставляем Вам <span>Юридическую гарантию</span></p>
                            </div>
                            <div className="garant__content-item">
                                <div><img src={garartIcon5} alt="" /></div>
                                <p>Условия сотрудничества с нами открыты,
                                    вот <span>договор</span></p>
                            </div>
                        </div>
                        <div className="garant__percent">
                            <p className="garant__percent-item">100%</p>
                            <p className="garant__percent-text"><span>гарантия возврата денег, страховой компанией,</span><br />
                                за неиспользованные месяцы страховки</p>
                            <img src={garartIcon6} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}