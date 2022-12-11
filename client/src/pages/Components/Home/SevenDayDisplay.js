// import sunImg from '../../../images/sun.png';
// import cloudyNoSunImg from '../../../images/cloudyNoSun.png';
// import cloudyRainImg from '../../../images/cloudyRain.png';
// import cloudyWithSunImg from '../../../images/cloudyWithSun.png';
import rainDropImg from '../../../images/rainDropIcon.png';
import getHourly_Weekly_CurrentWeather from '../Helpers.js';
import Popup from './Popup';
import { useEffect, useState } from 'react';

// date fns
import { format } from 'date-fns';

const SevenDayDisplay = () => {

    const addPopup = e => {
        // let popup = document.querySelectorAll(".popupDisplay");
        // popup[0].classList.remove("hidden");
        const getClicked = e.currentTarget.parentNode;
        let getChilds = document.querySelectorAll(".eachDayin7Days");
        let index;
        for (let i = 0; i < getChilds.length; i++) {
            if (getChilds[i] === getClicked) {
                index = i;
                break;
            }
        }
        localStorage.setItem("dayClickedOn", JSON.stringify(index));
        setOpen(true)
    };

    const [allData, setData] = useState([]);
    const [open, setOpen] = useState(false);

    let getLoc = JSON.parse(localStorage.getItem("location"));
    if (!getLoc) {
        getLoc = "New York, USA";
    }

    useEffect(() => {

        const getData = async (place) => {
            let getit = await getHourly_Weekly_CurrentWeather(place);
            if (getit[1][0][0] === "NULL") {
                console.log("eror with api");
                // document.getElementById("displayErrorMsg").classList.remove("hidden");
                setOpen(true)
            }
            setData(getit[1]);
            createNotification(getit[1]);
        }
        const createNotification = async (data) => {
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
                    for (let i = 0; i < json.length; i++) {
                        const current = json[i];
                        const tempDate = format(new Date(current.createdAt), 'MM/dd/yyyy');
                        if (tempDate === getUser.date) {
                            ifFound = true;
                            break;
                        }
                    }

                    if (ifFound) { // notification already exists for current day
                        console.log("notification already exists for this date, dont create a new one");
                    } else { // create a new notification for the date
                        console.log("going to create a new notification for this date");
                        const icon = data[0][2];
                        const fit = "Hoodie";
                        const highTemp = data[0][4];
                        const lowTemp = data[0][3];
                        const desc = data[0][5];
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
        getData(getLoc);
    }, [getLoc]);

    return (
        <>
            <div className="sevenDayDisplay">
                {allData.map((currentDay, idx) => {
                    if (idx === 6) {
                        return (
                            <div className="eachDayin7Days" style={{ borderBottom: "none" }} key={idx}>
                                <div className="dayText">{currentDay[0]}</div>
                                <div className="rainChance">
                                    <div className="rainDropImg"><img src={rainDropImg} alt="rain %"/></div>
                                    <div>{currentDay[1].toFixed(0)}%</div>
                                </div>
                                <div className="generalWeather"><img src={currentDay[2]} alt="weather description img"/></div>
                                <div className="highTempContainer">
                                    <div className="highestTemp fahrenheitDisplay">{currentDay[4]}<span>&#176;</span>/</div>
                                    <div className="highestTemp celsiusDisplay hidden">{((currentDay[4]-32)*(5/9)).toFixed(0)}<span>&#176;</span>/</div>
                                    <div className="lowestTemp fahrenheitDisplay">{currentDay[3]}</div>
                                    <div className="lowestTemp celsiusDisplay hidden">{((currentDay[3]-32)*(5/9)).toFixed(0)}</div>
                                    <span>&#176;</span>
                                    <div className="fahrenheitDisplay">F</div>
                                    <div className="celsiusDisplay hidden">C</div>
                                </div>
                                <div className="dailyDescription">
                                    {currentDay[5]}
                                </div>
                                <button onClick={addPopup} className="button-9">Recommended Fit</button>
                            </div>
                        )
                    } else if (idx === 0) {
                        return (
                            <div className="eachDayin7Days" key={idx}>
                                <div className="dayText">Today</div>
                                <div className="rainChance">
                                    <div className="rainDropImg"><img src={rainDropImg} alt="rain %"/></div>
                                    <div>{currentDay[1].toFixed(0)}%</div>
                                </div>
                                <div className="generalWeather"><img src={currentDay[2]} alt="weather description img"/></div>
                                <div className="highTempContainer">
                                    <div className="highestTemp fahrenheitDisplay">{currentDay[4]}<span>&#176;</span>/</div>
                                    <div className="highestTemp celsiusDisplay hidden">{((currentDay[4]-32)*(5/9)).toFixed(0)}<span>&#176;</span>/</div>
                                    <div className="lowestTemp fahrenheitDisplay">{currentDay[3]}</div>
                                    <div className="lowestTemp celsiusDisplay hidden">{((currentDay[3]-32)*(5/9)).toFixed(0)}</div>
                                    <span>&#176;</span>
                                    <div className="fahrenheitDisplay">F</div>
                                    <div className="celsiusDisplay hidden">C</div>
                            </div>
                                <div className="dailyDescription">
                                    {currentDay[5]}
                                </div>
                                <button onClick={addPopup} className="button-9">Recommended Fit</button>
                            </div>
                        )
                    }
                    return (
                        <div className="eachDayin7Days" key={idx}>
                            <div className="dayText">{currentDay[0]}</div>
                            <div className="rainChance">
                                <div className="rainDropImg"><img src={rainDropImg} alt="rain %"/></div>
                                <div>{currentDay[1].toFixed(0)}%</div>
                            </div>
                            <div className="generalWeather"><img src={currentDay[2]} alt="weather description img"/></div>
                            <div className="highTempContainer">
                                    <div className="highestTemp fahrenheitDisplay">{currentDay[4]}<span>&#176;</span>/</div>
                                    <div className="highestTemp celsiusDisplay hidden">{((currentDay[4]-32)*(5/9)).toFixed(0)}<span>&#176;</span>/</div>
                                    <div className="lowestTemp fahrenheitDisplay">{currentDay[3]}</div>
                                    <div className="lowestTemp celsiusDisplay hidden">{((currentDay[3]-32)*(5/9)).toFixed(0)}</div>
                                    <span>&#176;</span>
                                    <div className="fahrenheitDisplay">F</div>
                                    <div className="celsiusDisplay hidden">C</div>
                            </div>
                            <div className="dailyDescription">
                                    {currentDay[5]}
                            </div>
                            <button onClick={addPopup} className="button-9">Recommended Fit</button>
                        </div>
                    )
                })}
            </div>
            <Popup open={open} onClose={() => setOpen(false)} />
        </>
        );
};

export default SevenDayDisplay;