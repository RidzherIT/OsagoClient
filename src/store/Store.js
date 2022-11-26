import { makeAutoObservable } from 'mobx'
import blogItem1 from '../img/blog/blogItem1.jpg';
import blogItem2 from '../img/blog/blogItem2.jpg';
import blogItem3 from '../img/blog/blogItem3.jpg';
import blogItem4 from '../img/blog/blogItem4.jpg';
import blogItem5 from '../img/blog/blogItem5.jpg';
import blogItem6 from '../img/blog/blogItem6.jpg';
import blogItem7 from '../img/blog/blogItem7.jpg';
import blogItem8 from '../img/blog/blogItem8.jpg';
import blogItem9 from '../img/blog/blogItem9.jpg';
import companyAlfa from '../img/company/companyAlfa.svg';
import companyBroke from '../img/company/companyBroke.svg';
import companyCredo from '../img/company/companyCredo.svg';
import companyEtalon from '../img/company/companyEtalon.svg';
import companyEuro from '../img/company/companyEuro.svg';
import companyInter from '../img/company/companyInter.svg';
import companyObereg from '../img/company/companyObereg.svg';
import companyOneClick from '../img/company/companyOneClick.svg';
import companyUk from '../img/company/companyUk.svg';
import companyUltra from '../img/company/companyUltra.svg';
import companyUnivers from '../img/company/companyUnivers.svg';
import companyUsg from '../img/company/companyUsg.svg';
import companyUSS from '../img/company/companyUSS.svg';
import companyVuso from '../img/company/companyVuso.svg';
export default class Store {
    _isInfoInputs = [];
    _isBoolean = false;
    constructor() {
        this._dataCompany = {};
        this._company = {
            osago: [
                {
                    fullPrice: '1319',
                    discountPrice: '321',
                    currentPrice: '998',
                    franschiza: '2000',
                    nameCompany: 'КРЕДО',
                    img: companyCredo
                },
                {
                    fullPrice: '1319',
                    discountPrice: '321',
                    currentPrice: '998',
                    franschiza: '2000',
                    nameCompany: 'ПЗУ Украина',
                    img: companyUk
                },
                {
                    fullPrice: '1319',
                    discountPrice: '321',
                    currentPrice: '998',
                    franschiza: '2000',
                    nameCompany: 'Альфа-Гарант',
                    img: companyAlfa
                },
                {
                    fullPrice: '1319',
                    discountPrice: '321',
                    currentPrice: '998',
                    franschiza: '2000',
                    nameCompany: 'УСС',
                    img: companyUSS
                },
                {
                    fullPrice: '1319',
                    discountPrice: '321',
                    currentPrice: '998',
                    franschiza: '2000',
                    nameCompany: 'Євроінс Україна',
                    img: companyEuro
                },
                {
                    fullPrice: '1319',
                    discountPrice: '321',
                    currentPrice: '998',
                    franschiza: '2000',
                    nameCompany: 'OneClick',
                    img: companyOneClick
                },
                {
                    fullPrice: '1319',
                    discountPrice: '321',
                    currentPrice: '998',
                    franschiza: '2000',
                    nameCompany: 'VUSO',
                    img: companyVuso
                },

            ],
            greencard: [
                {
                    fullPrice: '1319',
                    discountPrice: '321',
                    currentPrice: '998',
                    franschiza: '2000',
                    nameCompany: 'Украинская страховая группа',
                    img: companyUsg
                },
            ],
            tourists: [
                {
                    fullPrice: '1319',
                    discountPrice: '321',
                    currentPrice: '998',
                    franschiza: '0',
                    nameCompany: 'ОБЕРИГ',
                    img: companyObereg,
                    covid: true
                },
                {
                    fullPrice: '1319',
                    discountPrice: '321',
                    currentPrice: '998',
                    franschiza: '0',
                    nameCompany: 'ПЗУ Украина',
                    img: companyUk,
                    covid: true
                },
                {
                    fullPrice: '1319',
                    discountPrice: '321',
                    currentPrice: '998',
                    franschiza: '0',
                    nameCompany: 'Альфа-Гарант',
                    img: companyAlfa,
                    covid: true
                },
                {
                    fullPrice: '1319',
                    discountPrice: '321',
                    currentPrice: '998',
                    franschiza: '0',
                    nameCompany: 'УСС',
                    img: companyUSS,
                    covid: false
                },
                {
                    fullPrice: '1319',
                    discountPrice: '321',
                    currentPrice: '998',
                    franschiza: '0',
                    nameCompany: '«Євроінс Україна»',
                    img: companyEuro,
                    covid: false
                },
                {
                    fullPrice: '1319',
                    discountPrice: '321',
                    currentPrice: '998',
                    franschiza: '0',
                    nameCompany: 'OneClick',
                    img: companyOneClick,
                    covid: true
                },
                {
                    fullPrice: '1319',
                    discountPrice: '321',
                    currentPrice: '998',
                    franschiza: '0',
                    nameCompany: 'VUSO',
                    img: companyVuso,
                    covid: true
                },
            ],
            other: [
                {
                    nameCompany: 'UNIVERSALNA',
                    img: companyUnivers
                },
                {
                    nameCompany: 'ULTRA',
                    img: companyUltra
                },
                {
                    nameCompany: 'Эталон',
                    img: companyEtalon
                },
                {
                    nameCompany: 'Оберіг',
                    img: companyObereg
                },
                {
                    nameCompany: 'Интер-Полис',
                    img: companyInter
                },
                {
                    nameCompany: 'Брокбизнес',
                    img: companyBroke
                },
            ]
        }
        this._blogItems = [
            {
                id: 1,
                img: blogItem1,
                text: 'Проверить полис ОСАГО — 4 способа',
            },
            {
                id: 2,
                img: blogItem2,
                text: 'Что нужно знать о (Зеленой Карте) на авто',
            },
            {
                id: 3,
                img: blogItem3,
                text: 'Зеленая карта на авто онлайн в Украине и ее преимущества',
            },
            {
                id: 4,
                img: blogItem4,
                text: 'Часто задаваемые вопросы и ответы на них',
            },
            {
                id: 5,
                img: blogItem5,
                text: 'Сколько стоит страховка на авто (в Украине)',
            },
            {
                id: 6,
                img: blogItem6,
                text: 'Скидка на полисы страховых компаний Украины',
            },
            {
                id: 7,
                img: blogItem7,
                text: 'Купить страховку можно находясь в любом городе',
            },
            {
                id: 8,
                img: blogItem8,
                text: 'Что выбрать, электронный полис ОСАГО или бумажный?',
            },
            {
                id: 9,
                img: blogItem9,
                text: 'Чтоб оформить полис на авто, нужно ...',
            },
            {
                id: 10,
                img: blogItem1,
                text: 'Проверить полис ОСАГО — 4 способа',
            },
            {
                id: 11,
                img: blogItem2,
                text: 'Что нужно знать о (Зеленой Карте) на авто',
            },
            {
                id: 12,
                img: blogItem3,
                text: 'Зеленая карта на авто онлайн в Украине и ее преимущества',
            },
        ];
        this._calcInfo = [];
        this._calcBool = false;
        this._dataPolis = {};
        makeAutoObservable(this);
    }
    get blogItems() {
        return this._blogItems;
    }
    setBlogItems(blogItem) {
        this._blogItems = [...this._blogItems, blogItem];
    }
    get isBoolean() {
        return this._isBoolean;
    }
    setIsBoolean(bool) {
        this._isBoolean = bool;
    }
    get isInfoInputs() {
        return this._isInfoInputs;
    }
    setIsInfoInputs(data) {
        this._isInfoInputs = [...this._isInfoInputs, data];
    }
    get company() {
        return this._company;
    }
    setCompany(data, polis) {
        this._company[polis] = [...this._company[polis], data];
    }
    get dataCompany() {
        return this._dataCompany;
    }
    setDataCompany(data) {
        this._dataCompany = { ...this._dataCompany, ...data };
    }
    get calcInfo() {
        return this._calcInfo;
    }
    setCalcInfo(data) {
        this._calcInfo = [...this._calcInfo, data];
    }
    get calcBool() {
        return this._calcBool;
    }
    setCalcBool(bool) {
        this._calcBool = bool;
    }
    get dataPolis() {
        return this._dataPolis;
    }
    setDataPolis(data) {
        this._dataPolis = { ...this._dataPolis, ...data };
    }
}