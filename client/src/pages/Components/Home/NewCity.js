import React from "react";
import "../../../newcitypopup.css";
import { useState } from "react";

const NewCity = () => {
    
    const closeAddCityPopup = e => {
        let userClicked = e.currentTarget;
        userClicked.parentNode.parentNode.parentNode.classList.add("hidden");
    };

    const [search, setSearch] = useState("");

    const handleCountryChange = (event) => {
        setSearch(event.currentTarget.value);
        document.getElementById("submitNewCity").disabled = false;
        document.getElementById("submitNewCity").classList.remove("disabled");
    };

    const handleAddCity = async (e) => {
        if (!search) {
            alert("Please enter valid search");
            return;
        }
        
        let endPoint = `https://api.unsplash.com/search/photos?page1&query=${search}&client_id=KD3JlHXUemNJy8AIoBejnopOYu4gbmvTsuoal9N4jZk`;
        const response = await fetch(endPoint);

        if (response.status === 404) {
            alert("City not found");
            return;
        } else if (response.status !== 200) {
            alert("Error happened with Unsplash API's side");
            return;
        }

        const data = await response.json();
        let getRandomPic = Math.floor(Math.random() * data.results.length);
        let getURL;
        try {
            getURL = new URL(data.results[getRandomPic].urls.regular);
        } catch (error) {
            console.log(error);
            alert("Error. Please try again", error);
            return;
        }

        let getOldCoordinates = JSON.parse(localStorage.getItem("allCoordinates"));
        let end = `https://api.openweathermap.org/geo/1.0/direct?q=${search}&appid=e15a543800b7e60db9e4e04aaf22a037`; // to get new coordinates for new city with api call
        const res = await fetch(end);
        if (res.status !== 200) {
            alert("Something went wrong. Try again");
            return;
        }
        const resData = await res.json();
        if (resData.length === 0) {
            alert("Error trying to get latitude and longitutde for city");
            return;
        }

        // update to new city
        let getAll = document.querySelectorAll(".cityPic");
        getAll[2].children[0].src = getURL.href;   // update with the new src
        getAll[2].children[0].alt = search;

        let getImages = JSON.parse(localStorage.getItem("allPicsSrc")); // get the src of all the images
        let newImages = [getImages[1], getImages[2], getURL.href]; // create a new variable with the new sources

        const newCoor = [resData[0].lat, resData[0].lon];
        let newCoordinates = [getOldCoordinates[1], getOldCoordinates[2], newCoor];
        let newCountry = resData[0].country;
        let newCity = search.split(",")[0];
        let newState = resData[0].state;
        let newSavedLocations;
        let savedLocations = JSON.parse(localStorage.getItem("savedLocations")); // get current saved locations
        if (newState) {
            getAll[2].parentNode.children[1].innerText = `${newCity}, ${newState}, ${newCountry}`; // update the displayed text w/ new city
            newSavedLocations = [savedLocations[1], savedLocations[2], `${newCity}, ${newState}, ${newCountry}`]; // create a new variable with new locations
        } else {
            getAll[2].parentNode.children[1].innerText = `${newCity}, ${newCountry}`; // update the displayed text w/ new city
            newSavedLocations = [savedLocations[1], savedLocations[2], `${newCity}, ${newCountry}`]; // create a new variable with new locations
        }

        localStorage.setItem("savedLocations", JSON.stringify(newSavedLocations)); // save to local storage new 3 locations
        localStorage.setItem("allPicsSrc", JSON.stringify(newImages));
        localStorage.setItem("allCoordinates", JSON.stringify(newCoordinates));

        // update the other 2 leftmost cities
        for (let i = 0; i < 2; i++) {
            getAll[i].children[0].src = newImages[i];
            getAll[i].children[0].alt = newSavedLocations[i];
            getAll[i].parentNode.children[1].innerText = newSavedLocations[i];
        }

        // update the border on the active selected city
        const getAllPics = document.querySelectorAll(".selectCity");
        for (let i = 0; i < getAllPics.length; i++) {
            if (getAllPics[i].children[0].children[0].classList[0] === "cityPicActive") {
                if (i === 0) {
                    getAllPics[i].children[0].children[0].classList.remove("cityPicActive");
                } else {
                    getAllPics[i].children[0].children[0].classList.remove("cityPicActive");
                    getAllPics[i-1].children[0].children[0].classList.add("cityPicActive");
                }
            }
        }

        document.querySelectorAll(".newCityPopup")[0].classList.add("hidden"); // close add city popup
    };

    return (
        <div className="hidden newCityPopup" >
            <div className="innerAddCityPopup">
                <div className="closeBttnDiv">
                    <button onClick={closeAddCityPopup}>Close</button>
                </div>
                <div className="innerInfo">
                    <h3>Add a new city to save</h3>
                    {/* <input type="search" id="citySearch" name="citySearch" placeholder="City" value={citySearch} onChange={handleCityChange}></input> */}
                    <input type="search" id="countrySearch" name="countrySearch" placeholder="Add city ..." value={search} onChange={handleCountryChange}></input>
                    <button onClick={handleAddCity} className="disabled" id="submitNewCity">Submit</button>
                    <h4 className="hidden" id="errorInput">Please try again</h4>
                </div>
            </div>
            <div className="backgroundPopup"></div>
        </div>
    );
};

export default NewCity;