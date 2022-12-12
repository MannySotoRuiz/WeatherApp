import React, { useEffect } from 'react';
import HomeLeft from './Components/Home/HomeLeft';
import HomeRight from './Components/Home/HomeRight';
import closeImg from '../images/close.png';

// import weather icon images
import sun from "../images/sun.png"
import sunCloudy from "../images/cloudyWithSun.png";
import cloudyNoSun from "../images/cloudyNoSun.jpg";
import sunRain from "../images/sunRain.png";
import cloudyRain from "../images/cloudyRain.png";
import thunderstorm from "../images/thunderstorm.png";
import snow from "../images/snow.png";
import mist from "../images/mist.png";
import night from "../images/night2.png";

// date fns
import { format } from 'date-fns';

const Home = () => {

    document.body.style.marginTop = "0%";
    document.body.style.marginRight = "0%";
    document.body.style.marginLeft = "0%";
    document.body.style.marginBottom = "0%";
    document.body.style.backgroundColor = "#ecf2f4";

    const handleClose = () => {
        document.getElementById("displayErrorMsg").classList.add("hidden");
    }

    useEffect(() => {
        const createNotification = async () => {
            const getUser = JSON.parse(localStorage.getItem("user"));
            if(getUser) {
                const userEmail = getUser.email;
                const location = getUser.userLocation;
                const params = {param1: userEmail};

                const response = await fetch(`/api/notifications?${new URLSearchParams(params)}`);
                const json = await response.json();

                if (response.ok) {
                    let ifFound = false;
                    // loop through notifications to see if noti already exists for the current date

                    const currentD = new Date();
                    let currentDate = `${currentD.getMonth()+1}/${currentD.getDate()}/${currentD.getFullYear()}`;
                    for (let i = 0; i < json.length; i++) {
                        const current = json[i];
                        const tempDate = format(new Date(current.createdAt), 'MM/dd/yyyy');
                        if (tempDate === currentDate) {
                            ifFound = true;
                            break;
                        }
                        console.log(tempDate, getUser.date);
                    }

                    if (ifFound) { // notification already exists for current day
                        console.log("notification already exists for this date, dont create a new one");
                    } else { // create a new notification for the date
                        console.log("going to create a new notification for this date");

                        // get coordinates
                        let end = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=e15a543800b7e60db9e4e04aaf22a037`;
                        const res = await fetch(end);
                        if (res.status !== 200) {
                            console.log("something went wrong with api the api");
                            return;
                        }
                        const resData = await res.json();
                        if (resData.length === 0) {
                            console.log("Error trying to get latitude and longitutde for city");
                            return;
                        }

                        // get weather data
                        let end2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${resData[0].lat}&lon=${resData[0].lon}&exclude=minutely,alerts,hourly,current&units=imperial&appid=a63f9e77a7e5b1e6d12da2311068e37d`;
                        const res2 = await fetch(end2);
                        if (res2.status === 429) {
                            console.log("Error: Weather API reached limit calls");
                            return;
                        } else if (res2.status !== 200) {
                            console.log("Error with Weather API");
                            return; 
                        }

                        const tempData = await res2.json();
                        const tempWeather = tempData.daily[0];

                        const picMap = {
                            "icon01d": sun,
                            "icon02d": sunCloudy,
                            "icon03d": cloudyNoSun,
                            "icon04d": cloudyNoSun,
                            "icon09d": cloudyRain,
                            "icon10d": sunRain,
                            "icon11d": thunderstorm,
                            "icon13d": snow,
                            "icon50d": mist,
                            "icon01n": night,
                            "icon02n": night,
                            "icon03n": cloudyNoSun,
                            "icon04n": night,
                            "icon09n": cloudyRain,
                            "icon10n": cloudyRain,
                            "icon11n": thunderstorm,
                            "icon50n": mist
                        };

                        const tempIcon = tempWeather.weather[0].icon;
                        const formatIcon = `icon${tempIcon}`;
                        const icon = picMap[formatIcon];
                        const fit = "Hoodie";
                        const highTemp = tempWeather.temp.max.toFixed(0);
                        const lowTemp = tempWeather.temp.min.toFixed(0);
                        const desc = tempWeather.weather[0].description;
                        const newNotification = {userEmail, fit, highTemp, lowTemp, desc, icon, location};
                        const response2 = await fetch('/api/notifications', {
                            method: 'POST',
                            headers: {'Content-Type': 'application/json'},
                            body: JSON.stringify(newNotification)
                        })
                        const json2 = await response2.json();
                        if (!response2.ok) {
                            console.log(json2.error);
                            console.log(json2.emptyFields);
                        }
                        if (response2.ok) {
                            console.log("successfully created notification");
                        }
                    }
                }
            } else {
                console.log('user not logged in, cant detect notifications');
            }
        }
        createNotification();
    });

    return (
        <div id="home">
            <div className="hidden" id="displayErrorMsg">
                <div id="divForCloseBtn">
                    <div id="holdCloseImg"><img onClick={handleClose} src={closeImg} alt="Close Alerts"/></div>
                </div>
                <div id="homeErrorMsg"></div>
            </div>
            <div className="row" id="mainContainer">
                <HomeLeft />
                <HomeRight />
            </div >

            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p className="text-justify">A weather app using location and weather apis to send notifications at a
                                preset time of what the weather is like and give out clothing recommendations as a result of the
                                weather</p>
                        </div>
                    </div>
                    <hr className="small" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-12">
                            <p className="copyright-text">Copyright © 2022 All Rights Reserved by WeatherApp Team
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div >
    );
};

export default Home;