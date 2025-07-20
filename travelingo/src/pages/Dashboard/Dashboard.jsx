import React from 'react';
import "./Dashboard.css"
import Header from "../../components/Header/Header.jsx";
import {LucideChevronDown} from "lucide-react"

import userImg from "../../assets/images/user.png"
import Calendar from "../../components/Calendar/Calendar.jsx";

const DashBoard = () => {
    return(
        <div className={"dashBoard-main-container"}>
            <div className={"dashBoard-main-container-left"}>
                <Header/>
            </div>
            <div className={"dashBoard-main-container-right"}>
                <div className={"top-user-section"}>
                    <div className={"user-details"}>
                        <img src={userImg} alt={""} className={"profile-img"}/>
                        <div>
                            <h4>Jemmy Max</h4>
                            <span>Traveler Enthusiast</span>
                        </div>
                    </div>
                    <div className={"dropDown-button"}>
                        <LucideChevronDown/>
                    </div>
                </div>
                <Calendar/>
            </div>
        </div>
    )
}

export default DashBoard;