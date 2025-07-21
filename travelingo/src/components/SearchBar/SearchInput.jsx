import React from 'react';
import "./SearchInput.css";
import { Search } from "lucide-react";

const SearchInput = () => {
    return (
        <div className="search-container">

            <Search size={20} className="search-icon" />

            <input
                className="input-box"
                type="search"
                placeholder="Search direction"
            />

        </div>
    );
};

export default SearchInput;
