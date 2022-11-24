import React from 'react';
import sunImg from '../../../images/sun.png';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getHourly_Weekly_CurrentWeather from '../Helpers.js';


const HomeRight = () => {

    let navigate = useNavigate();

    const current = new Date();
    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    let currentDay = days[current.getDay()];
    let currentMonth = months[current.getMonth()];
    let currentDate = current.getDate();
    let currentYear = current.getFullYear();
    let date = `${currentDay}, ${currentMonth} ${currentDate} ${currentYear}`;

    let location = "New York, USA"; // default location

    // check to see if user has a saved location to display instead of default location
    let getLoc = JSON.parse(localStorage.getItem("location"));
    if (getLoc) {
        // console.log(getLoc);
        location = getLoc;
        // console.log(location);
    }

    const [allData, setData] = useState([]);

    useEffect(() => {

        const getData = async (place) => {
            let getit = await getHourly_Weekly_CurrentWeather(place);
            setData(getit[2]);
        }
        getData(location);
    }, []);

    return (
        <div className="col" id="rightContainer">
            <div id="loginContainer">
                <div id="holdAccountPic">
                    <img src={require('../../../images/account.png')} alt="account icon" onClick={() => {
                        navigate("/login");
                    }}/>
                </div>
            </div>
            <div className="weatherTitle"></div>
            <div id="todayInfo">
                <div id="todayDate">
                    <div id="imgCurrentWeather"><img src={allData[3]} alt="current weather img"/></div>
                    <div id="holdText">
                        <h2>Today</h2>
                        <p id="todayText">{date}</p>
                    </div>
                </div>
                <div id="todayWeather">
                    <p className="fahrenheitDisplay weatherText">{allData[0]}</p>
                    <p className="celsiusDisplay hidden weatherText">{((allData[0]-32)*(5/9)).toFixed(0)}</p><span>&#176;</span>
                    <div className="fahrenheitDisplay">F</div>
                    <div className="celsiusDisplay hidden">C</div>
                </div>
                <div id="currentLocation">{location}</div>
                <div id="feelsLike">
                    <div className="feelsText fahrenheitDisplay">Feels like 65</div>
                    <div className="feelsText celsiusDisplay hidden">Feels like {((allData[0]-32)*(5/9)).toFixed(0)}</div>
                    <div style={{ color: "#808080", fontSize: "60px" }}>·</div>
                    <div id="sunsetTime">Sunset {allData[1]}</div>
                </div>
                <div className='clothes mt-10'>
                    <i className='iconfont icon-yurongfu3 f100'></i>
                    <i className='iconfont icon-TROUSERS f100'></i>
                    <span className='mt-10'>Today's weather is good for cotton coat</span>
                </div>
            </div>
            <div id="extraTodayInfo"></div>
        </div>
    );
};

export default HomeRight;