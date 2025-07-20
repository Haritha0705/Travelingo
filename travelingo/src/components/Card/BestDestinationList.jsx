import React from 'react';
import "./BestDestinationList.css"
import {LocateFixed,Star} from "lucide-react"

const BestDestinationList = ({img,main_Text,location}) => {
    return(
        <div className={"destination-card-main"}>
            <div className={"left-side-card"}>
                <div className={"img-container"}>
                    <img src={img} alt={""} className={"destination-card-img"}/>
                </div>
                <div>
                    <h5>{main_Text}</h5>
                    <div className={"card-middle"}>
                        <div>
                            <LocateFixed size={14}/>
                            <span>{location}</span>
                        </div>
                        <div>
                            <Star size={14}/>
                            <span>4.8</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"price"}>
                <p><span>₹999/</span>night</p>
            </div>
        </div>
    )
}

export default BestDestinationList;