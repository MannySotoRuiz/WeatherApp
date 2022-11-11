const Cities = () => {

    return (
        <div id="cities">
            <div className="selectCity">
                <div className="cityPic">
                    <img src={require('../../../images/CityImages/Berlin.jpg')} alt="Berlin Pic" />
                </div>
                <p>Berlin, Germany</p>
            </div>
            <div className="selectCity">
                <div className="cityPic">
                    <img src={require('../../../images/CityImages/Paris.jpg')} alt="Paris Pic" />
                </div>
                <p>Paris, France</p>
            </div>
            <div className="selectCity">
                <div className="cityPic">
                    <img src={require('../../../images/CityImages/NYC.jpg')} alt="NYC Pic" />
                </div>
                <p>New York, USA</p>
            </div>
            <div id="addCity">
                <p style={{ marginTop: "40%", marginBottom: "10%", fontSize: "30px" }}>+</p>
                <p style={{ marginTop: "17%", fontSize: "17px" }}>Add City</p>
            </div>
        </div>
    );
};

export default Cities;