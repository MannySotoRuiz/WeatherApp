import React from 'react';
import HourlyDisplay from './HourlyDisplay';
import SevenDayDisplay from './SevenDayDisplay';
import MonthlyDisplay from './MonthlyDisplay';

const allWeatherInfo = () => {
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
                    <MonthlyDisplay />
                </div>
            </div>
    );
};

export default allWeatherInfo;