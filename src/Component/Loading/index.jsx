import React from "react";
import './style.sass'
export const Loading = () => {
    return (
        <>
            <div class="about">
                <a class="bg_links social portfolio" href="https://www.rafaelalucas.com" target="_blank">
                    <span class="icon"></span>
                </a>
                <a class="bg_links social dribbble" href="https://dribbble.com/rafaelalucas" target="_blank">
                    <span class="icon"></span>
                </a>
                <a class="bg_links social linkedin" href="https://www.linkedin.com/in/rafaelalucas/" target="_blank">
                    <span class="icon"></span>
                </a>
                <a class="bg_links logo"></a>
            </div>

            <div class="content">
                <div class="loading">
                    <p>loading</p>
                    <span></span>
                </div>
            </div>
        </>
    )
}