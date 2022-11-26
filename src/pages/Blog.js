import React, { useContext, useEffect, useState } from 'react';
import Garant from '../components/Garant';
import BlogItem from '../components/BlogItem';
import { observer } from 'mobx-react-lite';
import { Context } from '..';

export default observer(function Blog() {
    const [page, setPage] = useState({
        start: 0,
        end: 9,
        limit: 9
    });

    const { store } = useContext(Context);

    useEffect(() => {
        function paginationFunc(pages, limit) {
            function createPage(num) {
                let elem = document.createElement('div');
                elem.className = 'pagination__item';
                elem.innerHTML = num;
                let acc = +elem.innerHTML.trim();
                elem.addEventListener('click', function () {
                    let accEnd = acc * page.limit;
                    let accStart = accEnd - page.limit;
                    setPage({ ...page, start: accStart, end: accEnd })
                })
                return elem;
            }
            let active = 0; // 35
            function generatePages() {

                const pagination = document.querySelector('.pagination-items');
                pagination.innerHTML = null;
                for (let i = active + 1; i <= (limit + active) && i <= pages; i++) {
                    if (i > pages) return;
                    let elem = createPage(i);
                    if (i - 2 < active) elem.classList.add('active-pag');
                    elem.addEventListener('click', (e) => {
                        for (let i = 0; i < pagination.children.length; i++) {
                            if (pagination.children[i].classList.contains('active-pag')) {
                                pagination.children[i].classList.remove('active-pag');
                            }
                        }
                        e.target.classList.add('active-pag');
                    })
                    pagination.append(elem);
                }
            }
            const right = document.querySelector('.pag__btns-right');
            const left = document.querySelector('.pag__btns-left');
            const btns = document.querySelector('.pagination-wrapper');
            btns.addEventListener('click', function (e) {
                let check = document.querySelector('.pagination-items').children;
                check = +check[check.length - 1].innerHTML;
                if (e.target === right) {
                    if (check === pages) return;
                    active = check;
                }
                if (e.target === left) {
                    if (check <= limit) return;
                    active = active - limit;
                }
                if (e.target === left || e.target === right) {
                    if (active !== pages) {
                        for (let i = 0; i < check.length; i++) {
                            if (check[i].classList.contains('active-pag')) {
                                check[i].classList.remove('active-pag');
                            }
                        }
                    }
                    generatePages()
                }
            })
            generatePages();
        }
        paginationFunc(Math.ceil((store.blogItems.length - 1) / 9), 6);
    })
    return (
        <>
            <section class="blog">
                <div class="container">
                    <div class="blog__inner">
                        <h1 class="blog__title">
                            Блог
                        </h1>
                        <div class="blog__content">
                            <div class="blog__content">
                                {store.blogItems.map((elem, i) => {
                                    if (i >= page.start && i < page.end) return <><BlogItem key={elem.id} id={elem.id} img={elem.img} text={elem.text} /></>
                                })}
                            </div>
                        </div>
                    </div>
                    <div class="pagination">
                        <div class="container">
                            <div class="pagination__inner">
                                <div class="pagination-wrapper">
                                    <div class="pag__btns-left">←</div>
                                    <div class="pagination-items">

                                    </div>
                                    <div class="pag__btns-right">→</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Garant />
            </section>
        </>
    )
})