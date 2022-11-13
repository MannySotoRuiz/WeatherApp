import { useState } from "react";

const SearchBox = () => {

    const [search, setMessage] = useState("");

    const handleChange = (event) => {
        setMessage(event.currentTarget.value);
    };

    const handleSearch = (event) => {
        if (event.key === "Enter") {
            // get input value
            document.getElementById("currentLocation").innerText=search;
            localStorage.setItem("location", JSON.stringify(search));
        }
    };

    return (
        <div id="searchContainer">
            <div id="searchDiv">

                <div className="search-box">
                    <div className="search-icon"><i className="iconfont icon-sousuo" style={{ fontSize: "40px" }}></i></div>
                    <div id='search-border'>
                        <form action="" className="search-form">
                        <input type="text" placeholder="Search new place ..." id="search" name="search" value={search} onChange={handleChange} onKeyDown={handleSearch}/>
                        </form>
                    </div>
                    <div className="go-icon"><i className="fa fa-arrow-right"></i></div>
                </div>
            </div>
        </div>
    );
};

export default SearchBox;