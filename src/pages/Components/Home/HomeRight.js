import React from 'react';
import sunImg from '../../../images/sun.png';
// import cloudyNoSunImg from '../../../images/cloudyNoSun.png';
// import cloudyRainImg from '../../../images/cloudyRain.png';
// import cloudyWithSunImg from '../../../images/cloudyWithSun.png';
// import rainDropImg from '../../../images/raindrop.png';
import { useNavigate } from 'react-router-dom';

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

    return (
        <div id="rightContainer">
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
                    <div id="imgCurrentWeather"><img src={sunImg} alt="sunImg"/></div>
                    <div id="holdText">
                        <h2>Today</h2>
                        <p id="todayText">{date}</p>
                    </div>
                </div>
                <div id="todayWeather">
                    <p id="weatherText">69</p><span>&#176;</span>
                    <div className="fahrenheitDisplay">F</div>
                    <div className="celsiusDisplay hidden">C</div>
                </div>
                <div id="currentLocation">New York, USA</div>
                <div id="feelsLike">
                    <div id="feelsText">Feels like 65</div>
                    <div style={{ color: "#808080" }}>·</div>
                    <div id="sunsetTime">Sunset 20:15</div>
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