import React, { useEffect, useState } from 'react';
import paymentLogoPrivat24 from '../../img/payment/paymentLogoPrivat24.svg';
import paymentLogoGoogle from '../../img/payment/paymentLogoGoogle.svg';
import paymentLogoPortmone from '../../img/payment/paymentLogoPortmone.svg';
export default function Payment({ funcNextComponent, polisTitle, polisName, polisSale, email, numberStatement, polisType }) {
    const [pay, setPay] = useState('privat');
    const [switchPay, setSwitchPay] = useState(false);
    const [numberPhone, setNumberPhone] = useState('');
    const onMouseDownInput = function (e) {
        if (e.target.dataset.logo != pay) setPay(e.target.dataset.logo);
    }
    const onChangeInput = function (e) {
        setNumberPhone(e.target.value);
        setTimeout(() => {
            if (e.target.value.length >= 6) {
                setSwitchPay(true);
                setNumberPhone('');
            }
        }, 3000);
    }
    useEffect(() => {
        setPay('privat');
        setSwitchPay(false)
    }, [])
    return (
        <>
            <section class="payment">
                <div class="container">
                    <div class="payment__inner">
                        <h1 class="payment__title">
                            Оплата поліса від СК <span>{polisName}</span>
                        </h1>
                        <h2 class="payment__subtitle">
                            Переконайтеся, що у Вас встановлений необхідний ліміт на проведення інтернет платежів. Це основна
                            причина невдалих оплат
                        </h2>
                        {switchPay && <div class="payment__checkbox">
                            <h3>
                                Сплатити за допомогою:
                            </h3>
                            <div class="payment__checkbox-items">
                                <input onMouseDown={onMouseDownInput} data-logo='privat' checked={pay == 'privat' ? true : false} type='radio' />
                                <input onMouseDown={onMouseDownInput} data-logo='portmone' checked={pay == 'portmone' ? true : false} type='radio' />
                            </div>
                        </div>}
                        <div class="payment__content">
                            {switchPay && <div class="payment__form">
                                <div>
                                    <p>До сплати:</p>
                                    <p><span>{polisSale}₴</span></p>
                                </div>
                                <p class="payment__form-text">
                                    Оплата замовлення {numberStatement}, поліс {polisTitle}
                                </p>
                                <h4 class="payment__form-subtitle">
                                    Сплатити через {pay == 'privat' ? 'Приват24' : 'Portmone.com'}
                                </h4>
                                <a onClick={e => funcNextComponent(true)} href="#">
                                    <img src={pay == 'privat' ? paymentLogoPrivat24 : paymentLogoPortmone} alt="" /> Pay
                                </a>
                                <a onClick={e => funcNextComponent(true)} href="#">
                                    Оплатити через <img src={paymentLogoGoogle} alt="" />
                                    <span>Pay</span>
                                </a>
                            </div>}
                            {!switchPay && <div class="payment__form-code">
                                <h3 class="payment__form-code__title">
                                    Введіть код з SMS
                                </h3>
                                <p class="payment__form-code__text">
                                    Цією дією Ви ставите електронний підпис<br /> та підтверджуєте достовірність введених<br />
                                    раніше
                                    данних
                                </p>
                                <div><input onChange={onChangeInput} value={numberPhone} placeholder="XX-XX-XX" type="text" /></div>
                                <div><a >Відправити SMS повторно</a></div>
                                <div><a >← Назад</a></div>
                            </div>}
                            <div class="payment__text">
                                <h3 class="payment__text-title">
                                    {polisType}
                                </h3>
                                <div class="payment__text-items">
                                    <p>Оплата замовлення №{numberStatement}</p>
                                    <p>Електронний поліс створений і готовий до оплати</p>
                                    <p>Після оплати поліс буде надіслано на e-mail:</p>
                                    <p>{email}</p>
                                    <p>Також поліс можна буде завантажити на інший e-mail</p>
                                </div>
                                <div class="payment__text-status">
                                    <p>Статус:</p>
                                    <p><span>Очікує оплати</span></p>
                                </div>
                            </div>
                        </div>
                        <p class="payment__lock">
                            Інтернет платежі з цієї сторінки надійно захищені сертифікатом SSL та протоколом 3D Secure. Компанія
                            Portmone.com не передає данні платіжних карт сайту polisosago.kiev.ua
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}