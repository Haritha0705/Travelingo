import React from 'react';
import "./Dashboard.css"
import Header from "../../components/Header/Header.jsx";
import {LucideChevronDown,Ellipsis} from "lucide-react"

import userImg from "../../assets/images/user.png"
import Calendar from "../../components/Calendar/Calendar.jsx";
import ScheduleCard from "../../components/Schedule/ScheduleCard.jsx";

import ScheduleCardImg1 from "../../assets/images/Crocked Forest.png"
import ScheduleCardImg2 from "../../assets/images/Fem Waterfall.png"
import ScheduleCardImg3 from "../../assets/images/Night Camping2.png"

const DashBoard = () => {
    return(
        <div className={"dashBoard-main-container"}>

            <Header/>

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
                <div className={"bottom-dashboard-section"}>

                    <Calendar/>

                    <div>

                        <div className={"schedule-card"}>
                            <h4>My Schedule</h4>
                            <Ellipsis size={30} color={"gray"}/>
                        </div>

                        <div className={"ScheduleCard-container"}>
                            <ScheduleCard img={ScheduleCardImg1} title={"Crocked Forest"}/>
                            <ScheduleCard img={ScheduleCardImg2} title={"Fem Waterfall"}/>
                            <ScheduleCard img={ScheduleCardImg3} title={"Night Camping"}/>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default DashBoard;