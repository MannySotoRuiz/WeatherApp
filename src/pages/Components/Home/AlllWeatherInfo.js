import React from 'react';
import HourlyDisplay from './HourlyDisplay';
import SevenDayDisplay from './SevenDayDisplay';
import MonthlyDisplay from './MonthlyDisplay';
import Popup from './Popup';

const AllWeatherInfo = () => {
    return (
        <div id="allWeatherInfo">
            <div id="howDisplayWeather">
                <h3 className="howDisplay">Hourly</h3>
                <h3 className="howDisplay">7 Day</h3>
                <h3 className="howDisplay">Monthly</h3>
            </div>
            <div id="displayWeather">
                <HourlyDisplay />
                <SevenDayDisplay />
                <Popup />
                <MonthlyDisplay />
            </div>
        </div>
    );
};

export default AllWeatherInfo;