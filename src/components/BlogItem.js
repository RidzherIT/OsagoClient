import React from "react";
import { useNavigate } from 'react-router-dom'
export default function BlogItem({ id, img, text }) {
    let navigate = useNavigate();
    return (
        <>
            <div class="blog__content-item">
                <img src={img} alt="" />
                <div>
                    <p>
                        {text}
                    </p>
                    <a onClick={() => {
                        navigate(`/blog/${id}`);
                    }} >Читать далее</a>
                </div>
            </div>
        </>
    )
}