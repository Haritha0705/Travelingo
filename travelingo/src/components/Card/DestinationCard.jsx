import React from 'react';
import "./DestinationCard.css"
import {LocateFixedIcon,Star} from "lucide-react"

const DestinationCard = ({img,main_Text,location}) => {
    return(
        <div className="card-main">
            <img src={img} alt="cover" className="cover-img" />

            <div className="card-overlay">
                <div className="card-data">
                    <div className="location-info">
                        <p className="place-name">{main_Text}</p>
                        <div className="location-row">
                            <LocateFixedIcon size={16} />
                            <span>{location}</span>
                        </div>
                    </div>

                    <div className="rating">
                        <Star size={16} />
                        <span>4.8</span>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default DestinationCard;
