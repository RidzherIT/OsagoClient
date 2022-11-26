import React from "react";

export default function Button({ funcNextComponent, text }) {
    return (
        <>
            <a onClick={() => funcNextComponent(true)} href="#" className="info__item-content__btn">{text}</a>
        </>
    )
}