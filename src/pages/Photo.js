import React from 'react';
import photoArrow from '../img/photo/photoArrow.svg';
import photoLogo from '../img/photo/photoLogo.svg';
import Garant from '../components/Garant';
export default function Photo() {
    return (
        <>
            <section className="photo">
                <div className="container">
                    <div className="photo__inner">
                        <h1>
                            Отправьте <span>фото</span>
                        </h1>
                        <div className="photo__content-wrapper">
                            <div className="photo__content">
                                <img className="photo__content-img" src={photoLogo} alt="" />
                                <ul>
                                    <li>
                                        <div><img src={photoArrow} alt="" /></div>
                                        <p className="list_item">Водительского удостоверения</p>
                                    </li>
                                    <li>
                                        <div><img src={photoArrow} alt="" /></div>
                                        <p className="list_item">Тех-паспорт</p>
                                    </li>
                                    <li>
                                        <div><img src={photoArrow} alt="" /></div>
                                        <p className="list_item">Идентификационный код</p>
                                    </li>
                                    <li>
                                        <div><img src={photoArrow} alt="" /></div>
                                        <p className="list_item">льготное удостоверение (если есть)</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="photo__btns">
                            <a className="photo__btns-telegram" href="#">Telegram +380503524107</a>
                            <a className="photo__btns-viber" href="#">Viber +380503524107</a>
                        </div>
                        <p className="photo__text">
                            Оформим, предоставим полис на проверку,<br />
                            <span>зарегистрируем в МТСБУ!</span>
                        </p>
                    </div>
                </div>
            </section>
            <Garant />
        </>
    )
}