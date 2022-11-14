import React, { createContext } from 'react';
import SearchBox from './SearchBox';
import Cities from './Cities';
import AllWeatherInfo from './AlllWeatherInfo';
// import UseAxios from '../../Hooks/UseAxios';

// export const ImageContext  = createContext();

const HomeLeft = () => {
    
    // const { response, isLoading, error, fetchData } = UseAxios(`search/photos?page=1&query=office&client_id=${process.env.REACT_APP_ACCESS_KEY}`);
    // console.log(response);

    // const value = {
    //     response,
    //     isLoading,
    //     error,
    //     fetchData
    // }

    return (
        <div id="leftContainer">
            <SearchBox />

            <div className="weatherTitle">
                <h1>Weather <strong>Forecast</strong></h1>
            </div>

            {/* <ImageContext.Provider value={value}>
                <Cities />
            </ImageContext.Provider> */}
            <Cities />

            <AllWeatherInfo />
            
        </div>
    );
};

export default HomeLeft;