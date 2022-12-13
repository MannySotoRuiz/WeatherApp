// import weather icon images
import sun from "../../images/sun.png";
import sunCloudy from "../../images/cloudyWithSun.png";
import cloudyNoSun from "../../images/cloudyNoSun.jpg";
import sunRain from "../../images/sunRain.png";
import cloudyRain from "../../images/cloudyRain.png";
import thunderstorm from "../../images/thunderstorm.png";
import snow from "../../images/snow.png";
import mist from "../../images/mist.png";
import night from "../../images/night2.png";

// import background images
import sun2 from "../../images/Backgrounds/sun.jpg";
import sunCloudy2 from "../../images/Backgrounds/cloudyWithSun.jpg";
import cloudyNoSun2 from "../../images/Backgrounds/cloudyNoSun.jpg";
import sunRain2 from "../../images/Backgrounds/sunRain.jpg";
import cloudyRain2 from "../../images/Backgrounds/cloudyRain.webp";
import thunderstorm2 from "../../images/Backgrounds/thunderstorm.jpg";
import snow2 from "../../images/Backgrounds/snow.jpg";
import mist2 from "../../images/Backgrounds/mist.jpg";
import night2 from "../../images/Backgrounds/night.webp";
import nightSnow from "../../images/nightsnow.jpg";
import nightMist from "../../images/nightmist.jpg";

export default async function getHourly_Weekly_CurrentWeather(location) {
    if (!location) {
        alert("Unexpected error. Try again");
        return;
    }

    let ifSavedLocation = false;
    let index = 0;
    const getSavedLocations = JSON.parse(localStorage.getItem("savedLocations")); 
    for (index = 0; index < getSavedLocations.length; index++) {
        if (location === getSavedLocations[index]) {
            ifSavedLocation = true;
            break;
        }
    }

    let sevenDayData = [];
    let hourlyData = [];
    let getAllCoordinates;
    let currentWeatherData;

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
        "icon50n": mist,
        "icon13n": snow
    };

    const backGroundMap = {
        "icon01d": sun2,
        "icon02d": sunCloudy2,
        "icon03d": cloudyNoSun2,
        "icon04d": cloudyNoSun2,
        "icon09d": cloudyRain2,
        "icon10d": sunRain2,
        "icon11d": thunderstorm2,
        "icon13d": snow2,
        "icon50d": mist2,
        "icon01n": night2,
        "icon02n": night2,
        "icon03n": cloudyNoSun2,
        "icon04n": night2,
        "icon09n": cloudyRain2,
        "icon10n": cloudyRain2,
        "icon11n": thunderstorm2,
        "icon50n": nightMist,
        "icon13n": nightSnow
    };

    const errorCurrentData = [0, 0, 0, sun, "NULL", 0, sun2];
    const error7DayData = [
        ["NULL", 0, sun, 0, 0, "NULL"],
        ["NULL", 0, sun, 0, 0, "NULL"],
        ["NULL", 0, sun, 0, 0, "NULL"],
        ["NULL", 0, sun, 0, 0, "NULL"],
        ["NULL", 0, sun, 0, 0, "NULL"],
        ["NULL", 0, sun, 0, 0, "NULL"],
        ["NULL", 0, sun, 0, 0, "NULL"]
    ];
    const errorHrData = [
        ["NULL", 0, sun, "NULL", 0],
        ["NULL", 0, sun, "NULL", 0],
        ["NULL", 0, sun, "NULL", 0],
        ["NULL", 0, sun, "NULL", 0],
        ["NULL", 0, sun, "NULL", 0],
        ["NULL", 0, sun, "NULL", 0],
        ["NULL", 0, sun, "NULL", 0],
        ["NULL", 0, sun, "NULL", 0],
        ["NULL", 0, sun, "NULL", 0],
        ["NULL", 0, sun, "NULL", 0],
        ["NULL", 0, sun, "NULL", 0],
        ["NULL", 0, sun, "NULL", 0],
        ["NULL", 0, sun, "NULL", 0],
        ["NULL", 0, sun, "NULL", 0],
        ["NULL", 0, sun, "NULL", 0],
        ["NULL", 0, sun, "NULL", 0],
        ["NULL", 0, sun, "NULL", 0],
        ["NULL", 0, sun, "NULL", 0],
        ["NULL", 0, sun, "NULL", 0],
        ["NULL", 0, sun, "NULL", 0],
        ["NULL", 0, sun, "NULL", 0],
        ["NULL", 0, sun, "NULL", 0],
        ["NULL", 0, sun, "NULL", 0],
        ["NULL", 0, sun, "NULL", 0],
    ];

    let highestTemp7days = [];
    document.getElementById("displayErrorMsg").classList.add("hidden");
    // console.log(location);
    // the location provided to us is not in the saved location, so we need to go get that lat and lon for that location
    if (!ifSavedLocation) {
        // alert("Not in saved locations");
        let getCity = location.split(",");
        let endpointCoord = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=e15a543800b7e60db9e4e04aaf22a037`; // api to get coordinates lat and lon
        const response = await fetch(endpointCoord);
        if (response.status !== 200) {
            document.getElementById("homeErrorMsg").innerText = `Error: Geocoding API crashed`;
            console.log("geocoding api crashed");
            localStorage.setItem("location", JSON.stringify("New York, USA"));
            document.getElementById("displayErrorMsg").classList.remove("hidden");
            return [errorHrData, error7DayData, errorCurrentData];
        }
        const responseData = await response.json();
        // console.log(responseData);
        if (responseData.length === 0) {
            document.getElementById("homeErrorMsg").innerText = `Error: API couldn't find latitude and longitude for ${getCity}`;
            console.log("couldnt find lat and lon by the api");
            localStorage.setItem("location", JSON.stringify("New York, USA"));
            document.getElementById("displayErrorMsg").classList.remove("hidden");
            return [errorHrData, error7DayData, errorCurrentData];
        }
        const newCoor = [responseData[0].lat, responseData[0].lon];
        getAllCoordinates = newCoor;
        let endpoint = `https://api.openweathermap.org/data/2.5/onecall?lat=${getAllCoordinates[0]}&lon=${getAllCoordinates[1]}&exclude=minutely,alerts&units=imperial&appid=e15a543800b7e60db9e4e04aaf22a037`;
        const res = await fetch(endpoint);
        if (response.status === 429) {
            const untilAPIworks = [47, 35, 50, 60, 40, 39, 30];
            localStorage.setItem("highestTemp7Days", JSON.stringify(untilAPIworks));
            document.getElementById("homeErrorMsg").innerText = "Error: Weather API reached limit calls";
            return [errorHrData, error7DayData, errorCurrentData];
        } else if (response.status !== 200) {
            document.getElementById("homeErrorMsg").innerText = "Error with Weather API";
            return [errorHrData, error7DayData, errorCurrentData]; 
        }

        const data = await res.json();

        // this is the code to get the current weather information
        const currentTemp = data.current.temp.toFixed(0);;
        const currentSunset = new Date(data.current.sunset * 1000);
        const sunsetHour = currentSunset.getHours();
        const sunsetMins = currentSunset.getMinutes();
        let newSunsetTime;
        if (sunsetHour === 0) {
            newSunsetTime = `12:${sunsetMins} am`;
        } else if (sunsetHour > 11) {
            const difference = sunsetHour - 12;
            if (difference === 0) {
                newSunsetTime = `12:${sunsetMins} pm`;
            } else {
                newSunsetTime = `${difference}:${sunsetMins} pm`;
            }
        } else {
            newSunsetTime = `${sunsetHour}:${sunsetMins} am`;
        }
        const currentHumidity = data.current.humidity;
        const currentIcon = data.current.weather[0].icon;
        let formatIcon = `icon${currentIcon}`;
        // const currentIconURL = `https://openweathermap.org/img/wn/${currentIcon}@2x.png`;
        const currentDesc = data.current.weather[0].description;
        const currentFeels = data.current.feels_like.toFixed(0);
        currentWeatherData = [currentTemp, newSunsetTime, currentHumidity, picMap[formatIcon], currentDesc, currentFeels, backGroundMap[formatIcon]];

        // this code is to get the hourly data
        data.hourly.forEach((value, idx) => {
            if (idx < 24 && hourlyData.length !== 24) {
                const currentDate = new Date(value.dt * 1000);
                const currentHour = currentDate.getHours();
                let hourFormat;
                if (currentHour === 0) {
                    hourFormat = `12:00 am`;
                } else if (currentHour > 11) {
                    const difference = currentHour - 12;
                    if (difference === 0) {
                        hourFormat = `12:00 pm`;
                    } else {
                        hourFormat = `${difference}:00 pm`;
                    }
                } else {
                    hourFormat = `${currentHour}:00 am`;
                }
                const hourTemp = value.temp.toFixed(0);
                const rainProb = value.pop * 100;
                const hourIcon = value.weather[0].icon;
                // console.log(hourIcon);
                let formatIcon = `icon${hourIcon}`;
                // const iconURL = `https://openweathermap.org/img/wn/${hourIcon}@2x.png`;
                const hourDescription = value.weather[0].description;
                const currentHourData = [hourFormat, hourTemp, picMap[formatIcon], hourDescription, rainProb];
                hourlyData.push(currentHourData);
            }
        });

        // this code is to get the 7 day data
        data.daily.forEach((value, idx) => {
            if (idx >= 0 && idx !== 7 && sevenDayData.length !== 7) {
                let dayname = new Date(value.dt * 1000).toLocaleDateString("en", {
                    weekday: "long",
                });
                let icon = value.weather[0].icon;
                // let iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
                let getProb = value.pop;
                let rainProb = getProb * 100;
                let formatIcon = `icon${icon}`;
                let minTemp = value.temp.min.toFixed(0);
                let maxTemp = value.temp.max.toFixed(0);
                let dailyDesc = value.weather[0].description;
                let currentDayData = [dayname, rainProb, picMap[formatIcon], minTemp, maxTemp, dailyDesc];
                sevenDayData.push(currentDayData);
                highestTemp7days.push(maxTemp);
            }
        });

    } else {
        getAllCoordinates = JSON.parse(localStorage.getItem("allCoordinates"));
        if (!getAllCoordinates) {
            let defaultLatLong = [[40.7128,-74.0060],[48.8566,2.3522],[52.5200,13.4050]];
            getAllCoordinates = defaultLatLong;
        }
        let getNeededCoordinates = getAllCoordinates[index];
        let endpoint = `https://api.openweathermap.org/data/2.5/onecall?lat=${getNeededCoordinates[0]}&lon=${getNeededCoordinates[1]}&exclude=minutely,alerts&units=imperial&appid=e15a543800b7e60db9e4e04aaf22a037
        `;
        const response = await fetch(endpoint);
        if (response.status === 429) {
            const untilAPIworks = [47, 35, 50, 60, 40, 39, 30];
            localStorage.setItem("highestTemp7Days", JSON.stringify(untilAPIworks));
            document.getElementById("homeErrorMsg").innerText = "Error: Weather API reached limit calls";
            document.getElementById("displayErrorMsg").classList.remove("hidden");
            return [errorHrData, error7DayData, errorCurrentData];
        } else if (response.status !== 200) {
            document.getElementById("homeErrorMsg").innerText = "Error with Weather API";
            document.getElementById("displayErrorMsg").classList.remove("hidden");
            return [errorHrData, error7DayData, errorCurrentData]; 
        }

        const data = await response.json();

        // this is the code to get the current weather information
        const currentTemp = data.current.temp.toFixed(0);;
        const currentSunset = new Date(data.current.sunset * 1000);
        const sunsetHour = currentSunset.getHours();
        const sunsetMins = currentSunset.getMinutes();
        let newSunsetTime;
        if (sunsetHour === 0) {
            newSunsetTime = `12:${sunsetMins} am`;
        } else if (sunsetHour > 11) {
            const difference = sunsetHour - 12;
            if (difference === 0) {
                newSunsetTime = `12:${sunsetMins} pm`;
            } else {
                newSunsetTime = `${difference}:${sunsetMins} pm`;
            }
        } else {
            newSunsetTime = `${sunsetHour}:${sunsetMins} am`;
        }
        const currentHumidity = data.current.humidity;
        const currentIcon = data.current.weather[0].icon;
        let formatIcon = `icon${currentIcon}`;
        // const currentIconURL = `https://openweathermap.org/img/wn/${currentIcon}@2x.png`;
        const currentDesc = data.current.weather[0].description;
        const currentFeels = data.current.feels_like.toFixed(0);
        currentWeatherData = [currentTemp, newSunsetTime, currentHumidity, picMap[formatIcon], currentDesc, currentFeels, backGroundMap[formatIcon]];

        // this code is to get the hourly data
        data.hourly.forEach((value, idx) => {
            if (idx < 24 && hourlyData.length !== 24) {
                const currentDate = new Date(value.dt * 1000);
                const currentHour = currentDate.getHours();
                let hourFormat;
                if (currentHour === 0) {
                    hourFormat = `12:00 am`;
                } else if (currentHour > 11) {
                    const difference = currentHour - 12;
                    if (difference === 0) {
                        hourFormat = `12:00 pm`;
                    } else {
                        hourFormat = `${difference}:00 pm`;
                    }
                } else {
                    hourFormat = `${currentHour}:00 am`;
                }
                const hourTemp = value.temp.toFixed(0);
                const rainProb = value.pop * 100;
                const hourIcon = value.weather[0].icon;
                let formatIcon = `icon${hourIcon}`;
                // const iconURL = `https://openweathermap.org/img/wn/${hourIcon}@2x.png`;
                const hourDescription = value.weather[0].description;
                const currentHourData = [hourFormat, hourTemp, picMap[formatIcon], hourDescription, rainProb];
                hourlyData.push(currentHourData);
            }
        });

        // this code is to get the 7 day data
        data.daily.forEach((value, idx) => {
            if (idx >= 0 && idx !== 7 && sevenDayData.length !== 7) {
                let dayname = new Date(value.dt * 1000).toLocaleDateString("en", {
                    weekday: "long",
                });
                let icon = value.weather[0].icon;
                // let iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
                let getProb = value.pop;
                let rainProb = getProb * 100;
                let formatIcon = `icon${icon}`;
                let minTemp = value.temp.min.toFixed(0);
                let maxTemp = value.temp.max.toFixed(0);
                let dailyDesc = value.weather[0].description;
                let currentDayData = [dayname, rainProb, picMap[formatIcon], minTemp, maxTemp, dailyDesc];
                sevenDayData.push(currentDayData);
                highestTemp7days.push(maxTemp);
            }
        });
    }
    localStorage.setItem("highestTemp7Days", JSON.stringify(highestTemp7days));
    return [hourlyData, sevenDayData, currentWeatherData];
}