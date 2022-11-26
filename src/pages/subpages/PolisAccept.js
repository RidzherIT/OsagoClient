import React from 'react';
import PolisForm from '../../components/PolisForm';
import Button from '../../ui/Button';
import formInfoTarget from '../../img/form-info/form-infoTarget.svg';
import formInfoShield from '../../img/form-info/form-infoShield.svg';
import TelegramAndViber from '../../ui/TelegramAndViber';
export default function PolisAccept({ funcNextComponent, polis, polisName, polisSale, polisType, polisImg, polisFranschiza, polisDate, polisTypeAuto, polisVAuto, polisWay, polisPeople, polisPurpose }) {
    return (
        <>
            <div class="form-info">
                <div class="container">
                    <div class="form-info__inner">
                        <h1>
                            Оформлення поліса від СК <span>{polisName}</span>
                        </h1>
                        <div class="wrapper__gradient">
                            <div class="form-info__target">
                                <img src={formInfoTarget} alt="" />
                                <p>
                                    Напишіть нам про свій вибір, відправте скрін у Вайбер або<br /> Телеграм 0503524107. Ми всі
                                    оформимо замість Вас.<br />
                                    <span>Або продовжіть оформлення самостійно</span>
                                </p>
                            </div>
                        </div>
                        <div class="form-info__btns">
                            <TelegramAndViber />
                        </div>
                        <PolisForm polis={polis} polisType={polisType} sizeComponent={true} polisName={polisName} polisSale={polisSale} polisImg={polisImg} polisFranschiza={polisFranschiza} polisDate={polisDate} polisWay={polisWay} polisPeople={polisPeople} polisPurpose={polisPurpose} polisTypeAuto={polisTypeAuto} polisVAuto={polisVAuto} />
                        <Button funcNextComponent={funcNextComponent} text='Далее' />
                        <p class="form-info__text">
                            Кнопка веде до сторінки введення даних<br />
                            та оформлення полісу
                        </p>
                        <div class="form-info__shield-content">
                            <img src={formInfoShield} alt="" />
                            <h2>
                                Покупая у нас <span>Вы ничем не рискуете!</span>
                            </h2>
                            <p>
                                З 01.01.2022 всі платежі проводяться під наглядом<br /> податкової інспекції з обов'язковою
                                фіксалізацією
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}