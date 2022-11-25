import getHourly_Weekly_CurrentWeather from '../Helpers.js';
import { useEffect, useState } from 'react';
import rainDropImg from '../../../images/raindrop.png';

const HourlyDisplay = () => {

    const [allData, setData] = useState([]);

    let getLoc = JSON.parse(localStorage.getItem("location"));
    if (!getLoc) {
        getLoc = "New York, USA";
    }

    useEffect(() => {

        const getData = async (place) => {
            let getit = await getHourly_Weekly_CurrentWeather(place);
            let updateStatBars = document.querySelectorAll(".statBars");
            let index = 0;
            for (let i = 0; i < updateStatBars.length; i++) {
                updateStatBars[i].children[0].innerText = getit[0][index][0];
                updateStatBars[i].children[1].children[0].style.width = `${getit[0][index][4].toFixed(0)}%`;
                updateStatBars[i].children[1].children[0].innerText = `${getit[0][index][4].toFixed(0)}%`;
                index += 2;
            }
            setData(getit[0]);
        }
        getData(getLoc);
    }, []);

    return (
        <div className="hidden" id="hourlyDisplay">
            {allData.map((hr, idx) => {
                return (
                    <div className="eachHour" key={idx}>
                        <p style={{ margin: "0", marginLeft: "5%" }} className="hourText">{hr[0]}</p>
                        <div className="lowTempContainer">
                            <div className="lowestTemp fahrenheitDisplay">{hr[1]}</div>
                            <div className="lowestTemp celsiusDisplay hidden">{((hr[1]-32)*(5/9)).toFixed(0)}</div>
                            <span>&#176;</span>
                            <div className="fahrenheitDisplay">F</div>
                            <div className="celsiusDisplay hidden">C</div>
                        </div>
                        <div className="generalWeather" style={{ marginLeft:"2%" }} ><img src={hr[2]} alt="weather description img"/></div>
                        <p style={{ margin: "0" }} className="hourText">{hr[3]}</p>
                        <div className="rainChance" style={{ marginLeft:"30%" }} >
                            <div className="rainDropImg"><img src={rainDropImg} alt="rain %"/></div>
                            <div>{hr[4].toFixed(0)}%</div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default HourlyDisplay;