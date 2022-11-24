export default async function getHourlyAndWeeklyWeather(location) {
    if (!location) {
        alert("Unexpected error. Try again");
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

    // the location provided to us is not in the saved location, so we need to go get that lat and lon for that location
    if (!ifSavedLocation) {
        // alert("Not in saved locations");
        // let endpoint = `https://api.openweathermap.org/geo/1.0/direct?q=${getSearch[0]}&appid=e15a543800b7e60db9e4e04aaf22a037`; // api to get coordinates lat and lon
        // const response = await fetch(endpoint);
        // const responseData = await response.json();
        // const newCoor = [responseData[0].lat, responseData[0].lon];
        // getAllCoordinates = newCoor;
        return;
    } else {
        getAllCoordinates = JSON.parse(localStorage.getItem("allCoordinates"));
        if (!getAllCoordinates) {
            let defaultLatLong = [[40.7128,-74.0060],[48.8566,2.3522],[52.5200,13.4050]];
            getAllCoordinates = defaultLatLong;
        }
        let getNeededCoordinates = getAllCoordinates[index];
        let endpoint = `https://api.openweathermap.org/data/2.5/onecall?lat=${getNeededCoordinates[0]}&lon=${getNeededCoordinates[1]}&exclude=current,minutely,alerts&units=imperial&appid=e15a543800b7e60db9e4e04aaf22a037`;
        const response = await fetch(endpoint);

        if (response.status !== 200) {
            alert("Unexpected error happened. Please try again");
            return;
        }

        const data = await response.json();

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
                const iconURL = `https://openweathermap.org/img/wn/${hourIcon}@2x.png`;
                const hourDescription = value.weather[0].description;
                const currentHourData = [hourFormat, hourTemp, iconURL, hourDescription, rainProb];
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
                let iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
                let getProb = value.pop;
                let rainProb = getProb * 100;
                let minTemp = value.temp.min.toFixed(0);
                let maxTemp = value.temp.max.toFixed(0);
                let currentDayData = [dayname, rainProb, iconURL, minTemp, maxTemp];
                sevenDayData.push(currentDayData);
            }
        });
    }

    return [hourlyData, sevenDayData];
}


/**This is the code for the old weather api */

// export default async function display7DayData(location) {
//     if (!location) {
//         alert("Unexpected error. Try again");
//     }

//     let ifSavedLocation = true;
//     let index = 0;
//     const getSavedLocations = JSON.parse(localStorage.getItem("savedLocations")); 
//     for (index = 0; index < getSavedLocations.length; index++) {
//         if (location === getSavedLocations[index]) {
//             break;
//         }
//     }

//     if (!ifSavedLocation) {
//         alert("Not in saved locations");
//         return;
//     }

//     let getAllCoordinates = JSON.parse(localStorage.getItem("allCoordinates"));
//     if (!getAllCoordinates) {
//         getAllCoordinates = [[40.7127281,-74.0060152],[48.8588897,2.3200410217200766],[52.5170365,13.3888599]];
//     }

//     let getNeededCoordinates = getAllCoordinates[index];
//     let endpoint = `https://api.weather.gov/points/${getNeededCoordinates[0]},${getNeededCoordinates[1]}`;
//     const response = await fetch(endpoint);

//     if (response.status !== 200) {
//         alert("Unexpected error happened. Please try again");
//         return;
//     }

//     const data = await response.json();
//     let forecastData = await data.properties.forecast;
//     let response2 = await fetch(forecastData);

//     if (response2.status !== 200) {
//         alert("Unexpected error happened. Please try again");
//         return;
//     }

//     const data2 = await response2.json();
//     let dailyData = await data2.properties.periods;
//     let dataForAllDays = [];
//     dailyData.forEach((value, idx) => {
//         if (value.name.includes("Night") === false && dataForAllDays.length !== 7) {
//             let day = value.name;
//             let temp = value.temperature;
//             let icon = value.icon;
//             let currentDayData = [day, temp, icon];
//             dataForAllDays.push(currentDayData);
//         }
//     });

//     return dataForAllDays;
//     // let dataForAllDays = [];

//     // data.daily.forEach((value, idx) => {
//     //     if (idx >= 0 && idx !== 7 && dataForAllDays.length !== 7) {
//     //         let dayname = new Date(value.dt * 1000).toLocaleDateString("en", {
//     //             weekday: "long",
//     //         });
//     //         let icon = value.weather[0].icon;
//     //         let iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
//     //         let getProb = value.pop;
//     //         let rainProb = getProb * 100;
//     //         let minTemp = value.temp.min.toFixed(0);
//     //         let maxTemp = value.temp.max.toFixed(0);
//     //         let currentDayData = [dayname, rainProb, iconURL, minTemp, maxTemp];
//     //         dataForAllDays.push(currentDayData);
//     //     }
//     // });

//     // return dataForAllDays;
// }