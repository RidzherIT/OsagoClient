import React from 'react';
import Requisites from '../../components/Requisites';
import requisitesFormPhoto from '../../img/requisites-form/requisites-formPhoto.svg';
import PolisForm from '../../components/PolisForm';
import Button from '../../ui/Button';
import TelegramAndViber from '../../ui/TelegramAndViber';
export default function RequisitesForm({ funcNextComponent, polis, polisName, polisSale, polisType, polisImg, polisFranschiza, polisDate, polisWay, polisPeople, polisPurpose, polisTypeAuto, polisVAuto }) {
    return (
        <>
            <section className='requisites-form'>
                <div className='container'>
                    <div className='requisites-form__inner'>
                        <h1 className='requisites-form__title'>
                            Оплата поліса від СК <span>{polisName}</span>
                        </h1>
                        <div className='requisites-form__content'>
                            <div className='requisites-form__form'>
                                <div className='delivery__inner-content__requisites'>
                                    <h2 className='requisites-form__form-title'>
                                        Оплата здійснюється будь-яким зручним для Вас способом за вказаними реквізитами
                                    </h2>
                                    <Requisites>
                                        <div>
                                            <p className="delivery__background-title">До сплати</p>
                                            <p className="delivery__background-text">{polisSale}₴</p>
                                        </div>
                                        <div>
                                            <p className="delivery__background-title">Призначення платежу</p>
                                            <p className="delivery__background-text">за страховий поліс</p>
                                        </div>
                                    </Requisites>
                                </div>
                                <div className='requisites-form__form-wrapper wrapper__gradient'>
                                    <div className='requisites-form__form-photo'>
                                        <img src={requisitesFormPhoto} />
                                        <p>
                                            <span>Після оплати надішліть фото квитанції у Вайбер або Телеграм.<br /></span>
                                            Зареєструємо поліс у МТСБУ та надамо Вам
                                        </p>
                                    </div>
                                </div>
                                <TelegramAndViber />
                            </div>

                            {/* POLIS */}

                            <div>
                                <PolisForm polis={polis} polisType={polisType} sizeComponent={false} polisName={polisName} polisSale={polisSale} polisImg={polisImg} polisFranschiza={polisFranschiza} polisDate={polisDate} polisWay={polisWay} polisPeople={polisPeople} polisPurpose={polisPurpose} polisTypeAuto={polisTypeAuto} polisVAuto={polisVAuto} />
                                <Button funcNextComponent={funcNextComponent} text={'Далее'} />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}