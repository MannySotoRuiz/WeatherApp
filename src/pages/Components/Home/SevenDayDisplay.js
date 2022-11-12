import sunImg from '../../../images/sun.png';
import cloudyNoSunImg from '../../../images/cloudyNoSun.png';
import cloudyRainImg from '../../../images/cloudyRain.png';
import cloudyWithSunImg from '../../../images/cloudyWithSun.png';
import rainDropImg from '../../../images/raindrop.png';
// import Popup from './Popup';
// import { useState, useEffect } from 'react';

const SevenDayDisplay = () => {

    // const [buttonPopup, setButtonPopup] = useState(false);
    // const [timedPopup, setTimedPopup] = useState(false);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setTimedPopup(true);
    //     }, 5000)
    // }, []);

    const addPopup = e => {
        let popup = document.querySelectorAll(".popupDisplay");
        popup[0].classList.remove("hidden");
    };

    return (
        <div className="sevenDayDisplay">
            {/* <Popup trigger={timedPopup}  setTrigger={setTimedPopup}>
                <h3>Timed popup</h3>
            </Popup> */}
            <div className="eachDayin7Days">
                <div className="dayText">Sunday</div>
                <div className="rainChance">

                    <div className="rainDropImg"><img src={rainDropImg} alt="rainDropImg"/></div>
                    <div>54%</div>
                </div>
                <div className="generalWeather"><img src={sunImg} alt="sunImg"/></div>
                <div className="lowTempContainer">Lowest:
                    <div className="lowestTemp">55</div>
                    <span>&#176;</span>
                    <div className="fahrenheitDisplay">F</div>
                    <div className="celsiusDisplay hidden">C</div>
                </div>
                <div className="highTempContainer">Highest:
                    <div className="highestTemp">75</div>
                    <span>&#176;</span>
                    <div className="fahrenheitDisplay">F</div>
                    <div className="celsiusDisplay hidden">C</div>
                </div>
                <button onClick={addPopup} className="button-9">Recommended Clothing</button>
                {/* <Popup trigger={buttonPopup}  setTrigger={setButtonPopup}>
                    <h3>My popup</h3>
                </Popup> */}
            </div>
            <div className="eachDayin7Days">
                <div className="dayText">Monday</div>
                <div className="rainChance">
                    <div className="rainDropImg"><img src={rainDropImg} alt="rainDropImg"/></div>
                    <div>54%</div>
                </div>
                <div className="generalWeather"><img src={cloudyNoSunImg} alt="cloudyNoSunImg"/></div>
                <div className="lowTempContainer">Lowest:
                    <div className="lowestTemp">55</div>
                    <span>&#176;</span>
                    <div className="fahrenheitDisplay">F</div>
                    <div className="celsiusDisplay hidden">C</div>
                </div>
                <div className="highTempContainer">Highest:
                    <div className="highestTemp">75</div>
                    <span>&#176;</span>
                    <div className="fahrenheitDisplay">F</div>
                    <div className="celsiusDisplay hidden">C</div>
                </div>
                <button onClick={addPopup} className="button-9">Recommended Clothing</button>
            </div>
            <div className="eachDayin7Days">
                <div className="dayText">Tuesday</div>
                <div className="rainChance">
                    <div className="rainDropImg"><img src={rainDropImg} alt="rainDropImg"/></div>
                    <div>54%</div>
                </div>
                <div className="generalWeather"><img src={cloudyWithSunImg} alt="cloudyWithSunImg"/></div>
                <div className="lowTempContainer">Lowest:
                    <div className="lowestTemp">55</div>
                    <span>&#176;</span>
                    <div className="fahrenheitDisplay">F</div>
                    <div className="celsiusDisplay hidden">C</div>
                </div>
                <div className="highTempContainer">Highest:
                    <div className="highestTemp">75</div>
                    <span>&#176;</span>
                    <div className="fahrenheitDisplay">F</div>
                    <div className="celsiusDisplay hidden">C</div>
                </div>
                <button onClick={addPopup} className="button-9">Recommended Clothing</button>
            </div>
            <div className="eachDayin7Days">
                <div className="dayText">Wednesday</div>
                <div className="rainChance">
                    <div className="rainDropImg"><img src={rainDropImg} alt="rainDropImg"/></div>
                    <div>54%</div>
                </div>
                <div className="generalWeather"><img src={cloudyRainImg} alt="cloudyWithSunImg"/></div>
                <div className="lowTempContainer">Lowest:
                    <div className="lowestTemp">55</div>
                    <span>&#176;</span>
                    <div className="fahrenheitDisplay">F</div>
                    <div className="celsiusDisplay hidden">C</div>
                </div>
                <div className="highTempContainer">Highest:
                    <div className="highestTemp">75</div>
                    <span>&#176;</span>
                    <div className="fahrenheitDisplay">F</div>
                    <div className="celsiusDisplay hidden">C</div>
                </div>
                <button onClick={addPopup} className="button-9">Recommended Clothing</button>
            </div>
            <div className="eachDayin7Days">
                <div className="dayText">Thursday</div>
                <div className="rainChance">
                    <div className="rainDropImg"><img src={rainDropImg} alt="rainDropImg"/></div>
                    <div>54%</div>
                </div>
                <div className="generalWeather"><img src={sunImg} alt="sunImg"/></div>
                <div className="lowTempContainer">Lowest:
                    <div className="lowestTemp">55</div>
                    <span>&#176;</span>
                    <div className="fahrenheitDisplay">F</div>
                    <div className="celsiusDisplay hidden">C</div>
                </div>
                <div className="highTempContainer">Highest:
                    <div className="highestTemp">75</div>
                    <span>&#176;</span>
                    <div className="fahrenheitDisplay">F</div>
                    <div className="celsiusDisplay hidden">C</div>
                </div>
                <button onClick={addPopup} className="button-9">Recommended Clothing</button>
            </div>
            <div className="eachDayin7Days">
                <div className="dayText">Friday</div>
                <div className="rainChance">
                    <div className="rainDropImg"><img src={rainDropImg} alt="rainDropImg"/></div>
                    <div>54%</div>
                </div>
                <div className="generalWeather"><img src={sunImg} alt="sunImg"/></div>
                <div className="lowTempContainer">Lowest:
                    <div className="lowestTemp">55</div>
                    <span>&#176;</span>
                    <div className="fahrenheitDisplay">F</div>
                    <div className="celsiusDisplay hidden">C</div>
                </div>
                <div className="highTempContainer">Highest:
                    <div className="highestTemp">75</div>
                    <span>&#176;</span>
                    <div className="fahrenheitDisplay">F</div>
                    <div className="celsiusDisplay hidden">C</div>
                </div>
                <button onClick={addPopup} className="button-9">Recommended Clothing</button>
            </div>
            <div className="eachDayin7Days">
                <div className="dayText">Saturday</div>
                <div className="rainChance">
                    <div className="rainDropImg"><img src={rainDropImg} alt="rainDropImg"/></div>
                    <div>54%</div>
                </div>
                <div className="generalWeather"><img src={sunImg} alt="sunImg"/></div>
                <div className="lowTempContainer">Lowest:
                    <div className="lowestTemp">55</div>
                    <span>&#176;</span>
                    <div className="fahrenheitDisplay">F</div>
                    <div className="celsiusDisplay hidden">C</div>
                </div>
                <div className="highTempContainer">Highest:
                    <div className="highestTemp">75</div>
                    <span>&#176;</span>
                    <div className="fahrenheitDisplay">F</div>
                    <div className="celsiusDisplay hidden">C</div>
                </div>
                <button onClick={addPopup} className="button-9">Recommended Clothing</button>
            </div>
        </div>
    );
};

export default SevenDayDisplay;