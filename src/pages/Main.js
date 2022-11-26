import React from "react";
import Product from "../components/Product";
import infoBg1 from '../img/info/infoBg1.jpg';
import infoBg2 from '../img/info/infoBg2.jpg';
import infoBg3 from '../img/info/infoBg3.jpg';
import infoBg4 from '../img/info/infoBg4.jpg';
import infoBg5 from '../img/info/infoBg5.jpg';
import infoBg6 from '../img/info/infoBg6.jpg';
import infoBg7 from '../img/info/infoBg7.jpg';
import infoBg8 from '../img/info/infoBg8.jpg';
import infoBg9 from '../img/info/infoBg9.jpg';
import infoBg10 from '../img/info/infoBg10.jpg';
import Garant from "../components/Garant";
import { useNavigate } from "react-router-dom";
export default function Main() {
    const titleOSAGO = <>Обязательное<br /> страхование ОСАГО<br /> или<span> «Автогражданка»</span></>;
    const titleGreenCard = <>Зеленая карта.<br /> Cтрахование<br />при поездке<br /> <span> за границу на авто</span></>;
    const titleWeapon = <>Страхование<br /> ответственности<br />владельцев<br /><span> оружия</span></>;
    const titleRealty = <>Страхование недвижимого<br /> имущества:<br /><span> квартиры, дома, дачи</span></>;
    const titleCovid = <>Страхование<br /> от Короновируса.<br />Защита от последствий<br /><span> COVID - 19</span></>;
    const titleCASKO = <>Страхование<br /> от полного комплекса<br />рисков либо их части<br /><span>КАСКО</span></>;
    const titleTourists = <>Страхование<br /> туристов для выезда<br /><span> за границу</span></>;
    const titleAssistans = <>Страхование<br /> в случае наступления<br />поломки автомобиля<br /><span> Ассистанс</span></>;
    const titleMedicine = <>Добровольное<br /> медицинское страхование<br /><span> здоровья</span> на случай<br /> болезни</>;
    const titleNotorius = <>Cтрахование<br /> профессиональной<br /> ответственности<br /> <span>нотариусов</span></>;
    const navigate = useNavigate();
    return (
        <>
            <Product func={() => navigate('/osago')} img={infoBg1} title={titleOSAGO} />
            <Product func={() => navigate('/greencard')} img={infoBg2} title={titleGreenCard} />
            <Product func={() => navigate('/weapon')} img={infoBg3} title={titleWeapon} />
            <Product func={() => navigate('/realty')} img={infoBg4} title={titleRealty} />
            <Product func={() => navigate('/covid')} img={infoBg5} title={titleCovid} />
            <Product func={() => navigate('/casco')} img={infoBg6} title={titleCASKO} />
            <Product func={() => navigate('/tourists')} img={infoBg7} title={titleTourists} />
            <Product func={() => navigate('/assistans')} img={infoBg8} title={titleAssistans} />
            <Product func={() => navigate('/health')} img={infoBg9} title={titleMedicine} />
            <Product func={() => navigate('/notary')} img={infoBg10} title={titleNotorius} />
            <Garant />
        </>
    )
}