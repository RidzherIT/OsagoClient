import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "..";

export default observer(
    function BlogOne() {
        const arrayPath = window.location.pathname.split('/');
        const id = arrayPath[arrayPath.length - 1];
        const { store } = useContext(Context);
        const [data, setData] = useState({
            img: '',
            text: ''
        })
        useEffect(() => {
            const elem = store.blogItems.find(elem => elem.id == id);
            setData({ ...data, img: elem.img, text: elem.text })
        }, [])
        return (
            <>
                <section class="blog-item">
                    <div class="container">
                        <div class="blog-item__inner">
                            <div class="blog-item__left">
                                <h1 class="blog-item__title">
                                    {data.text}
                                </h1>
                                <img src={data.img} alt="" />
                                <p>Здесь должен быть текст. Либо текст подгруженный с Backend, либо отдельная страница(полная)
                                    предоставленная заказчиком/дизайнером.<br />
                                    Также похожие статьи должны подгружаться лимитированно (возможно рандомно) из общего
                                    хранилища(mobX/Redux).
                                </p>
                            </div>
                            <div class="blog-item__right">
                                <h2>
                                    Похожие статьи
                                </h2>
                                <ul>
                                    <li>Страховой Случай За Границей</li>
                                    <li>Онлайн Туристическая Страховка</li>
                                    <li>Коронавирус в путешествии: как
                                        защититься от CoVID-19?</li>
                                    <li>Путешествие по Европе 2022
                                    </li>
                                    <li>Когда запустят электронную
                                        Зеленую карту</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

            </>
        )
    }
)