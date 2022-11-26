import React from "react";


export default function ({ reviews, score, fromScore }) {
    return (
        <>
            <li>
                <a>
                    <p>{reviews}</p>
                    <p><span>{score}</span>из {fromScore}</p>
                </a>
            </li>
        </>
    )
}