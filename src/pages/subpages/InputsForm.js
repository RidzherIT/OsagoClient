import React, { useContext, useState } from 'react';
import PolisForm from '../../components/PolisForm';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import { Context } from '../../';
import { observer } from 'mobx-react-lite';
export default observer(function InputsForm({ funcNextComponent, polis, polisName, polisSale, polisType, polisImg, polisFranschiza, polisDate, polisTypeAuto, polisVAuto, polisWay, polisPeople, polisPurpose }) {
    const useFuncNextComponent = (bool) => {
        store.setIsBoolean(true);
        setTimeout(() => {
            store.setIsBoolean(false)
            funcNextComponent(bool)
        }, 1000)
    }
    const { store } = useContext(Context);
    const checkDocument = polis == 'osago' || polis == 'dgo' || polis == 'tourists' || polis == 'weapon' || polis == 'notary' || polis == 'realty' || polis == 'covid' || polis == 'health';
    const checkAddress = polis == 'osago' || polis == 'dgo' || polis == 'greencard' || polis == 'tourists' || polis == 'weapon' || polis == 'notary' || polis == 'realty' || polis == 'covid' || polis == 'health' || polis == 'assistans';
    const checkTransport = polis == 'osago' || polis == 'assistans' || polis == 'dgo' || polis == 'greencard' || polis == 'casco';
    const checkPeriod = polis == 'osago' || polis == 'dgo' || polis == 'greencard' || polis == 'tourists';
    console.log(store.isInfoInputs)
    return (
        <>
            <div class="form">
                <div class="container">
                    <div class="form__inner">
                        <h1>Оформлення поліса {polisType} від СК <span>{polisName}</span></h1>
                        <div className='form__flex'>
                            <div className='form__wrapper'>
                                <div class="form__input">
                                    <div class="form__input-title__wrapper">
                                        <h2 class="form__input-title form__input-number-one form__input-question">
                                            Контакти страхувальника
                                        </h2>
                                    </div>
                                    <div class="form__input-inner">
                                        <div class="form__input-item">
                                            <p>
                                                Телефон
                                            </p>
                                            <Input name='phone' type="text" placeholder="+38 (___) ___-__-__" />
                                        </div>
                                        <div class="form__input-item">
                                            <p>
                                                Введіть e-mail
                                            </p>
                                            <Input name='email' type="text" placeholder="E-mail" />
                                        </div>
                                    </div>
                                </div>



                                <div class="form__input">
                                    <div class="form__input-title__wrapper">
                                        <h2 class="form__input-title form__input-number-two form__input-question">
                                            Особисті дані
                                        </h2>
                                    </div>


                                    <div class="form__input-inner">
                                        <div class="form__input-item">
                                            <p>
                                                Прізвище (українською)
                                            </p>
                                            <Input name='lastname' type="text" />
                                        </div>
                                        <div class="form__input-item">
                                            <p>
                                                Ім'я (українською)
                                            </p>
                                            <Input name='firstname' type="text" />
                                        </div>
                                        <div class="form__input-item">
                                            <p>
                                                По батькові (українською)
                                            </p>
                                            <Input name='middlename' type="text" />
                                        </div>
                                    </div>


                                    {polis == 'greencard' && <div class="form__input-inner">
                                        <div class="form__input-item form__input-half">
                                            <p>
                                                Прізвище (латинською)
                                            </p>
                                            <Input name='lastname' type="text" />
                                        </div>
                                        <div class="form__input-item form__input-half">
                                            <p>
                                                Ім'я (латинською)
                                            </p>
                                            <Input name='firstname' type="text" />
                                        </div>
                                    </div>}
                                    <div class="form__input-inner">
                                        <div class="form__input-item form__input-half">
                                            <p>
                                                Дата народження
                                            </p>
                                            <Input name='birthday' type="text" placeholder='дд.мм.рррр' />
                                        </div>
                                        <div class="form__input-item form__input-half">
                                            <p class="form__input-question">
                                                ІПН
                                            </p>
                                            <Input name='tin' type="text" placeholder='1234567890' />
                                        </div>
                                    </div>
                                </div>




                                {
                                    checkDocument && <div class="form__input">
                                        <div class="form__input-title__wrapper">
                                            <h2 class="form__input-title form__input-number-three form__input-question">
                                                Документ
                                            </h2>
                                        </div>
                                        <div class="form__input-switch">
                                            <h3>
                                                Оберіть документ:
                                            </h3>
                                            <a href="#">
                                                Паспорт
                                            </a>
                                            <a href="#">
                                                ID карта
                                            </a>
                                            <a href="#">
                                                Права
                                            </a>
                                        </div>
                                        <div class="form__input-inner">
                                            <div class="form__input-item form__input-half">
                                                <p class="form__input-question">
                                                    Серія
                                                </p>
                                                <Input name='seriaPass' type="text" placeholder='НВ' />
                                            </div>
                                            <div class="form__input-item form__input-half">
                                                <p class="form__input-question">
                                                    Номер
                                                </p>
                                                <Input name='numberPass' type="text" placeholder='123456' />

                                            </div>
                                            <div class="form__input-item">
                                                <p class="form__input-question">
                                                    Ким виданий
                                                </p>
                                                <Input name='whomPass' type="text" placeholder='Красилівський РВ УМВС України в Хмельницькій обл.' />

                                            </div>
                                            <div class="form__input-item form__input-half">
                                                <p class="form__input-question">
                                                    Коли виданий
                                                </p>
                                                <Input name='dataPass' type="text" placeholder='дд.мм.рррр' />

                                            </div>
                                        </div>
                                    </div>
                                }





                                {
                                    polis == 'greencard' && <div class="form__input">
                                        <div class="form__input-title__wrapper">
                                            <h2 class="form__input-title form__input-number-four form__input-question">
                                                Доставка
                                            </h2>
                                        </div>
                                        <div class="form__input-inner">
                                            <div class="form__input-item">
                                                <p>
                                                    Область
                                                </p>
                                                <Input name='area' type="text" placeholder='Київська' />

                                            </div>
                                            <div class="form__input-item">
                                                <p>
                                                    Тип населеного пункту
                                                </p>
                                                <Input name='typeLocality' type="text" placeholder='Місто' />

                                            </div>
                                            <div class="form__input-item">
                                                <p>
                                                    Назва населеного пункту
                                                </p>
                                                <Input name='nameLocality' type="text" placeholder='Київ' />

                                            </div>
                                            <div class="form__input-item">
                                                <p>
                                                    Номер відділення Нової Пошти
                                                </p>
                                                <Input name='numberLocality' type="text" placeholder='1' />

                                            </div>
                                        </div>
                                    </div>
                                }





                                {
                                    checkAddress && <div class="form__input">
                                        <div class="form__input-title__wrapper">
                                            <h2 className={`form__input-title ${((polis == 'assistans' || polis == 'greencard') && 'form__input-number-three') || 'form__input-number-four'} form__input-question`}>
                                                Адреса
                                            </h2>
                                        </div>
                                        <div class="form__input-inner">
                                            <div class="form__input-item">
                                                <p>
                                                    Область
                                                </p>
                                                <Input name='area' type="text" placeholder='Київська' />

                                            </div>
                                            <div class="form__input-item">
                                                <p>
                                                    Тип населеного пункту
                                                </p>
                                                <Input name='typeLocality' type="text" placeholder='Місто' />
                                            </div>
                                        </div>
                                        <div class="form__input-inner">
                                            <div class="form__input-item">
                                                <p>
                                                    Назва населеного пункту
                                                </p>
                                                <Input name='nameLocality' type="text" placeholder='Київ' />
                                            </div>
                                            <div class="form__input-item">
                                                <p>
                                                    Назва вулиці
                                                </p>
                                                <Input name='nameStreet' type="text" placeholder='Проспект Перемоги' />

                                            </div>
                                            <div class="form__input-item form__input-half">
                                                <p>
                                                    № Будинку
                                                </p>
                                                <Input name='numberHouse' type="text" />

                                            </div>
                                            <div class="form__input-item form__input-half">
                                                <p>
                                                    № Квартири
                                                </p>
                                                <Input name='numberApart' type="text" />

                                            </div>
                                        </div>
                                    </div>
                                }




                                {
                                    checkTransport && <div class="form__input">
                                        <div class="form__input-title__wrapper">
                                            <h2 className={`form__input-title ${(polis == 'casco' && 'form__input-number-three') || (polis == 'assistans' && 'form__input-number-four') || 'form__input-number-five'} form__input-question`}>
                                                Транспортний засіб
                                            </h2>
                                        </div>
                                        {
                                            polis == 'casco' && <div class="form__input-inner">
                                                <div class="form__input-item">
                                                    <p>
                                                        Тип авто:
                                                    </p>
                                                    <Input name='typeAuto' type="text" placeholder='Легковий автомобіль' />

                                                </div>
                                                <div class="form__input-item">
                                                    <p>
                                                        Об’єм двигуна
                                                    </p>
                                                    <Input name='volumeAuto' type="text" placeholder='Більше 3000 см3' />

                                                </div>
                                            </div>
                                        }
                                        <div class="form__input-inner">
                                            {
                                                polis == 'casco' && <div class="form__input-item">
                                                    <p class="form__input-question">
                                                        Дійсна вартість
                                                    </p>
                                                    <Input name='valueActual' type="text" placeholder='0' />

                                                </div>
                                            }
                                            <div class="form__input-item form__input-half">
                                                <p class="form__input-question">
                                                    Марка
                                                </p>
                                                <Input name='brand' type="text" placeholder='Mercedes' />

                                            </div>
                                            <div class="form__input-item form__input-half">
                                                <p class="form__input-question">
                                                    Модель
                                                </p>
                                                <Input name='model' type="text" placeholder='Vito' />

                                            </div>

                                            {
                                                polis != 'casco' && <>
                                                    <div class="form__input-item">
                                                        <p class="form__input-question">
                                                            № кузова (VIN-код)
                                                        </p>
                                                        <Input name='vin' type="text" placeholder='1234abcd5678efg90' />
                                                    </div>
                                                    <div class="form__input-item form__input-half">
                                                        <p class="form__input-question">
                                                            Держ. номер
                                                        </p>
                                                        <Input name='numberAuto' type="text" placeholder='AA1234AA' />
                                                    </div>
                                                </>
                                            }

                                            <div class="form__input-item form__input-half">
                                                <p class="form__input-question">
                                                    Рік випуску
                                                </p>
                                                <Input name='dateAuto' type="text" placeholder='2008' />

                                            </div>
                                        </div>
                                        {
                                            polis == 'casco' && <div class="form__input-inner">
                                                <div class="form__input-item">
                                                    <p>
                                                        Місце реєстрації ТЗ
                                                    </p>
                                                    <Input name='areaRegistration' type="text" placeholder='Київ' />

                                                </div>
                                                <div class="form__input-item">
                                                    <p>
                                                        Сигналізація
                                                    </p>
                                                    <Input name='signal' type="text" placeholder='GPS-сигналізація' />

                                                </div>
                                            </div>
                                        }
                                    </div>
                                }





                                {
                                    polis == 'casco' && <div class="form__input">
                                        <div class="form__input-title__wrapper">
                                            <h2 class="form__input-title form__input-number-four form__input-question">
                                                Ризики
                                            </h2>
                                        </div>
                                        <div class="form__input-inner">
                                            <div class="form__input-item">
                                                <p>
                                                    Ризики
                                                </p>

                                                <div>
                                                    <div>
                                                        <input type="checkbox" name="" id="" />
                                                        <p>ДТП</p>
                                                    </div>

                                                    <div>
                                                        <input type="checkbox" name="" id="" />
                                                        <p>ПДТО</p>
                                                    </div>
                                                    <div>
                                                        <input type="checkbox" name="" id="" />
                                                        <p>Незаконне заволодіння</p>
                                                    </div>
                                                    <div>
                                                        <input type="checkbox" name="" id="" />
                                                        <p>Інше</p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }



                                {
                                    polis == 'casco' && <div class="form__input">
                                        <div class="form__input-title__wrapper">
                                            <h2 class="form__input-title form__input-number-five form__input-question">
                                                Франшиза
                                            </h2>
                                        </div>
                                        <div class="form__input-inner">
                                            <div class="form__input-item">
                                                <p>
                                                    Збиток
                                                </p>
                                                <Input name='damage' type="text" placeholder='1' />

                                            </div>
                                            <div class="form__input-item">
                                                <p>
                                                    Незаконне заволодіння
                                                </p>
                                                <Input name='misappropriation' type="text" placeholder='1' />

                                            </div>
                                        </div>
                                        <div class="input-checkbox">
                                            <input type="checkbox" name="" id="" />
                                            <p>Будь-яка особа на законних підставах</p>
                                        </div>
                                    </div>
                                }





                                {
                                    polis == 'casco' && <div class="form__input">
                                        <div class="form__input-title__wrapper">
                                            <h2 class="form__input-title form__input-number-six form__input-question">
                                                Водії
                                            </h2>
                                        </div>
                                        <div class="form__input-inner">
                                            <div class="form__input-item">
                                                <p>
                                                    Кількість:
                                                </p>
                                                <Input name='quantity' type="text" placeholder='1' />

                                            </div>
                                            <div class="form__input-item">
                                                <p>
                                                    Мінімальний вік:
                                                </p>
                                                <Input name='minAge' type="text" placeholder='1' />

                                            </div>
                                            <div class="form__input-item">
                                                <p>
                                                    Максимальний вік:
                                                </p>
                                                <Input name='maxAge' type="text" placeholder='1' />

                                            </div>
                                            <div class="form__input-item">
                                                <p>
                                                    Мінімальний стаж:
                                                </p>
                                                <Input name='minExp' type="text" placeholder='1' />

                                            </div>
                                        </div>
                                    </div>
                                }



                                {
                                    polis == 'notary' && <div class="form__input">
                                        <div class="form__input-title__wrapper">
                                            <h2 class="form__input-title form__input-number-five form__input-question">
                                                Професійні дані
                                            </h2>
                                        </div>
                                        <div class="form__input-inner">
                                            <div class="form__input-item">
                                                <p class="form__input-question">
                                                    Свідоцтво на право нотаріальної діяльності
                                                </p>
                                                <Input name='certificate' type="text" placeholder='1234567890' />

                                            </div>
                                            <div class="form__input-item">
                                                <p class="form__input-question">
                                                    Нотаріальний округ
                                                </p>
                                                <Input name='notaryDistrict' type="text" placeholder='Київський міський нотаріальний округ' />

                                            </div>
                                        </div>
                                        <div class="form__input-inner">
                                            <div class="form__input-item">
                                                <p class="form__input-question">
                                                    Дата видачі
                                                </p>
                                                <Input name='date' type="text" placeholder='01.01.2022' />

                                            </div>
                                            <div class="form__input-item">
                                                <p class="form__input-question">
                                                    Дата видачі
                                                </p>
                                                <Input name='date' type="text" placeholder='01.01.2022' />

                                            </div>
                                        </div>
                                        <div class="form__input-inner">
                                            <div class="form__input-item form__input-half">
                                                <p class="form__input-question">
                                                    Посвідчення про реєстрацію приватної
                                                    нотаріальної дуіяльності
                                                </p>
                                                <Input name='certificateRegistration' type="text" placeholder='1234567890' />

                                            </div>
                                        </div>
                                    </div>
                                }




                                {
                                    polis == 'realty' && <div class="form__input">
                                        <div class="form__input-title__wrapper">
                                            <h2 class="form__input-title form__input-number-five form__input-question">
                                                Майно
                                            </h2>
                                        </div>
                                        <div class="form__input-inner">
                                            <div class="form__input-item">
                                                <p>
                                                    Адреса
                                                </p>
                                                <Input name='address' type="text" placeholder='м. Київ, проспект Перемоги 1, кв. 1' />

                                            </div>
                                        </div>
                                        <div class="form__input-inner">
                                            <div class="form__input-item">
                                                <p>
                                                    Загальна площа (м2)
                                                </p>
                                                <Input name='areaHouse' type="text" placeholder='1' />

                                            </div>
                                            <div class="form__input-item">
                                                <p>
                                                    Поверхи з
                                                </p>
                                                <Input name='floorsWith' type="text" placeholder='1' />

                                            </div>
                                            <div class="form__input-item">
                                                <p>
                                                    Поверхи по
                                                </p>
                                                <Input name='floorsBy' type="text" placeholder='1' />

                                            </div>
                                        </div>
                                        <div class="form__input-inner">
                                            <div class="form__input-item">
                                                <p>
                                                    Рік побудови
                                                </p>
                                                <Input name='dateConstruction' type="text" placeholder='дд.мм.рррр' />

                                            </div>
                                            <div class="form__input-item">
                                                <p>
                                                    Кількість кімнат
                                                </p>
                                                <Input name='numberRooms' type="text" placeholder='1' />

                                            </div>
                                            <div class="form__input-item">
                                                <p>
                                                    Матеріал конструкцій
                                                </p>
                                                <Input name='materialConstruction' type="text" placeholder='бетон' />

                                            </div>
                                        </div>
                                        <div class="form__input-inner">
                                            <div class="form__input-item">
                                                <p>
                                                    Застраховане майно включає
                                                </p>
                                                <Input name='insuredProperty' type="text" placeholder='Житлове приміщення з внутрішнім оздобленням' />

                                            </div>
                                        </div>
                                        <div class="form__input-inner">
                                            <div class="form__input-item">
                                                <p>
                                                    Застраховане майно не знаходиться в аварійному стані і, відповідно до вимог чинних норм,
                                                    придатне до експлуатації:
                                                </p>
                                                <Input name='emergencyCondition' type="text" placeholder='Введите Так или Нi' />

                                            </div>
                                        </div>
                                        <div class="form__input-inner">
                                            <div class="form__input-item">
                                                <p>
                                                    Майно приймається на страхування
                                                </p>
                                                <Input name='propertyAccepted' type="text" placeholder='Без огляду та без врахування зносу майна' />

                                            </div>
                                        </div>
                                    </div>
                                }





                                {
                                    checkPeriod && <div class="form__input">
                                        <div class="form__input-title__wrapper">
                                            <h2 className={`form__input-title ${polis == 'tourists' && 'form__input-number-five' || 'form__input-number-six'} form__input-question`}>
                                                Період дії
                                            </h2>
                                        </div>
                                        <div class="form__input-inner">
                                            <div class="form__input-item">
                                                <p>
                                                    Дата початку дії
                                                </p>
                                                <Input name='dateAction' type="text" placeholder='05.01.2022' />

                                            </div>
                                            <div class="form__input-item">
                                                <p>
                                                    Дата закінченя дії
                                                </p>
                                                <Input name='dateExpiration' type="text" placeholder='05.01.2022' />

                                            </div>
                                        </div>
                                    </div>
                                }





                                <div class="form__input">
                                    <div class="form__input-title__wrapper">
                                        <h2 className={`form__input-title ${((polis == 'tourists' || polis == 'weapon' || polis == 'notary' || polis == 'realty') && 'form__input-number-six') || ((polis == 'covid' || polis == 'health' || polis == 'assistans') && 'form__input-number-five') || 'form__input-number-seven'} form__input-question`}>
                                            Інше
                                        </h2>
                                    </div>
                                    <div class="form__input-inner">
                                        <div class="form__input-item">
                                            <p class="form__input-question">
                                                Коментарі або запитання
                                            </p>
                                            <Input className='form__input-textarea' name='commentsOrQuestions' type="text" placeholder='Введіть текст' />
                                        </div>
                                    </div>
                                </div>







                                <div class="form__accept">
                                    <input type="checkbox" name="" id="" />
                                    <p>Я приймаю умови <span>договору публічної оферти polisosago.kiev.ua</span>, підтверджую
                                        достовірність
                                        всіх даних.</p>
                                </div>
                                <div class="form__pay">
                                    <div>
                                        <p class="form__pay-text"><span>Разом: {polisSale}₴</span><br />Кнопка веде до сторінки оплати, де
                                            можна перевірити всі данні
                                            та сплатити поліс</p>
                                        <Button funcNextComponent={useFuncNextComponent} text='Далее' />
                                    </div>
                                    <p class="form__pay-subtext">Перевірте свої данні. Після реєстрації ми не зможемо нічого
                                        поміняти.<br />
                                        Доведеться їхати в
                                        страхову компанію</p>
                                </div>
                            </div>
                            <PolisForm polis={polis} polisType={polisType} sizeComponent={false} polisName={polisName} polisSale={polisSale} polisImg={polisImg} polisFranschiza={polisFranschiza} polisDate={polisDate} polisWay={polisWay} polisPeople={polisPeople} polisPurpose={polisPurpose} polisTypeAuto={polisTypeAuto} polisVAuto={polisVAuto} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
})