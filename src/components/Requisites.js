import React, { useEffect } from "react";

export default function Requisites({ children }) {
    useEffect(() => {
        const deliveryWidth = parseInt(676) * 0.4;
        const titles = document.querySelectorAll('.delivery__background-title');
        const texts = document.querySelectorAll('.delivery__background-text');
        let widthTitle = [];
        for (let i = 0; i < titles.length; i++) widthTitle.push(deliveryWidth - parseInt(getComputedStyle(titles[i]).width));
        widthTitle = widthTitle.map(elem => 30 + +elem.toFixed(0));
        for (let i = 0; i < texts.length; i++) texts[i].style.paddingLeft = widthTitle[i] + 'px';
    })
    return (
        <>
            <div className="delivery__background">
                <div>
                    <p className="delivery__background-title">Наименование:</p>
                    <p className="delivery__background-text">ФОП Сцибан В. Б.</p>
                </div>
                <div>
                    <p className="delivery__background-title">Банк получатель:</p>
                    <p className="delivery__background-text">АТ КБ "ПРИВАТБАНК"</p>
                </div>
                <div>
                    <p className="delivery__background-title">Код ЕГРПОУ (ИИН):</p>
                    <p className="delivery__background-text">2948602017</p>
                </div>
                <div>
                    <p className="delivery__background-title">Код Банка МФО:</p>
                    <p className="delivery__background-text">305299</p>
                </div>
                <div>
                    <p className="delivery__background-title">IBAN</p>
                    <p className="delivery__background-text">UA583052990000026001050510809</p>
                </div>
                {children}
            </div>
        </>
    )
}