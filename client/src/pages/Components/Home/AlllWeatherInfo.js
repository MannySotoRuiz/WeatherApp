import React from 'react';
import HourlyDisplay from './HourlyDisplay';
import SevenDayDisplay from './SevenDayDisplay';
// import MonthlyDisplay from './MonthlyDisplay';
import Popup from './Popup';

const AllWeatherInfo = () => {

    const changeForecastDisplay = e => {
        let userClicked = e.currentTarget.innerText;
        let allDisplays = e.currentTarget.parentNode.parentNode.children[1].children;
        for (let i = 0; i < allDisplays.length; i++) {
            let currentChild = allDisplays[i];
            currentChild.classList.add("hidden");
        }
        if (userClicked === "Hourly") {
            allDisplays[0].classList.remove("hidden");
        } else if (userClicked === "7 Day") {
            allDisplays[1].classList.remove("hidden");
        } else if (userClicked === "Monthly") {
            allDisplays[3].classList.remove("hidden");
        }
    };

    return (
        <div id="allWeatherInfo">
            <div id="howDisplayWeather">
                <h3 onClick={changeForecastDisplay} className="howDisplay">Hourly</h3>
                <h3 onClick={changeForecastDisplay} className="howDisplay">7 Day</h3>
                {/*<h3 onClick={changeForecastDisplay} className="howDisplay">Monthly</h3>*/}
            </div>
            <div id="displayWeather">
                <HourlyDisplay />
                <SevenDayDisplay />
                <Popup />
                {/*<MonthlyDisplay />*/}
            </div>
        </div>
    );
};

export default AllWeatherInfo;