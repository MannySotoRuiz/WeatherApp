import React from "react";
import "../../../newcitypopup.css";
import { useState } from "react";

const NewCity = () => {

    
    const closeAddCityPopup = e => {
        let userClicked = e.currentTarget;
        userClicked.parentNode.parentNode.parentNode.classList.add("hidden");
    };

    const [search, setSearch] = useState("");

    const handleChange = (event) => {
        setSearch(event.currentTarget.value);
        document.getElementById("submitNewCity").disabled = false;
        document.getElementById("submitNewCity").classList.remove("disabled");
    };

    // const handleAddCity = (e) => {
    //     if (search.length === 0) {
    //         document.getElementById("errorInput").classList.remove("hidden");
    //     } else {

    //         let getAll = document.querySelectorAll(".cityPic");

    //         let getSearch = search.split(",");
    //         let getCity = getSearch[0].toLocaleLowerCase();
    //         // let getCountry = getSearch[1].trim().toLocaleLowerCase();

    //         let endPoint = `https://api.unsplash.com/search/photos?page1&query=${getCity}&client_id=${process.env.REACT_APP_ACCESS_KEY}`;
            
    //         fetch(endPoint)
    //             .then(function (response) {
    //                 let data
    //                  return response.json();
    //             })
    //             .then(function (jsonData) {
    //                 let getRandom = Math.floor(Math.random() * 20);
    //                 getAll[2].children[0].src = jsonData.results[getRandom].urls.regular;
    //                 getAll[2].children[0].alt = jsonData.results[getRandom].description;
    //                 getAll[2].parentNode.children[1].innerText = `${getSearch[0]}, ${getSearch[1]}`;
    //                 // let savedLocations = JSON.parse(localStorage.getItem("savedLocations"));
    //                 // let newSavedLocations = [savedLocations[1], savedLocations[2], search];
    //                 // let getImages = JSON.parse(localStorage.getItem("defaultImages"));
    //                 // let newImages = [getImages[1], getImages[2], jsonData.results[getRandom].urls.regular];
    //                 // localStorage.setItem("savedLocations", JSON.stringify(newSavedLocations)); // save to local storage new 3 locations
    //                 // localStorage.setItem("defaultImages", JSON.stringify(newImages));
    //             })
    //         e.currentTarget.parentNode.parentNode.parentNode.classList.add("hidden"); // close popup
    //     }
    // };

    const handleAddCity = async (e) => {
        if (!search) {
            // document.getElementById("errorInput").classList.remove("hidden");
            alert("Please enter a city");
        }
        let getSearch = search.split(",");
        let getCity = getSearch[0].toLocaleLowerCase();
        // let endPoint = new URL(`https://api.unsplash.com/search/photos?page1&query=${getCity}&client_id=${process.env.REACT_APP_ACCESS_KEY}`);
        let endPoint = `https://api.unsplash.com/search/photos?page1&query=${getCity}&client_id=${process.env.REACT_APP_ACCESS_KEY}`;
        const response = await fetch(endPoint);

        if (response.status === 404) {
            alert("City not found");
            return;
        }

        const data = await response.json();
        let getRandomPic = Math.floor(Math.random() * data.results.length);
        console.log(getRandomPic);
        let getURL;
        try {
            getURL = new URL(data.results[getRandomPic].urls.regular);
        } catch (error) {
            console.log(error);
            alert("Error. Please try again", error);
            return;
        }
        let getAll = document.querySelectorAll(".cityPic");
        getAll[2].children[0].src = getURL.href;   // update with the new src
        if (data.results[getRandomPic].alt_description) { // updatet the alt description with the new pic
            getAll[2].children[0].alt = `${getSearch}: ${data.results[getRandomPic].alt_description}`;
        } else {
            getAll[2].children[0].alt = getSearch;
        }
        getAll[2].parentNode.children[1].innerText = `${getSearch[0]}, ${getSearch[1]}`; // update the displayed text w/ new city
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
                    <input type="search" id="addCitySearch" name="addCitySearch" placeholder="Ex: Barcelona, Spain" value={search} onChange={handleChange}/>
                    <button onClick={handleAddCity} className="disabled" id="submitNewCity">Submit</button>
                    <h4 className="hidden" id="errorInput">Please try again</h4>
                </div>
            </div>
            <div className="backgroundPopup"></div>
        </div>
    );
};

export default NewCity;