import React from "react";
import garartIcon1 from '../img/garant/garantIcon1.svg';
import garartIcon2 from '../img/garant/garantIcon2.svg';
import garartIcon3 from '../img/garant/garantIcon3.svg';
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function GarantUs() {
    const navigate = useNavigate();
    return (
        <>
            <div className="about__garant">
                <div className="container">
                    <div className="about__garant-inner">
                        <h2 className="about__garant-title">
                            Наши гарантии
                        </h2>
                        <div className="about__garant-content">
                            <div className="about__garant-item">
                                <div><img src={garartIcon1} alt="" /></div>
                                <p>Юридическая гарантия</p>
                                <Button func={() => navigate('/error')} text='Получить' />
                            </div>
                            <div className="about__garant-item">
                                <div><img src={garartIcon2} alt="" /></div>
                                <p>Публичный договор</p>
                                <Button func={() => navigate('/error')} text='Читать' />
                            </div>
                            <div className="about__garant-item">
                                <div><img src={garartIcon3} alt="" /></div>
                                <p>ЗАКОН про ОСАГО</p>
                                <Button func={() => navigate('/error')} text='Читать' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}