import React from 'react';
import "./Header.css"
import SearchInput from "../SearchBar/SearchInput.jsx";
import {Bell,Filter} from "lucide-react"
import BestDestinationList from "../Card/BestDestinationList.jsx";
import DestinationCard from "../Card/DestinationCard.jsx";
import JoinCard from "../Card/JoinCard.jsx";

import cardImage1 from "../../assets/images/Mount climbing.png"
import cardImage2 from "../../assets/images/Night camping.png"
import cardImage3 from "../../assets/images/Mount climbing2.png"

import destinationCardImg1 from "../../assets/images/Green wood forest.png";
import destinationCardImg2 from "../../assets/images/Green forest Camp.png";
import destinationCardImg3 from "../../assets/images/Desert Festival.png";

const Header = () => {
    return(
        <div className={"header-main"}>
            <div className={"header-border"}>
                <div className={"top-section"}>
                    <div>
                        <h1>Hello, Jemmy 👋🏻</h1>
                        <p>Welcome back and explore the world</p>
                    </div>
                    <div className={"right-top-section"}>
                        <SearchInput/>
                        <div className={"notification-section"}>
                            <span>4</span>
                            <Bell color={"gray"}/>
                        </div>
                    </div>
                </div>
                <div className={"top-card-section"}>
                    <DestinationCard img={cardImage1} main_Text={"Mount climbing"} location={"Green Mountain"}/>
                    <DestinationCard img={cardImage2} main_Text={"Night camping"} location={"Lightning lake"}/>
                    <DestinationCard img={cardImage3} main_Text={"Mount climbing"} location={"Green Mountain"}/>
                </div>
                <div className={"bottom-section"}>
                    <div className={"bottom-left-section"}>
                        <div className={"bottom-left-container"}>
                            <div>
                                <h3>Best Destination 🌈</h3>
                                <p>100 Destination found</p>
                            </div>
                            <button>
                                <Filter size={15}  className={"filter-icon"}/>
                                <span>Filters</span>
                            </button>
                        </div>
                        <div className={"best-destination-list"}>
                            <BestDestinationList img={destinationCardImg1} location={"Telangana"} main_Text={"Green wood forest"}/>
                            <BestDestinationList img={destinationCardImg2} location={"Channai"} main_Text={"Green forest Camp"}/>
                            <BestDestinationList img={destinationCardImg3} location={"Gujarat"} main_Text={"Desert Festival"}/>
                        </div>
                    </div>
                    <JoinCard/>
                </div>
            </div>
        </div>
    )
}

export default Header;