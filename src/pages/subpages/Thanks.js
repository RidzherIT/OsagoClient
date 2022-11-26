import React from "react";
import { useNavigate } from "react-router-dom";
import thanksImg from '../../img/thanks/thanksImg.jpg';
export default function Thanks() {
    const navigate = useNavigate();
    return (
        <>
            <section class="thanks">
                <div class="container">
                    <div class="thanks__inner">
                        <h1 class="thanks__title">
                            <span>Спасибо</span> за заказ!
                        </h1>
                        <img src={thanksImg} alt="" class="thanks__img" />
                        <p class="thanks__text">
                            Ваш полис успешно оформлен<br />
                            и будет отправлен на Ваш e-mail в течении 5-ти минут
                        </p>
                        <a onClick={() => navigate('/')} href="#" class="thanks__btn">
                            Вернуться на главную страницу
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}