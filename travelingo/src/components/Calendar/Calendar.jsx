import React from 'react';
import "./Calendar.css";
import { ArrowRight, ArrowLeft } from "lucide-react";

const Calendar = () => {
    return (
        <div className="calendar-main">
            <div className="calendar-header">
                <h4>May <span>2025</span></h4>
                <div className="arrow-section">
                    <div className="arrow-button-left">
                        <ArrowLeft />
                    </div>
                    <div className="arrow-button-right">
                        <ArrowRight />
                    </div>
                </div>
            </div>

            <div className="calendar-dates">
                <h5>Sun</h5>
                <h5>Mon</h5>
                <h5>Tue</h5>
                <h5>Wed</h5>
                <h5>Thu</h5>
                <h5>Fri</h5>
                <h5>Sat</h5>
            </div>

            <div className="calendar-date">
                <h5 className="gray-dates">27</h5>
                <h5 className="gray-dates">28</h5>
                <h5 className="gray-dates">29</h5>
                <h5 className="gray-dates">30</h5>
                <h5>01</h5>
                <h5>02</h5>
                <h5 className="green-dates">03</h5>
            </div>

            <div className="calendar-date">
                <h5>04</h5>
                <h5>05</h5>
                <h5>06</h5>
                <h5>07</h5>
                <h5>08</h5>
                <h5>09</h5>
                <h5>10</h5>
            </div>

            <div className="calendar-date">
                <h5>11</h5>
                <h5>12</h5>
                <h5>13</h5>
                <h5>14</h5>
                <h5>15</h5>
                <h5>16</h5>
                <h5>17</h5>
            </div>

            <div className="calendar-date-rouned">
                    <h5>18</h5>
                    <h5>19</h5>
                <div className="rounded">
                    <h5 className="green-round">20</h5>
                    <h5>21</h5>
                    <h5>22</h5>
                    <h5 className="green-round">23</h5>
                </div>
                    <h5>24</h5>
            </div>

            <div className="calendar-date">
                <h5>25</h5>
                <h5>26</h5>
                <h5>27</h5>
                <h5>28</h5>
                <h5>29</h5>
                <h5>30</h5>
                <h5>31</h5>
            </div>

        </div>
    );
};

export default Calendar;
