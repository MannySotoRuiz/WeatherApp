// import sunImg from '../../../images/sun.png';
// import cloudyNoSunImg from '../../../images/cloudyNoSun.png';
// import cloudyRainImg from '../../../images/cloudyRain.png';
// import cloudyWithSunImg from '../../../images/cloudyWithSun.png';
import rainDropImg from '../../../images/rainDropIcon.png';
import getHourly_Weekly_CurrentWeather from '../Helpers.js';
import { useEffect, useState } from 'react';

const SevenDayDisplay = () => {

    const addPopup = e => {
        let popup = document.querySelectorAll(".popupDisplay");
        popup[0].classList.remove("hidden");
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
    };

    const [allData, setData] = useState([]);

    let getLoc = JSON.parse(localStorage.getItem("location"));
    if (!getLoc) {
        getLoc = "New York, USA";
    }

    useEffect(() => {

        const getData = async (place) => {
            let getit = await getHourly_Weekly_CurrentWeather(place);
            if (getit[1][0][0] === "NULL") {
                console.log("eror with api");
                document.getElementById("displayErrorMsg").classList.remove("hidden");
            }
            setData(getit[1]);
        }
        getData(getLoc);
    }, [getLoc]);

    return (
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
        );
};

export default SevenDayDisplay;