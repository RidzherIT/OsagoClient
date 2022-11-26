import React from "react";

export default function Product({ img, title, func }) {
    return (
        <>
            <section className="info">
                <div className="container">
                    <div className="info__inner">
                        <div className="info__item">
                            <img src={img} alt="" />
                            <div className="info__item-content">
                                <div className="info__item-content__sale">
                                    <p>АКЦИОНОЕ ПРЕДЛОЖЕНИЕ ДНЯ</p>
                                    <p>от 855$</p>
                                </div>
                                <h2 className="info__item-content__title">
                                    {title}
                                </h2>
                                <p className="info__item-content__text">
                                    Получите надежного страхового партнера,<br /> который всегда платит по своим<br />
                                    обязательствам
                                </p>
                                <button onClick={func} className="info__item-content__btn">Купить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}