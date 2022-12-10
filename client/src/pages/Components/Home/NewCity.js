import React, { useEffect, useRef } from "react";
import "../../../newcitypopup.css";
import { useState } from "react";

let autoComplete;

// dynamically load JavaScript files in our html with callback when finished
const loadScript = (url, callback) => {
    let script = document.createElement("script"); // create script tag
    script.type = "text/javascript";

    // when script state is ready and loaded or complete we will call callback
    if (script.readyState) {
    script.onreadystatechange = function() {
        if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
        }
    };
    } else {
        script.onload = () => callback();
    }

    script.src = url; // load by url
    document.getElementsByTagName("head")[0].appendChild(script); // append to head
};

// handle when the script is loaded we will assign autoCompleteRef with google maps place autocomplete
function handleScriptLoad(updateQuery, autoCompleteRef) {
    // assign autoComplete with Google maps place one time
    autoComplete = new window.google.maps.places.Autocomplete(
        autoCompleteRef.current,
        { types: ["(cities)"] }
    );
    autoComplete.setFields(["address_components", "formatted_address"]); // specify what properties we will get from API
    // add a listener to handle when the place is selected
    autoComplete.addListener("place_changed", () =>
        handlePlaceSelect(updateQuery)
    );
}

async function handlePlaceSelect(updateQuery) {
    const addressObject = autoComplete.getPlace(); // get place from google api
    const query = addressObject.formatted_address;
    updateQuery(query);
    console.log(addressObject.formatted_address);
    document.getElementById("submitNewCity").disabled = false;
}

const NewCity = () => {

    /// Google API

    const [query2, setQuery2] = useState("");
    const autoCompleteRef = useRef(null);

    useEffect(() => {
        loadScript(
            `https://maps.googleapis.com/maps/api/js?key=AIzaSyB2VxpGqHKvExr9aF7SrUUCNgeKLbaFqrA&libraries=places`,
            () => handleScriptLoad(setQuery2, autoCompleteRef)
        );
    }, []);

    //////////////////////////
    
    const closeAddCityPopup = e => {
        let userClicked = e.currentTarget;
        userClicked.parentNode.parentNode.parentNode.classList.add("hidden");
    };

    const handleAddCity = async (e) => {
        const search = query2.replace(/[0-9]/g, "");
        if (search.length === 0) {
            alert("Empty City. Try Again");
            return;
        }
        
        let cityView = `views of ${search}`;
        let endPoint = `https://api.unsplash.com/search/photos?page1&query=${cityView}&client_id=${process.env.REACT_APP_ACCESS_KEY}`;
        const response = await fetch(endPoint);

        if (response.status === 404) {
            alert("City not found");
            return;
        } else if (response.status !== 200) {
            alert("Error occurred with Unsplash API's side");
        }

        const data = await response.json();
        let getRandomPic = Math.floor(Math.random() * data.results.length);
        let getURL;
        try {
            getURL = new URL(data.results[getRandomPic].urls.regular);
            console.log(getURL.href);
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
            alert("Error trying to get latitude and longitude for city");
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
        let newSavedLocations;
        let savedLocations = JSON.parse(localStorage.getItem("savedLocations")); // get current saved locations
        getAll[2].parentNode.children[1].innerText = search;
        newSavedLocations = [savedLocations[1], savedLocations[2], `${search}`];

        localStorage.setItem("savedLocations", JSON.stringify(newSavedLocations)); // save to local storage new 3 locations
        localStorage.setItem("allPicsSrc", JSON.stringify(newImages));
        localStorage.setItem("allCoordinates", JSON.stringify(newCoordinates));

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
                    <input
                        type="search"
                        ref={autoCompleteRef} 
                        onChange={event => setQuery2(event.target.value)}
                        placeholder="Search city ..."
                        value={query2}
                        id="citySearch"
                        name="citySearch"
                    />
                    <button onClick={handleAddCity} className="disabled" id="submitNewCity">Submit</button>
                    <h4 className="hidden" id="errorInput">Please try again</h4>
                </div>
            </div>
            <div className="backgroundPopup"></div>
        </div>
    );
};

export default NewCity;