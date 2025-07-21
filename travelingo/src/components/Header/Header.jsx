import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css";

import SearchInput from "../SearchBar/SearchInput.jsx";
import {ArrowRight, Bell, Filter, LogOut, Sidebar, X} from "lucide-react";
import BestDestinationList from "../Card/BestDestinationList.jsx";
import DestinationCard from "../Card/DestinationCard.jsx";
import JoinCard from "../Card/JoinCard.jsx";

import cardImage1 from "../../assets/images/Mount climbing.png";
import cardImage2 from "../../assets/images/Night camping.png";
import cardImage3 from "../../assets/images/Mount climbing2.png";
import destinationCardImg1 from "../../assets/images/Green wood forest.png";
import destinationCardImg2 from "../../assets/images/Green forest Camp.png";
import destinationCardImg3 from "../../assets/images/Desert Festival.png";

const menuItems = [
    { name: "Dashboard", url: "/dashboard" },
    { name: "Ticket", url: "/ticket" },
    { name: "Favorite", url: "/favorite" },
    { name: "Message", url: "/message" },
    { name: "Transaction", url: "/transaction" },
    { name: "Setting", url: "/setting" }
];

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="header-main">
            <div className="header-border">

                {/* Top section */}
                <div className="top-section">
                    <div className="mobile-top">
                        <div>
                            <h1>Hello, Jemmy 👋🏻</h1>
                            <p>Welcome back and explore the world</p>
                        </div>
                        <div className="sidebar-button" onClick={() => setShowMenu(true)}>
                            <Sidebar />
                        </div>
                    </div>

                    <div className="right-top-section">
                        <SearchInput />
                        <div className="notification-section">
                            <span>4</span>
                            <Bell color="gray" />
                        </div>
                    </div>
                </div>

                {/* Top cards */}
                <div className="top-card-section">
                    <DestinationCard img={cardImage1} main_Text="Mount climbing" location="Green Mountain" />
                    <DestinationCard img={cardImage2} main_Text="Night camping" location="Lightning lake" />
                    <DestinationCard img={cardImage3} main_Text="Mount climbing" location="Green Mountain" />
                </div>

                {/* Bottom section */}
                <div className="bottom-section">
                    <div className="bottom-left-section">
                        <div className="bottom-left-container">
                            <div>
                                <h3>Best Destination 🌈</h3>
                                <p>100 Destinations found</p>
                            </div>
                            <button className="filter-button">
                                <Filter size={15} className="filter-icon" />
                                <span>Filters</span>
                            </button>
                        </div>

                        <div className="best-destination-list">
                            <BestDestinationList img={destinationCardImg1} location="Telangana" main_Text="Green wood forest" />
                            <BestDestinationList img={destinationCardImg2} location="Chennai" main_Text="Green forest Camp" />
                            <BestDestinationList img={destinationCardImg3} location="Gujarat" main_Text="Desert Festival" />
                        </div>
                    </div>
                    <JoinCard />
                </div>

                {/* Mobile Menu */}
                <div className={`mobile-menu ${showMenu ? 'open' : ''}`}>
                    <div className="mobile-menu-header">
                        <h2>Travelingo</h2>
                        <X className="close-icon" onClick={() => setShowMenu(false)} />
                    </div>


                    <ul className="mobile-menu-items">
                        {menuItems.map((item, index) => (
                            <NavLink
                                key={index}
                                to={item.url}
                                className={({ isActive }) =>
                                    `mobile-nav-item${isActive ? " active" : ""}`
                                }
                            >
                                <span className="text">{item.name}</span>
                            </NavLink>
                        ))}
                    </ul>
                    <div className={"mobile-bottom"}>
                        <div className={"mobile-sidebar-banner"}>
                            <h3><span>50%</span> Discount</h3>
                            <p>Get a discount on certain days and don’t miss it. </p>
                            <button>
                                <ArrowRight size={30}/>
                            </button>
                        </div>
                        <button className={"mobile-logout-button"}>
                            <LogOut size={25} className={"mobile-logout-button-icon"}/>
                            <span>Log Out</span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Header;
