import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import Reviews from "./Reviews";

export default function OurRecommend() {
    const [reviews, setReviews] = useState([
        {
            id: 1,
            reviews: 'Отзывы в Facebook',
            score: '5.0',
            fromScore: '5'
        },
        {
            id: 2,
            reviews: 'Отзывы в Google',
            score: '4.9',
            fromScore: '5'
        },
        {
            id: 3,
            reviews: 'Вайбер',
            score: '5.0',
            fromScore: '5'
        },
        {
            id: 4,
            reviews: 'Телеграм',
            score: '5.0',
            fromScore: '5'
        }
    ])
    const [comment, setComment] = useState([
        {
            id: 1,
            text: `Отличная страховая !!! Случилось дтп не по моей вине, подъехал в страховую оценили ущерб, сказали сумму которую выплатят, меня все устроило и через 3 недели скинули на карту. Так держать, спасибо!`,
            author: 'Дмитрий Соколюк',
            polis: 'ОСАГО полис'
        },
        {
            id: 2,
            text: `Отличная страховая !!! Случилось дтп не по моей вине, подъехал в страховую оценили ущерб, сказали сумму которую выплатят, меня все устроило и через 3 недели скинули на карту. Так держать, спасибо!`,
            author: 'Дмитрий Соколюк',
            polis: 'ОСАГО полис'
        },
        {
            id: 3,
            text: `Отличная страховая !!! Случилось дтп не по моей вине, подъехал в страховую оценили ущерб, сказали сумму которую выплатят, меня все устроило и через 3 недели скинули на карту. Так держать, спасибо!`,
            author: 'Дмитрий Соколюк',
            polis: 'ОСАГО полис'
        },
        {
            id: 4,
            text: `Отличная страховая !!! Случилось дтп не по моей вине, подъехал в страховую оценили ущерб, сказали сумму которую выплатят, меня все устроило и через 3 недели скинули на карту. Так держать, спасибо!`,
            author: 'Дмитрий Соколюк',
            polis: 'ОСАГО полис'
        },
        {
            id: 5,
            text: `Отличная страховая !!! Случилось дтп не по моей вине, подъехал в страховую оценили ущерб, сказали сумму которую выплатят, меня все устроило и через 3 недели скинули на карту. Так держать, спасибо!`,
            author: 'Дмитрий Соколюк',
            polis: 'ОСАГО полис'
        },
        {
            id: 6,
            text: `Отличная страховая !!! Случилось дтп не по моей вине, подъехал в страховую оценили ущерб, сказали сумму которую выплатят, меня все устроило и через 3 недели скинули на карту. Так держать, спасибо!`,
            author: 'Дмитрий Соколюк',
            polis: 'ОСАГО полис'
        },
    ])
    useEffect(() => {
        function sliderFunc(margin, sliderParam, thumbParam, commentsParam, commentParam) {
            const slider = document.querySelector('.' + sliderParam);
            const thumb = document.querySelector('.' + thumbParam);
            const comments = document.querySelector('.' + commentsParam);
            const comment = document.querySelectorAll('.' + commentParam);
            thumb.addEventListener('mousedown', e => {
                window.ondragstart = () => {
                    return false;
                }
                let step = e.clientX - thumb.getBoundingClientRect().left;
                let size = (comment[0].offsetWidth * comment.length + (comment.length - 1) * margin) - comments.offsetWidth;
                let acc = size / (slider.offsetWidth - thumb.offsetWidth);
                console.log(size);
                function move(e) {
                    let stepMove = e.pageX - step - slider.getBoundingClientRect().left;
                    if (stepMove < 0) {
                        stepMove = 0;
                    }
                    let width = slider.offsetWidth - thumb.offsetWidth;
                    if (stepMove > width) {
                        stepMove = width;
                    }
                    comments.style.left = -stepMove * acc + 'px';
                    console.log(getComputedStyle(comments).left)
                    thumb.style.left = stepMove + 'px';
                }
                document.addEventListener('mousemove', move);
                document.addEventListener('mouseup', e => {
                    document.removeEventListener('mousemove', move);
                })
            })
        }
        sliderFunc(30, 'slider', 'thumb', 'slider-comments', 'comment');
    }, [comment])
    return (
        <>

            <div class="recommended">
                <h2 class="recommended__title">
                    Нас рекомендуют
                </h2>
                <p class="recommended__text">
                    Присоединяйтесь к честным отзывам, напишите в удобном Вам мессенджере
                </p>
                <div class="recommended__btns">
                    <ul style={{ margin: 0 }}>
                        {reviews.map(elem => <><Reviews key={elem.id} reviews={elem.reviews} score={elem.score} fromScore={elem.fromScore} /></>)}
                    </ul>
                </div>
            </div>
            <div class="slider-comments__wrapper">
                <div class="slider-comments">
                    {comment.map(elem => <Comment key={elem.id} text={elem.text} author={elem.author} polis={elem.polis} />)}
                </div>
            </div>
            <div class="container">
                <div class="slider">
                    <div class="thumb"></div>
                </div>
            </div>
        </>
    )
}