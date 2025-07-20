import React from 'react';
import "./Header.css"
import SearchInput from "../SearchBar/SearchInput.jsx";
import {Bell,Filter} from "lucide-react"
import BestDestinationList from "../Card/BestDestinationList.jsx";
import DestinationCard from "../Card/DestinationCard.jsx";
import JoinCard from "../Card/JoinCard.jsx";

const Header = () => {
    return(
        <div className={"header-main"}>
            <div className={"header-border"}>
                <div className={"top-section"}>
                    <div>
                        <h1>Hello, Jemmy 👋🏻</h1>
                        <p>Welcome back and explore the world</p>
                    </div>
                    <div>
                        <SearchInput/>
                        <div>
                            <span>4</span>
                            <Bell/>
                        </div>
                    </div>
                </div>
                <div>
                    <DestinationCard/>
                    <DestinationCard/>
                    <DestinationCard/>
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