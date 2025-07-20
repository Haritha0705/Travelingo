import React from 'react';
import { NavLink } from "react-router-dom";
import { Home, Ticket, Star, MessageCircle, Wallet, Settings,ArrowRight,LogOut } from "lucide-react";
import "./Sidebar.css";

const menuItems = [
    { icon: <Home size={25} />, name: "Dashboard", url: "/dashboard" },
    { icon: <Ticket size={25} />, name: "Ticket", url: "/ticket" },
    { icon: <Star size={25} />, name: "Favorite", url: "/favorite" },
    { icon: <MessageCircle size={25} />, name: "Message", url: "/message" },
    { icon: <Wallet size={25} />, name: "Transaction", url: "/transaction" },
    { icon: <Settings size={25} />, name: "Setting", url: "/setting" }
];

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h1>Travelingo</h1>
            <ul>
                {menuItems.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.url}
                        className={({ isActive }) =>
                            `nav-item${isActive ? " active" : ""}`
                        }
                    >
                        <span className="icon">{item.icon}</span>
                        <span className="text">{item.name}</span>
                    </NavLink>
                ))}
            </ul>
            <div className={"sidebar-banner"}>
                <h3><span>50%</span> Discount</h3>
                <p>Get a discount on certain days and don’t miss it. </p>
                <button>
                    <ArrowRight size={30}/>
                </button>
            </div>
            <button className={"logout-button"}>
                <LogOut size={25}/>
                <span>Log Out</span>
            </button>
        </div>
    );
};

export default Sidebar;
