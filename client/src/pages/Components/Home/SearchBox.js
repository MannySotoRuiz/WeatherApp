import { useState } from "react";

const SearchBox = () => {

    const [search, setMessage] = useState("");

    const handleChange = (event) => {
        setMessage(event.currentTarget.value);
    };

    const handleSearch = (event) => {
        if (event.key === "Enter") {
            if (search.length === 0) {
                alert("Please enter a city");
                return;
            } else {
                let checkValid = search.trim().split(",");
                if (checkValid.length === 1) {
                    alert("Please enter correct format: [city], [country]");
                    return;
                } else {
                    // document.getElementById("currentLocation").innerText=search;
                    localStorage.setItem("location", JSON.stringify(search));
                    window.location.reload();
                }
            }
        }
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

    return (
        <div id="searchContainer">
            <div id="searchDiv">
                <div className="search-box">
                    <div className="search-icon"><i className="iconfont icon-sousuo" style={{ fontSize: "40px" }}></i></div>
                    <div id='search-border'>
                        {/* <form action="" className="search-form"> */}
                        <input type="text" placeholder="Search: [city], [ST/country]" id="search" name="search" value={search} onChange={handleChange} onKeyDown={handleSearch}/>
                        {/* </form> */}
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