import React, { useEffect } from 'react';
import HourlyDisplay from './HourlyDisplay';
import SevenDayDisplay from './SevenDayDisplay';
// import MonthlyDisplay from './MonthlyDisplay';
import Popup from './Popup';

const AllWeatherInfo = () => {

    localStorage.setItem("hourlyOrWeekly", "weekly");

    const changeForecastDisplay = e => {
        let userClicked = e.currentTarget.innerText;
        let buttonClicked = e.currentTarget;
        let hourlyButton = e.currentTarget.parentNode.children[0];
        let sevenDayButton = e.currentTarget.parentNode.children[1];
        //sevenDayButton.classList.add("myBorder");
        let allDisplays = e.currentTarget.parentNode.parentNode.children[1].children;
        for (let i = 0; i < allDisplays.length; i++) {
            let currentChild = allDisplays[i];
            currentChild.classList.add("hidden");
            // sevenDayButton.classList.remove("myBorder");
            //hourlyButton.classList.add("myBorder");
        }
        if (userClicked === "Hourly") {
            allDisplays[0].classList.remove("hidden");
            buttonClicked.classList.add("myBorder");
            sevenDayButton.classList.remove("myBorder");
            localStorage.setItem("hourlyOrWeekly", "hourly");
        } else if (userClicked === "7 Day") {
            allDisplays[1].classList.remove("hidden");
            buttonClicked.classList.add("myBorder");
            hourlyButton.classList.remove("myBorder");
            localStorage.setItem("hourlyOrWeekly", "weekly");
        } else if (userClicked === "Monthly") {
            allDisplays[3].classList.remove("hidden");
        }
    };

    useEffect(() => {

    //     // add border to city pic if selected
         const allPics = document.querySelectorAll(".howDisplay");
    //     const currentLocation = JSON.parse(localStorage.getItem("location"));
        let hourlyOrWeekly = localStorage.getItem("hourlyOrWeekly");
        if (!hourlyOrWeekly) {
            localStorage.setItem("hourlyOrWeekly", "weekly");
            //allPics[0].children[0].children[0].classList.add("cityPicActive");
            return;
        }

        // if (hourlyOrWeekly == "weekly") {
        //     allPics[1].classList.add("myBorder");
        // }
        if (!hourlyOrWeekly == "hourly") {
            allPics[0].classList.add("myBorder")
        } else {
            allPics[1].classList.add("myBorder");
        }

    //     for (let i = 0; i < allPics.length; i++) {
    //         let currentCity = allPics[i].children[1].innerHTML;
    //         if (currentCity===currentLocation) {
    //             allPics[i].children[0].children[0].classList.add("cityPicActive");
    //         } else {
    //             allPics[i].children[0].children[0].classList.remove("cityPicActive");
    //         }
    //     }
    });

    return (
        <div id="allWeatherInfo">
            <div id="howDisplayWeather">
                <h3 onClick={changeForecastDisplay} className="howDisplay">Hourly</h3>
                <h3  style={{ marginLeft: "10%" }} onClick={changeForecastDisplay} className="howDisplay">7 Day</h3>
                {/*<h3 onClick={changeForecastDisplay} className="howDisplay">Monthly</h3>*/}
            </div>
            <div id="displayWeather">
                <HourlyDisplay />
                <SevenDayDisplay />
                {/*<Popup />*/}
                {/*<MonthlyDisplay />*/}
            </div>
        </div>
    );
};

export default AllWeatherInfo;