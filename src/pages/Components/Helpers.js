export default async function display7DayData(location) {
    if (!location) {
        alert("Unexpected error. Try again");
    }

    let ifSavedLocation = true;
    let index = 0;
    const getSavedLocations = JSON.parse(localStorage.getItem("savedLocations")); 
    for (index = 0; index < getSavedLocations.length; index++) {
        if (location === getSavedLocations[index]) {
            break;
        }
    }

    if (!ifSavedLocation) {
        alert("Not in saved locations");
        return;
    }

    let getAllCoordinates = JSON.parse(localStorage.getItem("allCoordinates"));
    let getNeededCoordinates = getAllCoordinates[index];
    let endpoint = `https://api.openweathermap.org/data/2.5/onecall?lat=${getNeededCoordinates[0]}&lon=${getNeededCoordinates[1]}&exclude=current,minutely,hourly,alerts&units=imperial&appid=e15a543800b7e60db9e4e04aaf22a037`;
    const response = await fetch(endpoint);

    if (response.status !== 200) {
        alert("Unexpected error happened. Please try again");
        return;
    }

    const data = await response.json();

    let dataForAllDays = [];

    data.daily.forEach((value, idx) => {
        if (idx >= 0 && idx !== 7 && dataForAllDays.length !== 7) {
            let dayname = new Date(value.dt * 1000).toLocaleDateString("en", {
                weekday: "long",
            });
            let icon = value.weather[0].icon;
            let iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
            let getProb = value.pop;
            let rainProb = getProb * 100;
            let minTemp = value.temp.min.toFixed(0);
            let maxTemp = value.temp.max.toFixed(0);
            let currentDayData = [dayname, rainProb, iconURL, minTemp, maxTemp];
            dataForAllDays.push(currentDayData);
        }
    });

    return dataForAllDays;
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
//     //         let iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
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