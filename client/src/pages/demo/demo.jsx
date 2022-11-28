import React from 'react';
import './demo.css'
import './demo-Right.css'

function Demo() {
    return (
        <div id="home">
            <div id="mainContainer">

                <div id="leftContainer">

                    <div id="searchContainer">
                        <div id="searchDiv">

                            <div className="search-box">
                                <div className="search-icon"><i className="iconfont icon-sousuo" style={{ fontSize: "40px" }}></i></div>
                                <div id='search-border'>
                                    <form action="" className="search-form">
                                        <input type="text" placeholder="Search new place ..." id="search" />
                                    </form>
                                </div>
                                <div className="go-icon"><i className="fa fa-arrow-right"></i></div>
                            </div>

                        </div>
                    </div>

                    <div className="weatherTitle">
                        <h1>Weather <strong>Forecast</strong></h1>
                    </div>

                    <div id="cities">
                        <div className="selectCity">
                            <div className="cityPic">
                                <img src={require('../../images/CityImages/Berlin.jpg')} />
                            </div>
                            <p>Berlin, Germany</p>
                        </div>
                        <div className="selectCity">
                            <div className="cityPic">
                                <img src={require('../../images/CityImages/Paris.jpg')} />
                            </div>
                            <p>Paris, France</p>
                        </div>
                        <div className="selectCity">
                            <div className="cityPic">
                                <img src={require('../../images/CityImages/NYC.jpg')} />
                            </div>
                            <p>New York, USA</p>
                        </div>
                        <div id="addCity">
                            <p style={{ marginTop: "40%", marginBottom: "10%", fontSize: "30px" }}>+</p>
                            <p style={{ marginTop: "17%", fontSize: "17px" }}>Add City</p>
                        </div>
                    </div>

                    <div id="allWeatherInfo">
                        <div id="howDisplayWeather">
                            <h3 className="howDisplay">Hourly</h3>
                            <h3 className="howDisplay">7 Day</h3>
                            <h3 className="howDisplay">Monthly</h3>
                        </div>
                        <div id="displayWeather">
                            <div className="hidden" id="hourlyDisplay">
                                <div className="eachHour">
                                    <p className="hourText">1:00</p>
                                </div>
                                <div className="eachHour">
                                    <p className="hourText">2:00</p>
                                </div>
                                <div className="eachHour">
                                    <p className="hourText">3:00</p>
                                </div>
                                <div className="eachHour">
                                    <p className="hourText">4:00</p>
                                </div>
                                <div className="eachHour">
                                    <p className="hourText">5:00</p>
                                </div>
                                <div className="eachHour">
                                    <p className="hourText">6:00</p>
                                </div>
                                <div className="eachHour">
                                    <p className="hourText">7:00</p>
                                </div>
                                <div className="eachHour">
                                    <p className="hourText">8:00</p>
                                </div>
                                <div className="eachHour">
                                    <p className="hourText">9:00</p>
                                </div>
                                <div className="eachHour">
                                    <p className="hourText">10:00</p>
                                </div>
                                <div className="eachHour">
                                    <p className="hourText">12:00</p>
                                </div>
                                <div className="eachHour">
                                    <p className="hourText">13:00</p>
                                </div>
                                <div className="eachHour">
                                    <p className="hourText">14:00</p>
                                </div>
                                <div className="eachHour">
                                    <p className="hourText">15:00</p>
                                </div>
                                <div className="eachHour">
                                    <p className="hourText">16:00</p>
                                </div>
                                <div className="eachHour">
                                    <p className="hourText">17:00</p>
                                </div>
                                <div className="eachHour">
                                    <p className="hourText">18:00</p>
                                </div>
                                <div className="eachHour">
                                    <p className="hourText">19:00</p>
                                </div>
                                <div className="eachHour">
                                    <p className="hourText">20:00</p>
                                </div>
                                <div className="eachHour">
                                    <p className="hourText">21:00</p>
                                </div>
                                <div className="eachHour">
                                    <p className="hourText">22:00</p>
                                </div>
                                <div className="eachHour">
                                    <p className="hourText">23:00</p>
                                </div>
                                <div className="eachHour">
                                    <p className="hourText">24:00</p>
                                </div>
                            </div>

                            <div className="hidden" id="sevenDayDisplay">
                                <div className="eachDayin7Days">
                                    <div className="dayText">Sunday</div>
                                    <div className="rainChance">

                                        <div className="rainDropImg"><img src={require('../../images/raindrop.png')} /></div>
                                        <div>54%</div>
                                    </div>
                                    <div className="generalWeather"><img src={require('../../images/sun.png')} /></div>
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
                                    <button className="button-9" role="button">Recommended Clothing</button>
                                </div>
                                <div className="eachDayin7Days">
                                    <div className="dayText">Monday</div>
                                    <div className="rainChance">
                                        <div className="rainDropImg"><img src={require('../../images/raindrop.png')} /></div>
                                        <div>54%</div>
                                    </div>
                                    <div className="generalWeather"><img src={require('../../images/cloudyNoSun.png')} /></div>
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
                                    <button className="button-9" role="button">Recommended Clothing</button>
                                </div>
                                <div className="eachDayin7Days">
                                    <div className="dayText">Tuesday</div>
                                    <div className="rainChance">
                                        <div className="rainDropImg"><img src={require('../../images/raindrop.png')} /></div>
                                        <div>54%</div>
                                    </div>
                                    <div className="generalWeather"><img src={require('../../images/cloudyWithSun.png')} /></div>
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
                                    <button className="button-9" role="button">Recommended Clothing</button>
                                </div>
                                <div className="eachDayin7Days">
                                    <div className="dayText">Wednesday</div>
                                    <div className="rainChance">
                                        <div className="rainDropImg"><img src={require('../../images/raindrop.png')} /></div>
                                        <div>54%</div>
                                    </div>
                                    <div className="generalWeather"><img src={require('../../images/cloudyRain.png')} /></div>
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
                                    <button className="button-9" role="button">Recommended Clothing</button>
                                </div>
                                <div className="eachDayin7Days">
                                    <div className="dayText">Thursday</div>
                                    <div className="rainChance">
                                        <div className="rainDropImg"><img src={require('../../images/raindrop.png')} /></div>
                                        <div>54%</div>
                                    </div>
                                    <div className="generalWeather"><img src={require('../../images/sun.png')} /></div>
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
                                    <button className="button-9" role="button">Recommended Clothing</button>
                                </div>
                                <div className="eachDayin7Days">
                                    <div className="dayText">Friday</div>
                                    <div className="rainChance">
                                        <div className="rainDropImg"><img src={require('../../images/raindrop.png')} /></div>
                                        <div>54%</div>
                                    </div>
                                    <div className="generalWeather"><img src={require('../../images/sun.png')} /></div>
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
                                    <button className="button-9" role="button">Recommended Clothing</button>
                                </div>
                                <div className="eachDayin7Days">
                                    <div className="dayText">Saturday</div>
                                    <div className="rainChance">
                                        <div className="rainDropImg"><img src={require('../../images/raindrop.png')} /></div>
                                        <div>54%</div>
                                    </div>
                                    <div className="generalWeather"><img src={require('../../images/sun.png')} /></div>
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
                                    <button className="button-9" role="button">Recommended Clothing</button>
                                </div>
                            </div>
                            <div id="monthlyDisplay">
                                <div className="monthRows">
                                    <div className="eachDayInRow">30
                                        <div className="holdClimatePic"><img src={require('../../images/sun.png')} /></div>
                                    </div>
                                    <div className="eachDayInRow">31
                                        <div className="holdClimatePic"><img src={require('../../images/cloudyWithSun.png')} /></div>
                                    </div>
                                    <div className="eachDayInRow">1
                                        <div className="holdClimatePic"><img src={require('../../images/cloudyNoSun.png')} /></div>
                                    </div>
                                    <div className="eachDayInRow">2
                                        <div className="holdClimatePic"><img src={require('../../images/cloudyRain.png')} /></div>
                                    </div>
                                    <div className="eachDayInRow">3
                                        <div className="holdClimatePic"><img src={require('../../images/cloudyWithSun.png')} /></div>
                                    </div>
                                    <div className="eachDayInRow">4
                                        <div className="holdClimatePic"><img src={require('../../images/sun.png')} /></div>
                                    </div>
                                    <div className="eachDayInRow">5
                                        <div className="holdClimatePic"><img src={require('../../images/sun.png')} /></div>
                                    </div>
                                </div>
                                <div className="monthRows">
                                    <div className="eachDayInRow">6
                                        <div className="holdClimatePic"><img src={require('../../images/sun.png')} /></div>
                                    </div>
                                    <div className="eachDayInRow">7
                                        <div className="holdClimatePic"><img src={require('../../images/cloudyWithSun.png')} /></div>
                                    </div>
                                    <div className="eachDayInRow">8
                                        <div className="holdClimatePic"><img src={require('../../images/cloudyNoSun.png')} /></div>
                                    </div>
                                    <div className="eachDayInRow">9
                                        <div className="holdClimatePic"><img src={require('../../images/cloudyRain.png')} /></div>
                                    </div>
                                    <div className="eachDayInRow">10
                                        <div className="holdClimatePic"><img src={require('../../images/cloudyWithSun.png')} /></div>
                                    </div>
                                    <div className="eachDayInRow">11
                                        <div className="holdClimatePic"><img src={require('../../images/sun.png')} /></div>
                                    </div>
                                    <div className="eachDayInRow">12
                                        <div className="holdClimatePic"><img src={require('../../images/sun.png')} /></div>
                                    </div>
                                </div>
                                <div className="monthRows">
                                    <div className="eachDayInRow">13
                                        <div className="holdClimatePic"><img src={require('../../images/sun.png')} /></div>
                                    </div>
                                    <div className="eachDayInRow">14
                                        <div className="holdClimatePic"><img src={require('../../images/cloudyWithSun.png')} /></div>
                                    </div>
                                    <div className="eachDayInRow">15
                                        <div className="holdClimatePic"><img src={require('../../images/cloudyNoSun.png')} /></div>
                                    </div>
                                    <div className="eachDayInRow">16
                                        <div className="holdClimatePic"><img src={require('../../images/cloudyRain.png')} /></div>
                                    </div>
                                    <div className="eachDayInRow">17
                                        <div className="holdClimatePic"><img src={require('../../images/cloudyWithSun.png')} /></div>
                                    </div>
                                    <div className="eachDayInRow">18
                                        <div className="holdClimatePic"><img src={require('../../images/sun.png')} /></div>
                                    </div>
                                    <div className="eachDayInRow">19
                                        <div className="holdClimatePic"><img src={require('../../images/sun.png')} /></div>
                                    </div>
                                </div>
                                <div className="monthRows">
                                    <div className="eachDayInRow">20
                                        <div className="holdClimatePic"><img src={require('../../images/sun.png')} /></div>
                                    </div>
                                    <div className="eachDayInRow">21
                                        <div className="holdClimatePic"><img src={require('../../images/cloudyWithSun.png')} /></div>
                                    </div>
                                    <div className="eachDayInRow">22
                                        <div className="holdClimatePic"><img src={require('../../images/cloudyNoSun.png')} /></div>
                                    </div>
                                    <div className="eachDayInRow">23
                                        <div className="holdClimatePic"><img src={require('../../images/cloudyRain.png')} /></div>
                                    </div>
                                    <div className="eachDayInRow">24
                                        <div className="holdClimatePic"><img src={require('../../images/cloudyWithSun.png')} /></div>
                                    </div>
                                    <div className="eachDayInRow">25
                                        <div className="holdClimatePic"><img src={require('../../images/sun.png')} /></div>
                                    </div>
                                    <div className="eachDayInRow">26
                                        <div className="holdClimatePic"><img src={require('../../images/sun.png')} /></div>
                                    </div>
                                </div>
                                <div className="monthRows">
                                    <div className="eachDayInRow">27
                                        <div className="holdClimatePic"><img src={require('../../images/sun.png')} /></div>
                                    </div>
                                    <div className="eachDayInRow">28
                                        <div className="holdClimatePic"><img src={require('../../images/cloudyWithSun.png')} /></div>
                                    </div>
                                    <div className="eachDayInRow">29
                                        <div className="holdClimatePic"><img src={require('../../images/cloudyNoSun.png')} /></div>
                                    </div>
                                    <div className="eachDayInRow">30
                                        <div className="holdClimatePic"><img src={require('../../images/cloudyRain.png')} /></div>
                                    </div>
                                    <div className="eachDayInRow">1
                                        <div className="holdClimatePic"><img src={require('../../images/cloudyWithSun.png')} /></div>
                                    </div>
                                    <div className="eachDayInRow">2
                                        <div className="holdClimatePic"><img src={require('../../images/sun.png')} /></div>
                                    </div>
                                    <div className="eachDayInRow">3
                                        <div className="holdClimatePic"><img src={require('../../images/sun.png')} /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div id="rightContainer">
                    <div id="loginContainer">
                        <div id="holdAccountPic"><img src={require("../../images/account.png")} /></div>
                    </div>
                    <div className="weatherTitle"></div>
                    <div id="todayInfo">
                        <div id="todayDate">
                            <div id="imgCurrentWeather"><img src={require("../../images/sun.png")} /></div>
                            <div id="holdText">
                                <h2>Today</h2>
                                <p id="todayText">Fri, Oct 28 2022</p>
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
}

export default Demo;