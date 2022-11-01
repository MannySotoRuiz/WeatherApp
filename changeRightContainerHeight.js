console.log("Hello World");


let howDisplayWeather = document.getElementById("howDisplayWeather");
let weeklyDisplay = document.getElementById("sevenDayDisplay");
let monthlyDisplay = document.getElementById("monthlyDisplay");

howDisplayWeather.addEventListener("click", function(event) {
   let display = event.path[0].innerHTML;
   if (display == "7 Day") {
    console.log(weeklyDisplay);
    monthlyDisplay.classList.add("hidden");
    weeklyDisplay.classList.remove("hidden");
   } else if (display == "Monthly") {
    console.log(monthlyDisplay);
    weeklyDisplay.classList.add("hidden");
    monthlyDisplay.classList.remove("hidden");
   } else {
    console.log("Hourly");
   }
});