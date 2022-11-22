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
                                <div>{currentDay[1]}%</div>
                            </div>
                            <div className="generalWeather"><img src={currentDay[2]} alt="weather description img"/></div>
                            <div className="lowTempContainer">Lowest:
                                <div className="lowestTemp">{currentDay[3]}</div>
                                <span>&#176;</span>
                                <div className="fahrenheitDisplay">F</div>
                                <div className="celsiusDisplay hidden">C</div>
                            </div>
                            <div className="highTempContainer">Highest:
                                <div className="highestTemp">{currentDay[4]}</div>
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
};

export default SevenDayDisplay;