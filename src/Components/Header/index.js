import React, {useState} from "react";
import './index.css'
import img from '../../Assets/img/netflix.jpg'

export default function padrao({black}){
    return(
        <header className = {black ? 'black': ''}>
            <div className="header--logo">
                <a href="/">
                    <img src= {img} alt="logo netflix"/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src= 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt="logo netflix"/>
                </a>
            </div>
        </header>
    )
}
