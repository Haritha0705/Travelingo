import React from 'react';
import { NavLink } from "react-router-dom";
import { Home, Ticket, Star, MessageCircle, Wallet, Settings,ArrowRight,LogOut } from "lucide-react";
import "./Sidebar.css";

const menuItems = [
    { icon: <Home className={"sidebar-icon"}/>, name: "Dashboard", url: "/dashboard" },
    { icon: <Ticket className={"sidebar-icon"} />, name: "Ticket", url: "/ticket" },
    { icon: <Star className={"sidebar-icon"} />, name: "Favorite", url: "/favorite" },
    { icon: <MessageCircle className={"sidebar-icon"} />, name: "Message", url: "/message" },
    { icon: <Wallet className={"sidebar-icon"} />, name: "Transaction", url: "/transaction" },
    { icon: <Settings className={"sidebar-icon"} />, name: "Setting", url: "/setting" }
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
                <LogOut size={25} className={"logout-button-icon"}/>
                <span>Log Out</span>
            </button>
        </div>
    );
};

export default Sidebar;
