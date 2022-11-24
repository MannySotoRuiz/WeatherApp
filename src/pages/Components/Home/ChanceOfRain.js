// import { useState, useEffect } from "react";
// import getHourly_Weekly_CurrentWeather from "../Helpers.js";

const ChanceOfRain = () => {

    // let location = "New York, USA"; // default location

    // let getLoc = JSON.parse(localStorage.getItem("location"));
    // if (getLoc) {
    //     location = getLoc;
    // }

    // const [allData, setData] = useState([]);

    // useEffect(() => {

    //     const getData = async (place) => {
    //         let getit = await getHourly_Weekly_CurrentWeather(place);
    //         setData(getit[0]);
    //     }
    //     getData(location);
    // }, []);

    return (
        <div className="holdStats">
            <div className="statBars">
                <div className="holdTimeForBar">10AM</div>
                <div className="progress-bar">
                    <span className="progress-bar-fill" style={{ width: "0%" }}>0%</span>
                </div>
            </div>
            <div className="statBars">
                <div className="holdTimeForBar">12PM</div>
                <div className="progress-bar">
                    <span className="progress-bar-fill" style={{ width: "0%" }}>0%</span>
                </div>
            </div>
            <div className="statBars">
                <div className="holdTimeForBar">2PM</div>
                <div className="progress-bar">
                    <span className="progress-bar-fill" style={{ width: "0%" }}>0%</span>
                </div>
            </div>
            <div className="statBars">
                <div className="holdTimeForBar">4PM</div>
                <div className="progress-bar">
                    <span className="progress-bar-fill" style={{ width: "0%" }}>0%</span>
                </div>
            </div>
            <div className="statBars">
                <div className="holdTimeForBar">6PM</div>
                <div className="progress-bar">
                    <span className="progress-bar-fill" style={{ width: "0%" }}>0%</span>
                </div>
            </div>
            <div className="statBars">
                <div className="holdTimeForBar">8PM</div>
                <div className="progress-bar">
                    <span className="progress-bar-fill" style={{ width: "0%" }}>0%</span>
                </div>
            </div>
        </div>
    );
};

export default ChanceOfRain;