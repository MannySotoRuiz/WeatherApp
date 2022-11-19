import NewCity from './NewCity';
import React from 'react';

const Cities = () => {

    const clickedCity = e => {
        let getLocation = e.currentTarget.parentNode.innerText;
        let splitLocation = getLocation.split(",");
        let getCity = splitLocation[0];
        let getCountry = splitLocation[1].trim(); // to remover the leading white space
        let newLocation = `${getCity}, ${getCountry}`;
        let changeLocation = document.getElementById("currentLocation");
        changeLocation.innerText = newLocation;
        localStorage.setItem("location", JSON.stringify(newLocation));
    };

    const openAddCityPopup = e => {
        let popup = document.querySelectorAll(".newCityPopup");
        popup[0].classList.remove("hidden");
        document.getElementById("submitNewCity").disabled = true;
    };

    let picsSrc;
    let getPicsSrc = JSON.parse(localStorage.getItem("allPicsSrc"));
    if (getPicsSrc) {
        picsSrc = getPicsSrc;
    } else {
        picsSrc = ["/images/CityImages/NYC.jpg", "/images/CityImages/Paris.jpg", "/images/CityImages/Berlin.jpg"];
        localStorage.setItem("allPicsSrc", JSON.stringify(picsSrc));
    }

    let defaultSavedLocations;
    let getSavedLocations = JSON.parse(localStorage.getItem("defaultSavedLocations"));
    if (getSavedLocations) {
        defaultSavedLocations = getSavedLocations;
        localStorage.setItem("savedLocations", JSON.stringify(defaultSavedLocations));
    } else {
        defaultSavedLocations = ["New York, USA", "Paris, France", "Berlin, Germany"];
        localStorage.setItem("savedLocations", JSON.stringify(defaultSavedLocations));
    }

    // code to display all saved cities
    return (
        <div id="cities">
            {picsSrc.map((picSrc, idx) => {
                return (
                    <div className="selectCity" key={idx}>
                        <div onClick={clickedCity} className="cityPic">
                            <img src={picSrc} alt="city pic"/>
                        </div>
                        <p className="cityText">{defaultSavedLocations[idx]}</p>
                    </div>
                )
            })}
            <div onClick={openAddCityPopup} id="addCity">
                <p style={{ marginTop: "40%", marginBottom: "10%", fontSize: "30px" }}>+</p>
                <p style={{ marginTop: "17%", fontSize: "17px" }}>Add City</p>
            </div>
            <NewCity />
        </div>
    );
};

export default Cities;