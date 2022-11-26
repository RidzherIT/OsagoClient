import React from "react";

export default function Comment({ text, author, polis }) {
    return (
        <>
            <div class="comment">
                <p class="comment__text">
                    {text}
                </p>
                <p class="comment__client">
                    {author}
                </p>
                <p class="comment__polis">
                    {polis}
                </p>
            </div>
        </>
    )
}