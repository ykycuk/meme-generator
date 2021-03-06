import React from "react";
import TrollFace from "../img/trollFace.png";

export default function Header() {
    return (
        <header className="header">
            <img 
                src={TrollFace} 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Love</h4>
        </header>
    )
}