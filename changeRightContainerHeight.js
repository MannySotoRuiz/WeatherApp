console.log("Hello World");


let howDisplayWeather = document.getElementById("howDisplayWeather");
let weeklyDisplay = document.getElementById("sevenDayDisplay");
let monthlyDisplay = document.getElementById("monthlyDisplay");
let hourlyDisplay = document.getElementById("hourlyDisplay");

howDisplayWeather.addEventListener("click", function(event) {
   let display = event.path[0].innerHTML;
   if (display == "7 Day") {
    console.log(weeklyDisplay);
    monthlyDisplay.classList.add("hidden");
    weeklyDisplay.classList.remove("hidden");
    hourlyDisplay.classList.add("hidden");
    document.getElementById("leftContainer").style.height = "900px";
    document.getElementById("rightContainer").style.height = "900px";

   } else if (display == "Monthly") {
    console.log(monthlyDisplay);
    weeklyDisplay.classList.add("hidden");
    monthlyDisplay.classList.remove("hidden");
    hourlyDisplay.classList.add("hidden");
    document.getElementById("leftContainer").style.height = "1000px";
    document.getElementById("rightContainer").style.height = "1000px";

   } else {
    weeklyDisplay.classList.add("hidden");
    monthlyDisplay.classList.add("hidden");
    hourlyDisplay.classList.remove("hidden");
    document.getElementById("leftContainer").style.height = "1830px";
    document.getElementById("rightContainer").style.height = "1830px";
   }
});