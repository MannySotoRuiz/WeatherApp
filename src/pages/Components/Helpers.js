export default async function getCityWeatherData(e) {
    let index;
    for (index = 0; index < 3; index++) {
        if (e.currentTarget.parentNode === e.currentTarget.parentNode.parentNode.children[index]) {
            break;
        }
    }
    let getAllCoordinates = JSON.parse(localStorage.getItem("allCoordinates"));
    let getNeededCoordinates = getAllCoordinates[index];
    let endpoint = `https://api.openweathermap.org/data/2.5/onecall?lat=${getNeededCoordinates[0]}&lon=${getNeededCoordinates[1]}&exclude=current,minutely,hourly,alerts&units=imperial&appid=e15a543800b7e60db9e4e04aaf22a037`;
    const response = await fetch(endpoint);
    const data = await response.json();
    
    data.daily.forEach((value, index) => {
        if (index >= 0) {
            let dayname = new Date(value.dt * 1000).toLocaleDateString("en", {
                weekday: "long",
            });
            let icon = value.weather[0].icon;
            let temp = value.temp.day.toFixed(0);

            console.log(dayname, icon, temp);
        }
    });

}