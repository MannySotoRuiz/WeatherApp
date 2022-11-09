const Home = () => {
    return (
        <div id="mainContainer">
            <div id="leftContainer">
                <div id="searchContainer">
                    <div id="searchDiv"></div>
                </div>
                
                <div className="weatherTitle"><h1>Weather <strong>Forecast</strong></h1></div>
                
                <div id="cities">
                    <div class="selectCity">
                        <div class="cityPic">
                            {/* <img src="images/CityImages/Berlin.jpg"> */}
                        </div>
                        <p>Berlin, Germany</p>
                    </div>
                    <div class="selectCity">
                        <div class="cityPic">
                            {/* <img src="images/CityImages/Paris.jpg"> */}
                        </div>
                        <p>Paris, France</p>
                    </div>
                    <div class="selectCity">
                        <div class="cityPic">
                            {/* <img src="images/CityImages/NYC.jpg"> */}
                        </div>
                        <p>New York, USA</p>
                    </div>
                    <div id="addCity">
                        <p style={{
                            marginTop: "40%",
                            marginBottom: "10%",
                            fontSize: "30px"
                            }}
                        >
                            +
                        </p>
                        <p style={{
                            marginTop: "17%",
                            fontSize:"17px"
                        }}
                        >
                            Add City
                        </p>
                    </div>
                </div>
                
                <div id="allWeatherInfo">
                    <div id="sevenDayDisplay">
                        <div className="eachDayin7Days">
                            <div className="dayText">Sunday</div>
                            <div className="rainChance">
                                    <div className="rainDropImg"></div>
                                    <div>54%</div>
                            </div>
                            <div className="generalWeather"></div>
                            <div className="lowTempContainer">Lowest:
                                    <div class="lowestTemp">55</div>
                                    <span>&#176;</span>
                                    <div class="fahrenheitDisplay">F</div><div class="celsiusDisplay hidden">C</div>
                            </div>
                            <div class="highTempContainer">Highest:
                                    <div class="highestTemp">75</div>
                                    <span>&#176;</span>
                                    <div class="fahrenheitDisplay">F</div><div class="celsiusDisplay hidden">C</div>
                            </div>
                            {/* <button class="button-9" role="button">Recommended Clothing</button> */}
                        </div>
                    </div>
                    <div id="sevenDayDisplay">
                        <div className="eachDayin7Days">
                            <div className="dayText">Monday</div>
                            <div className="rainChance">
                                    <div className="rainDropImg"></div>
                                    <div>54%</div>
                            </div>
                            <div className="generalWeather"></div>
                            <div className="lowTempContainer">Lowest:
                                    <div class="lowestTemp">55</div>
                                    <span>&#176;</span>
                                    <div class="fahrenheitDisplay">F</div><div class="celsiusDisplay hidden">C</div>
                            </div>
                            <div class="highTempContainer">Highest:
                                    <div class="highestTemp">75</div>
                                    <span>&#176;</span>
                                    <div class="fahrenheitDisplay">F</div><div class="celsiusDisplay hidden">C</div>
                            </div>
                            {/* <button class="button-9" role="button">Recommended Clothing</button> */}
                        </div>
                    </div>
                    <div id="sevenDayDisplay">
                        <div className="eachDayin7Days">
                            <div className="dayText">Tuesday</div>
                            <div className="rainChance">
                                    <div className="rainDropImg"></div>
                                    <div>54%</div>
                            </div>
                            <div className="generalWeather"></div>
                            <div className="lowTempContainer">Lowest:
                                    <div class="lowestTemp">55</div>
                                    <span>&#176;</span>
                                    <div class="fahrenheitDisplay">F</div><div class="celsiusDisplay hidden">C</div>
                            </div>
                            <div class="highTempContainer">Highest:
                                    <div class="highestTemp">75</div>
                                    <span>&#176;</span>
                                    <div class="fahrenheitDisplay">F</div><div class="celsiusDisplay hidden">C</div>
                            </div>
                            {/* <button class="button-9" role="button">Recommended Clothing</button> */}
                        </div>
                    </div>
                    <div id="sevenDayDisplay">
                        <div className="eachDayin7Days">
                            <div className="dayText">Wednesday</div>
                            <div className="rainChance">
                                    <div className="rainDropImg"></div>
                                    <div>54%</div>
                            </div>
                            <div className="generalWeather"></div>
                            <div className="lowTempContainer">Lowest:
                                    <div class="lowestTemp">55</div>
                                    <span>&#176;</span>
                                    <div class="fahrenheitDisplay">F</div><div class="celsiusDisplay hidden">C</div>
                            </div>
                            <div class="highTempContainer">Highest:
                                    <div class="highestTemp">75</div>
                                    <span>&#176;</span>
                                    <div class="fahrenheitDisplay">F</div><div class="celsiusDisplay hidden">C</div>
                            </div>
                            {/* <button class="button-9" role="button">Recommended Clothing</button> */}
                        </div>
                    </div>
                    <div id="sevenDayDisplay">
                        <div className="eachDayin7Days">
                            <div className="dayText">Thursday</div>
                            <div className="rainChance">
                                    <div className="rainDropImg"></div>
                                    <div>54%</div>
                            </div>
                            <div className="generalWeather"></div>
                            <div className="lowTempContainer">Lowest:
                                    <div class="lowestTemp">55</div>
                                    <span>&#176;</span>
                                    <div class="fahrenheitDisplay">F</div><div class="celsiusDisplay hidden">C</div>
                            </div>
                            <div class="highTempContainer">Highest:
                                    <div class="highestTemp">75</div>
                                    <span>&#176;</span>
                                    <div class="fahrenheitDisplay">F</div><div class="celsiusDisplay hidden">C</div>
                            </div>
                            {/* <button class="button-9" role="button">Recommended Clothing</button> */}
                        </div>
                    </div>
                    <div id="sevenDayDisplay">
                        <div className="eachDayin7Days">
                            <div className="dayText">Friday</div>
                            <div className="rainChance">
                                    <div className="rainDropImg"></div>
                                    <div>54%</div>
                            </div>
                            <div className="generalWeather"></div>
                            <div className="lowTempContainer">Lowest:
                                    <div class="lowestTemp">55</div>
                                    <span>&#176;</span>
                                    <div class="fahrenheitDisplay">F</div><div class="celsiusDisplay hidden">C</div>
                            </div>
                            <div class="highTempContainer">Highest:
                                    <div class="highestTemp">75</div>
                                    <span>&#176;</span>
                                    <div class="fahrenheitDisplay">F</div><div class="celsiusDisplay hidden">C</div>
                            </div>
                            {/* <button class="button-9" role="button">Recommended Clothing</button> */}
                        </div>
                    </div>
                    <div id="sevenDayDisplay">
                        <div className="eachDayin7Days">
                            <div className="dayText">Saturday</div>
                            <div className="rainChance">
                                    <div className="rainDropImg"></div>
                                    <div>54%</div>
                            </div>
                            <div className="generalWeather"></div>
                            <div className="lowTempContainer">Lowest:
                                    <div class="lowestTemp">55</div>
                                    <span>&#176;</span>
                                    <div class="fahrenheitDisplay">F</div><div class="celsiusDisplay hidden">C</div>
                            </div>
                            <div class="highTempContainer">Highest:
                                    <div class="highestTemp">75</div>
                                    <span>&#176;</span>
                                    <div class="fahrenheitDisplay">F</div><div class="celsiusDisplay hidden">C</div>
                            </div>
                            {/* <button class="button-9" role="button">Recommended Clothing</button> */}
                        </div>
                    </div>
                    
                </div>
            </div>
            <div id="rightContainer"></div>
        </div>
    )
};

export default Home;