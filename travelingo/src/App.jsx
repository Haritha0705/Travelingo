import React from 'react';
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Ticket from "./pages/Ticket/Ticket.jsx";
import Favorite from "./pages/Favorite/Favorite.jsx";
import Message from "./pages/Message/Message.jsx";
import Transaction from "./pages/Transaction/Transaction.jsx";
import Setting from "./pages/Setting/Setting.jsx";
import './App.css';

const App = () => {
    return (
        <div className="main">
            <Sidebar />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/ticket" element={<Ticket />} />
                    <Route path="/favorite" element={<Favorite />} />
                    <Route path="/message" element={<Message />} />
                    <Route path="/transaction" element={<Transaction />} />
                    <Route path="/setting" element={<Setting />} />
                    <Route path="*" element={<div>Page Not Found</div>} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
