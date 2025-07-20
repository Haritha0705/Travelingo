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
                <div>
                    <div>
                        <div>
                            <h3>Best Destination 🌈</h3>
                            <p>100 Destination found</p>
                        </div>
                        <button>
                            <Filter/>
                            <span>Filters</span>
                        </button>
                    </div>
                    <div>
                        <BestDestinationList/>
                        <BestDestinationList/>
                        <BestDestinationList/>
                    </div>
                    <JoinCard/>
                </div>
            </div>
        </div>
    )
}

export default Header;