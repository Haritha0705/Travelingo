import React from 'react';
import "./ScheduleCard.css"
import {Calendar} from "lucide-react";

import person1 from "../../assets/images/person1.jpg"
import person2 from "../../assets/images/person2.jpg"
import person3 from "../../assets/images/person3.jpg"


const ScheduleCard = ({img,title}) => {
    return(
        <div className={"schedule-card-main"}>
            <div className={"img-schedule-container"}>
                <img src={img} alt={""} className={"schedule-card-img"}/>
            </div>
            <div>
                <h4>{title}</h4>
                <div className={"schedule-card-middle"}>
                    <Calendar size={20}/>
                    <p>20 may - 23 may </p>
                </div>
                <div className={"peoples-bar"}>
                    <div className={"img-people-container"}>
                        <img src={person1} alt={""} className={"person-img1"}/>
                        <img src={person2} alt={""} className={"person-img2"}/>
                        <img src={person3} alt={""} className={"person-img3"}/>
                    </div>
                    <span>2+</span>
                </div>
            </div>
        </div>
    )
}

export default ScheduleCard;