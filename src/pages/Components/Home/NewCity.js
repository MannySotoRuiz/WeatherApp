import React from "react";
import "../../../newcitypopup.css";
import { useState } from "react";

const NewCity = () => {
    
    const closeAddCityPopup = e => {
        let userClicked = e.currentTarget;
        userClicked.parentNode.parentNode.parentNode.classList.add("hidden");
    };

    const [citySearch, setCity] = useState("");
    const [countrySearch, setCountry] = useState("");

    const handleCityChange = (event) => {
        setCity(event.currentTarget.value);
    };

    const handleCountryChange = (event) => {
        setCountry(event.currentTarget.value);
        document.getElementById("submitNewCity").disabled = false;
        document.getElementById("submitNewCity").classList.remove("disabled");
    };

    const handleAddCity = async (e) => {
        if (!citySearch || !countrySearch) {
            alert("Please enter valid search");
            return;
        }
        let getSearch = [citySearch, countrySearch];
        let getCity = getSearch[0].toLocaleLowerCase();
        let endPoint = `https://api.unsplash.com/search/photos?page1&query=${getCity}&client_id=${process.env.REACT_APP_ACCESS_KEY}`;
        const response = await fetch(endPoint);

        if (response.status === 404) {
            alert("City not found");
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

        // update to new city
        let getAll = document.querySelectorAll(".cityPic");
        getAll[2].children[0].src = getURL.href;   // update with the new src
        if (data.results[getRandomPic].alt_description) { // updatet the alt description with the new pic
            getAll[2].children[0].alt = `${getSearch[0]}, ${getSearch[1]}: ${data.results[getRandomPic].alt_description}`;
        } else {
            getAll[2].children[0].alt = `${getSearch[0]}, ${getSearch[1]}`;
        }
        getAll[2].parentNode.children[1].innerText = `${getSearch[0]}, ${getSearch[1]}`; // update the displayed text w/ new city

        let savedLocations = JSON.parse(localStorage.getItem("savedLocations")); // get current saved locations
        let newSavedLocations = [savedLocations[1], savedLocations[2], `${getSearch[0]}, ${getSearch[1]}`]; // create a new variable with new locations
        let getImages = JSON.parse(localStorage.getItem("allPicsSrc")); // get the src of all the images
        let newImages = [getImages[1], getImages[2], getURL.href]; // create a new variable with the new sources
        localStorage.setItem("savedLocations", JSON.stringify(newSavedLocations)); // save to local storage new 3 locations
        localStorage.setItem("allPicsSrc", JSON.stringify(newImages));

        // update the other 2 leftmost cities
        for (let i = 0; i < 2; i++) {
            getAll[i].children[0].src = newImages[i];
            getAll[i].children[0].alt = newSavedLocations[i];
            getAll[i].parentNode.children[1].innerText = newSavedLocations[i];
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
                    <input style={{ width: "30%" }} type="search" id="citySearch" name="citySearch" placeholder="City" value={citySearch} onChange={handleCityChange}></input>
                    <input style={{ width: "30%" }} type="search" id="countrySearch" name="countrySearch" placeholder="Country" value={countrySearch} onChange={handleCountryChange}></input>
                    <button onClick={handleAddCity} className="disabled" id="submitNewCity">Submit</button>
                    <h4 className="hidden" id="errorInput">Please try again</h4>
                </div>
            </div>
            <div className="backgroundPopup"></div>
        </div>
    );
};

export default NewCity;