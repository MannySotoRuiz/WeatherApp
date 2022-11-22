// import sunImg from '../../../images/sun.png';
// import cloudyNoSunImg from '../../../images/cloudyNoSun.png';
// import cloudyRainImg from '../../../images/cloudyRain.png';
// import cloudyWithSunImg from '../../../images/cloudyWithSun.png';
import rainDropImg from '../../../images/raindrop.png';
import display7DayData from '../Helpers.js';
import { useEffect, useState } from 'react';

const SevenDayDisplay = () => {

    const [allData, setData] = useState([]);

    const addPopup = e => {
        let popup = document.querySelectorAll(".popupDisplay");
        popup[0].classList.remove("hidden");
    };

    let getLoc = JSON.parse(localStorage.getItem("location"));
    if (!getLoc) {
        getLoc = "New York, USA";
    }

    useEffect(() => {

        const getData = async (place) => {
            let getit = await display7DayData(place);
            setData(getit);
        }
        getData(getLoc);
    }, []);

    return (
            <div className="sevenDayDisplay">
                {allData.map((currentDay, idx) => {
                    return (
                        <div className="eachDayin7Days" key={idx}>
                            <div className="dayText">{currentDay[0]}</div>
                            <div className="rainChance">
                                <div className="rainDropImg"><img src={rainDropImg} alt="rain %"/></div>
                                <div>69%</div>
                            </div>
                            <div className="generalWeather"><img src={currentDay[2]} alt="weather description img"/></div>
                            <div className="lowTempContainer">Lowest:
                                <div className="lowestTemp">69</div>
                                <span>&#176;</span>
                                <div className="fahrenheitDisplay">F</div>
                                <div className="celsiusDisplay hidden">C</div>
                            </div>
                            <div className="highTempContainer">Highest:
                                <div className="highestTemp">{currentDay[1]}</div>
                                <span>&#176;</span>
                                <div className="fahrenheitDisplay">F</div>
                                <div className="celsiusDisplay hidden">C</div>
                            </div>
                            <button onClick={addPopup} className="button-9">Recommended Clothing</button>
                        </div>
                    )
                })}
            </div>
        );

    // return (
    //     <div className="sevenDayDisplay">
    //         <div className="eachDayin7Days">
    //             <div className="dayText">Sunday</div>
    //             <div className="rainChance">
    //                 <div className="rainDropImg"><img src={rainDropImg} alt="rainDropImg"/></div>
    //                 <div>54%</div>
    //             </div>
    //             <div className="generalWeather"><img src={sunImg} alt="sunImg"/></div>
    //             <div className="lowTempContainer">Lowest:
    //                 <div className="lowestTemp">55</div>
    //                 <span>&#176;</span>
    //                 <div className="fahrenheitDisplay">F</div>
    //                 <div className="celsiusDisplay hidden">C</div>
    //             </div>
    //             <div className="highTempContainer">Highest:
    //                 <div className="highestTemp">75</div>
    //                 <span>&#176;</span>
    //                 <div className="fahrenheitDisplay">F</div>
    //                 <div className="celsiusDisplay hidden">C</div>
    //             </div>
    //             <button onClick={addPopup} className="button-9">Recommended Clothing</button>
    //         </div>
    //         <div className="eachDayin7Days">
    //             <div className="dayText">Monday</div>
    //             <div className="rainChance">
    //                 <div className="rainDropImg"><img src={rainDropImg} alt="rainDropImg"/></div>
    //                 <div>54%</div>
    //             </div>
    //             <div className="generalWeather"><img src={cloudyNoSunImg} alt="cloudyNoSunImg"/></div>
    //             <div className="lowTempContainer">Lowest:
    //                 <div className="lowestTemp">55</div>
    //                 <span>&#176;</span>
    //                 <div className="fahrenheitDisplay">F</div>
    //                 <div className="celsiusDisplay hidden">C</div>
    //             </div>
    //             <div className="highTempContainer">Highest:
    //                 <div className="highestTemp">75</div>
    //                 <span>&#176;</span>
    //                 <div className="fahrenheitDisplay">F</div>
    //                 <div className="celsiusDisplay hidden">C</div>
    //             </div>
    //             <button onClick={addPopup} className="button-9">Recommended Clothing</button>
    //         </div>
    //         <div className="eachDayin7Days">
    //             <div className="dayText">Tuesday</div>
    //             <div className="rainChance">
    //                 <div className="rainDropImg"><img src={rainDropImg} alt="rainDropImg"/></div>
    //                 <div>54%</div>
    //             </div>
    //             <div className="generalWeather"><img src={cloudyWithSunImg} alt="cloudyWithSunImg"/></div>
    //             <div className="lowTempContainer">Lowest:
    //                 <div className="lowestTemp">55</div>
    //                 <span>&#176;</span>
    //                 <div className="fahrenheitDisplay">F</div>
    //                 <div className="celsiusDisplay hidden">C</div>
    //             </div>
    //             <div className="highTempContainer">Highest:
    //                 <div className="highestTemp">75</div>
    //                 <span>&#176;</span>
    //                 <div className="fahrenheitDisplay">F</div>
    //                 <div className="celsiusDisplay hidden">C</div>
    //             </div>
    //             <button onClick={addPopup} className="button-9">Recommended Clothing</button>
    //         </div>
    //         <div className="eachDayin7Days">
    //             <div className="dayText">Wednesday</div>
    //             <div className="rainChance">
    //                 <div className="rainDropImg"><img src={rainDropImg} alt="rainDropImg"/></div>
    //                 <div>54%</div>
    //             </div>
    //             <div className="generalWeather"><img src={cloudyRainImg} alt="cloudyWithSunImg"/></div>
    //             <div className="lowTempContainer">Lowest:
    //                 <div className="lowestTemp">55</div>
    //                 <span>&#176;</span>
    //                 <div className="fahrenheitDisplay">F</div>
    //                 <div className="celsiusDisplay hidden">C</div>
    //             </div>
    //             <div className="highTempContainer">Highest:
    //                 <div className="highestTemp">75</div>
    //                 <span>&#176;</span>
    //                 <div className="fahrenheitDisplay">F</div>
    //                 <div className="celsiusDisplay hidden">C</div>
    //             </div>
    //             <button onClick={addPopup} className="button-9">Recommended Clothing</button>
    //         </div>
    //         <div className="eachDayin7Days">
    //             <div className="dayText">Thursday</div>
    //             <div className="rainChance">
    //                 <div className="rainDropImg"><img src={rainDropImg} alt="rainDropImg"/></div>
    //                 <div>54%</div>
    //             </div>
    //             <div className="generalWeather"><img src={sunImg} alt="sunImg"/></div>
    //             <div className="lowTempContainer">Lowest:
    //                 <div className="lowestTemp">55</div>
    //                 <span>&#176;</span>
    //                 <div className="fahrenheitDisplay">F</div>
    //                 <div className="celsiusDisplay hidden">C</div>
    //             </div>
    //             <div className="highTempContainer">Highest:
    //                 <div className="highestTemp">75</div>
    //                 <span>&#176;</span>
    //                 <div className="fahrenheitDisplay">F</div>
    //                 <div className="celsiusDisplay hidden">C</div>
    //             </div>
    //             <button onClick={addPopup} className="button-9">Recommended Clothing</button>
    //         </div>
    //         <div className="eachDayin7Days">
    //             <div className="dayText">Friday</div>
    //             <div className="rainChance">
    //                 <div className="rainDropImg"><img src={rainDropImg} alt="rainDropImg"/></div>
    //                 <div>54%</div>
    //             </div>
    //             <div className="generalWeather"><img src={sunImg} alt="sunImg"/></div>
    //             <div className="lowTempContainer">Lowest:
    //                 <div className="lowestTemp">55</div>
    //                 <span>&#176;</span>
    //                 <div className="fahrenheitDisplay">F</div>
    //                 <div className="celsiusDisplay hidden">C</div>
    //             </div>
    //             <div className="highTempContainer">Highest:
    //                 <div className="highestTemp">75</div>
    //                 <span>&#176;</span>
    //                 <div className="fahrenheitDisplay">F</div>
    //                 <div className="celsiusDisplay hidden">C</div>
    //             </div>
    //             <button onClick={addPopup} className="button-9">Recommended Clothing</button>
    //         </div>
    //         <div className="eachDayin7Days">
    //             <div className="dayText">Saturday</div>
    //             <div className="rainChance">
    //                 <div className="rainDropImg"><img src={rainDropImg} alt="rainDropImg"/></div>
    //                 <div>54%</div>
    //             </div>
    //             <div className="generalWeather"><img src={sunImg} alt="sunImg"/></div>
    //             <div className="lowTempContainer">Lowest:
    //                 <div className="lowestTemp">55</div>
    //                 <span>&#176;</span>
    //                 <div className="fahrenheitDisplay">F</div>
    //                 <div className="celsiusDisplay hidden">C</div>
    //             </div>
    //             <div className="highTempContainer">Highest:
    //                 <div className="highestTemp">75</div>
    //                 <span>&#176;</span>
    //                 <div className="fahrenheitDisplay">F</div>
    //                 <div className="celsiusDisplay hidden">C</div>
    //             </div>
    //             <button onClick={addPopup} className="button-9">Recommended Clothing</button>
    //         </div>
    //     </div>
    // );
};

export default SevenDayDisplay;