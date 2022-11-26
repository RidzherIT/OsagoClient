import React, { useContext, useEffect } from "react";
import { Context } from "..";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import pdfIcon from '../img/utils/pdfIcon.svg';
import Garant from "../components/Garant";
import Product from "../components/Product";
import infoBg5 from '../img/info/infoBg5.jpg';
export default observer(function Covid() {
    const navigate = useNavigate();
    const polis = 'covid';
    const polisTitle = 'COVID';
    const polisType = 'COVID';
    const titleCovid = <>Страхование<br /> от Короновируса.<br />Защита от последствий<br /><span> COVID - 19</span></>;
    const data = {
        polis,
        polisType,
        polisTitle
    }
    const { store } = useContext(Context);
    useEffect(() => {
        store.setDataPolis(data);
    }, [])
    return (
        <>
            <Product img={infoBg5} title={titleCovid} />
            <section class="covid">
                <div class="container">
                    <div class="covid__inner">
                        <div class="universal__request">
                            <div class="wrapper-gradient">
                                <div class="universal__request-pdf">
                                    <p><span>это электронный полис</span><br />доставляется на электронную почту или в Вайбер,
                                        Телеграм</p>
                                    <img src={pdfIcon} alt="" />
                                </div>
                            </div>
                            <div class="universal__request-btns">
                                <p>Напишите нам в <span>Вайбер</span><br />или <span>заполните заявку</span> на сайте</p>
                                <div class="universal__request-links">
                                    <a href="#">Viber</a>
                                    <a onClick={() => navigate('/fullPolis')} href="#">Подать заявку</a>
                                </div>
                            </div>
                        </div>
                        <div class="universal__content">
                            <h2 class="universal__subtitle">
                                Загальні <span>умови</span>
                            </h2>
                            <p>В один договір можна включити до 5 осіб, страхуємо від 0 до 65 повних років, дієздатних фізичних
                                осіб, що не є
                                інвалідами 1,2 групи та не перебувають на будь-якому диспансерному обліку та не є працівниками
                                медичних закладів
                                будь-якої форми власності (лікарями, фельдшерами, медичним персоналом, супутнім персоналом для
                                медичних
                                працівників тощо).</p>
                        </div>
                    </div>
                </div>
            </section>
            <Garant />
        </>
    )
})