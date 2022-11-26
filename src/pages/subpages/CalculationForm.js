import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Context } from '../..';
import Company from '../../components/Company';
import calculationShield from '../../img/calculation/calculationShield.svg';
import companyARX from '../../img/company/companyARX.svg';
import CalcInput from '../../ui/CalcInput';
import Checkbox from '../../ui/Checkbox';
import Select from '../../ui/Select';
export default observer(function CalculationForm({ funcNextComponent, polis, polisTitle, polisType }) {
    const { store } = useContext(Context);
    const [companyBool, setCompanyBool] = useState(false);
    const sendData = () => {
        store.setCalcBool(true)
        setCompanyBool(true);
    }

    return (
        <>
            <div class="calculation">
                <div class="container">
                    <div class="calculation__inner">
                        <h1>
                            Полис {polisTitle} <span>онлайн</span>
                        </h1>

                        <div class="calculation__calc">
                            <div class="calculation__calc-inputs">
                                {(store.dataPolis.polis == 'casco' || store.dataPolis.polis == 'weapon' || store.dataPolis.polis == 'notary' || store.dataPolis.polis == 'realty' || store.dataPolis.polis == 'covid' || store.dataPolis.polis == 'health' || store.dataPolis.polis == 'assistans') && <p className='calculation__calc-inputs__info'>Информация для рассчета не требуется!</p>}
                                <div class="calculation__input-select">
                                    {(store.dataPolis.polis == 'osago' || store.dataPolis.polis == 'dgo' || store.dataPolis.polis == 'greencard') && <>
                                        <Select type={'select'} name={'typeAuto'} title={'Тип автомобиля'} options={['Легковой автомобиль', 'Грузовой автомобиль', 'Автобус', 'Прицеп', 'Мотоцикл/Мотороллер']} />
                                        {store.dataPolis.polis == 'osago' && <Select type={'select'} name={'volumeAuto'} title={'Объем двигателя'} options={['До 1600 см3', '1601 - 2000 см3', '2001 - 3000 см3', 'Более 3000 см3', 'Электромобиль (исключительно с силовым электродвигателем)']} />}
                                    </>}
                                    {store.dataPolis.polis == 'greencard' && <>
                                        <Select type={'select'} name={'regionStay'} title={'Регион пребывания'} options={['Европа (вся система)', 'Страны СНГ (Россия, Беларусь, Молдова, Азербайджан)']} />
                                        <Select type={'select'} name={'dataStay'} title={'Срок пребывания'} options={['15 дней', '1 месяц', '2 месяца', '3 месяца', '4 месяца', '5 месяцев', '6 месяцев', '7 месяцев', '8 месяцев', '9 месяцев', '10 месяцев', '11 месяцев', '1 год']} />
                                    </>}
                                    {store.dataPolis.polis == 'tourists' && <Select type={'select'} name={'direction'} title={'Направление'} options={['Шенген', 'СНГ', 'Весь мир']} />}
                                </div>
                                <div class="calculation__input-checkbox">
                                    {store.dataPolis.polis == 'osago' && <>
                                        <Checkbox name={'pension'} question={false} text={'Пенсионное…'} />
                                        <Checkbox name={'useTaxi'} question={false} text={'Используется в такси'} />
                                        <Checkbox name={'autoAlienNumber'} question={false} text={'Авто на иностранных номерах'} />
                                        <Checkbox name={'needThis'} question={true} text={'Пользуется спросом'} />
                                        <Checkbox name={'settlement'} question={true} text={'Прямое урегулирование'} />
                                    </>}
                                    {store.dataPolis.polis == 'tourists' && <Checkbox name={'yearPolis'} question={true} text={'Годовой полис'} />}
                                </div>
                                <div class="calculation__input-text">
                                    {(store.dataPolis.polis == 'osago' || store.dataPolis.polis == 'dgo') && <>
                                        <CalcInput name={'registration'} text={'Прописка по ТП'} placeholder={'Введите город, напр., Киев'} question={true} />
                                        {store.dataPolis.polis == 'osago' && <CalcInput name={'franschiza'} text={'Франшиза'} placeholder={'Все'} question={true} />}
                                    </>}
                                    {store.dataPolis.polis == 'tourists' && <>
                                        <CalcInput name={'dateStart'} text={'Дата начала'} placeholder={'04.01.2022'} question={false} />
                                        <CalcInput name={'dateEnd'} text={'Дата окончания'} placeholder={'14.01.2022'} question={true} />
                                        <CalcInput name={'valueTourists'} text={'Кол-во туристов'} placeholder={'3 человека'} question={false} />
                                        <CalcInput name={'purpose'} text={'Цель поездки'} placeholder={'Туризм'} question={false} />
                                    </>}
                                </div>
                            </div>
                            <button onClick={sendData} className="info__item-content__btn">Сделать новый рассчет</button>
                        </div>





                        <h2>
                            Выберите компанию и нажмите <span>кнопку «Купить»</span>
                        </h2>
                        <div class="wrapper-gradient">
                            <div class="calculation__shield-content">
                                <p>
                                    0%
                                </p>
                                <p>
                                    Выбирайте полис с <span>нулевой франшизой</span><br />
                                    Чтоб в случае ДТП никому и ничего не доплачивать!
                                </p>
                                <img src={calculationShield} alt="" />
                            </div>
                        </div>
                        {companyBool && <div class="calculation__companies">
                            <p class="calculation__value-companies">
                                Найдено {store.company[polis].length} предложений
                            </p>
                            <div class="calculation__promo">
                                <img src={companyARX} alt="" />
                                <div class="calculation__promo-content">
                                    <div class="calculation__promo-content__title">
                                        <p>АКЦИОНОЕ ПРЕДЛОЖЕНИЕ ДНЯ</p>
                                        <p>- 250₴</p>
                                    </div>
                                    <p>Увеличь лимит ответственности на миллион <span>всего за 460₴</span> от ТОПовой компании
                                        ARX
                                    </p>
                                </div>
                            </div>
                            <ul>
                                {store.company[polis].map(elem => <Company key={elem.nameCompany} funcNextComponent={funcNextComponent} polis={polis} polisType={polisType} nameCompany={elem.nameCompany} covid={elem.covid} imgCompany={elem.img} franschiza={elem.franschiza} fullPrice={elem.fullPrice} currentPrice={elem.currentPrice} discountPrice={elem.discountPrice} />)}
                            </ul>
                        </div>}
                    </div>
                </div>
            </div>
        </>
    )
})