import React from "react";

export default function Button({ func, text }) {
    return (
        <>
            <a onClick={func} className="global__button" href="#">{text}</a>
        </>
    )
}