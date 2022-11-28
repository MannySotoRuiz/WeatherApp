import React from 'react';
import SearchBox from './SearchBox';
import Cities from './Cities';
import AllWeatherInfo from './AlllWeatherInfo';

const HomeLeft = () => {

    return (
        <div id="leftContainer">
            <SearchBox />

            <div className="weatherTitle">
                <h1>Weather <strong>Forecast</strong></h1>
            </div>

            <Cities />

            <AllWeatherInfo />
            
        </div>
    );
};

export default HomeLeft;