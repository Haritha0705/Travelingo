import React from 'react';
import "./JoinCard.css";
import manImg from "../../assets/images/man.png";

const JoinCard = () => {
    return (
        <div className="join-main">

            <div className="img-back"></div>

            <img src={manImg} alt="Man" className="join-img" />

            <h3>Let’s Explore <br /> the beauty</h3>

            <p>Get special offers & news</p>

            <button className="join-btn">Join Now</button>

        </div>
    );
};

export default JoinCard;
