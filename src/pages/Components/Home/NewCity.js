import React, { useContext } from "react";
import "../../../newcitypopup.css";
import { useState } from "react";
// import { ImageContext } from "./HomeLeft";
// import Image from "./Image";

const NewCity = () => {

    // const { response, isLoading } = useContext(ImageContext);
    
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

    const handleAddCity = (e) => {
        if (search.length === 0) {
            document.getElementById("errorInput").classList.remove("hidden");
        } else {
            let clientID = "KD3JlHXUemNJy8AIoBejnopOYu4gbmvTsuoal9N4jZk";
            // let endPoint = `https://api.unsplash.com/photos/random/?client_id=${clientID}`;
            let endPoint = `https://api.unsplash.com/search/photos?page1&query=newyork&client_id=${process.env.REACT_APP_ACCESS_KEY}`;

            let getAll = document.querySelectorAll(".cityPic");

            fetch(endPoint)
                .then(function (response) {
                     return response.json();
                })
                .then(function (jsonData) {
                    console.log(jsonData.results[1].urls.regular);
                    console.log(getAll[0].children);
                })
        }
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
                    {/* {response.map((data, key) => <Image key={key} data={data}/>)} */}
                </div>
            </div>
            <div className="backgroundPopup"></div>
        </div>
    );
};

export default NewCity;