import { useState, useEffect, useRef } from "react";

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
    localStorage.setItem("location", JSON.stringify(addressObject.formatted_address));
    window.location.reload();
}

const SearchBox = () => {

    // const [search, setMessage] = useState("");

    // const handleChange = (event) => {
    //     setMessage(event.currentTarget.value);
    // };

    const handleSearch = (event) => {
        // if (event.key === "Enter") {
        //     if (search.length === 0) {
        //         alert("Please enter a city");
        //         return;
        //     } else {
        //         let checkValid = search.trim().split(",");
        //         if (checkValid.length === 1) {
        //             alert("Please enter correct format: [city], [country]");
        //             return;
        //         } else {
        //             // document.getElementById("currentLocation").innerText=search;
        //             localStorage.setItem("location", JSON.stringify(search));
        //             window.location.reload();
        //         }
        //     }
        // }
        // console.log(query);
    };

    const handleLeftClick = () => {
        let btn = document.getElementById("btn");
        let getAllC = document.querySelectorAll(".celsiusDisplay");
        for (let i = 0; i < getAllC.length; i++) {
            getAllC[i].classList.add("hidden");
        }
        btn.style.left = "0";
        let getAllF = document.querySelectorAll(".fahrenheitDisplay");
        for (let i = 0; i < getAllF.length; i++) {
            getAllF[i].classList.remove("hidden");
        }
    }

    const handleRightClick = () => {
        let btn = document.getElementById("btn");
        btn.style.left = "60px";
        let getAllC = document.querySelectorAll(".celsiusDisplay");
        for (let i = 0; i < getAllC.length; i++) {
            getAllC[i].classList.remove("hidden");
        }
        let getAllF = document.querySelectorAll(".fahrenheitDisplay");
        for (let i = 0; i < getAllF.length; i++) {
            getAllF[i].classList.add("hidden");
        }
    }

    const [query, setQuery] = useState("");
    const autoCompleteRef = useRef(null);

    useEffect(() => {
        loadScript(
            `https://maps.googleapis.com/maps/api/js?key=AIzaSyB2VxpGqHKvExr9aF7SrUUCNgeKLbaFqrA&libraries=places`,
            () => handleScriptLoad(setQuery, autoCompleteRef)
        );
    }, []);

    return (
        <div id="searchContainer">
            <div id="searchDiv">
                <div className="search-box">
                    <div className="search-icon"><i className="iconfont icon-sousuo" style={{ fontSize: "40px" }}></i></div>
                    <div id='search-border'>
                        {/* <input type="text" placeholder="Search: [city], [ST/country]" id="search" name="search" value={search} onChange={handleChange} onKeyDown={handleSearch}/> */}
                        <input
                            ref={autoCompleteRef} 
                            onChange={event => setQuery(event.target.value)}
                            placeholder="Search city ..."
                            value={query}
                            id="search"
                            name="search"
                            onKeyDown={handleSearch}
                        />
                    </div>
                    <div className="go-icon"><i className="fa fa-arrow-right"></i></div>
                </div>
            </div>
            <div className="form-box">
                <div className="button-box">
                    <div id="btn"></div>
                    <button type="button" className="toggle-btn" onClick={handleLeftClick}>°F</button>
                    <button type="button" className="toggle-btn" onClick={handleRightClick}>°C</button>
                </div>
            </div>
        </div>
    );
};

export default SearchBox;