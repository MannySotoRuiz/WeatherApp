// import sunImg from '../../../images/sun.png';
// import cloudyNoSunImg from '../../../images/cloudyNoSun.png';
// import cloudyRainImg from '../../../images/cloudyRain.png';
// import cloudyWithSunImg from '../../../images/cloudyWithSun.png';
import rainDropImg from '../../../images/raindrop.png';
import getHourly_Weekly_CurrentWeather from '../Helpers.js';
import { useEffect, useState } from 'react';

const SevenDayDisplay = () => {

    const addPopup = e => {
        let popup = document.querySelectorAll(".popupDisplay");
        popup[0].classList.remove("hidden");
    };

    const [allData, setData] = useState([]);

    let getLoc = JSON.parse(localStorage.getItem("location"));
    if (!getLoc) {
        getLoc = "New York, USA";
    }

    useEffect(() => {

        const getData = async (place) => {
            let getit = await getHourly_Weekly_CurrentWeather(place);
            setData(getit[1]);
        }
        getData(getLoc);
    }, []);

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
                                <div className="lowTempContainer">Lowest:
                                    <div className="lowestTemp fahrenheitDisplay">{currentDay[3]}</div>
                                    <div className="lowestTemp celsiusDisplay hidden">{((currentDay[3]-32)*(5/9)).toFixed(0)}</div>
                                    <span>&#176;</span>
                                    <div className="fahrenheitDisplay">F</div>
                                    <div className="celsiusDisplay hidden">C</div>
                                </div>
                                <div className="highTempContainer">Highest:
                                    <div className="highestTemp fahrenheitDisplay">{currentDay[4]}</div>
                                    <div className="highestTemp celsiusDisplay hidden">{((currentDay[4]-32)*(5/9)).toFixed(0)}</div>
                                    <span>&#176;</span>
                                    <div className="fahrenheitDisplay">F</div>
                                    <div className="celsiusDisplay hidden">C</div>
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
                                <div className="lowTempContainer">Lowest:
                                    <div className="lowestTemp fahrenheitDisplay">{currentDay[3]}</div>
                                    <div className="lowestTemp celsiusDisplay hidden">{((currentDay[3]-32)*(5/9)).toFixed(0)}</div>
                                    <span>&#176;</span>
                                    <div className="fahrenheitDisplay">F</div>
                                    <div className="celsiusDisplay hidden">C</div>
                                </div>
                                <div className="highTempContainer">Highest:
                                    <div className="highestTemp fahrenheitDisplay">{currentDay[4]}</div>
                                    <div className="highestTemp celsiusDisplay hidden">{((currentDay[4]-32)*(5/9)).toFixed(0)}</div>
                                    <span>&#176;</span>
                                    <div className="fahrenheitDisplay">F</div>
                                    <div className="celsiusDisplay hidden">C</div>
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
                            <div className="lowTempContainer">Lowest:
                                <div className="lowestTemp fahrenheitDisplay">{currentDay[3]}</div>
                                <div className="lowestTemp celsiusDisplay hidden">{((currentDay[3]-32)*(5/9)).toFixed(0)}</div>
                                <span>&#176;</span>
                                <div className="fahrenheitDisplay">F</div>
                                <div className="celsiusDisplay hidden">C</div>
                            </div>
                            <div className="highTempContainer">Highest:
                                <div className="highestTemp fahrenheitDisplay">{currentDay[4]}</div>
                                <div className="highestTemp celsiusDisplay hidden">{((currentDay[4]-32)*(5/9)).toFixed(0)}</div>
                                <span>&#176;</span>
                                <div className="fahrenheitDisplay">F</div>
                                <div className="celsiusDisplay hidden">C</div>
                            </div>
                            <button onClick={addPopup} className="button-9">Recommended Fit</button>
                        </div>
                    )
                })}
            </div>
        );
};

export default SevenDayDisplay;