import NewCity from './NewCity';

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

    return (
        <div id="cities">
            <div className="selectCity">
                <div onClick={clickedCity} className="cityPic">
                    <img src={require('../../../images/CityImages/NYC.jpg')} alt="NYC Pic" />
                </div>
                <p className="cityText">New York, USA</p>
            </div>
            <div className="selectCity">
                <div onClick={clickedCity} className="cityPic">
                    <img src={require('../../../images/CityImages/Berlin.jpg')} alt="Berlin Pic" />
                </div>
                <p>Berlin, Germany</p>
            </div>
            <div className="selectCity">
                <div onClick={clickedCity} className="cityPic">
                    <img src={require('../../../images/CityImages/Paris.jpg')} alt="Paris Pic" />
                </div>
                <p>Paris, France</p>
            </div>
            <div onClick={openAddCityPopup} id="addCity">
                <p style={{ marginTop: "40%", marginBottom: "10%", fontSize: "30px" }}>+</p>
                <p style={{ marginTop: "17%", fontSize: "17px" }}>Add City</p>
            </div>
            <NewCity />
        </div>
    );
};

export default Cities;