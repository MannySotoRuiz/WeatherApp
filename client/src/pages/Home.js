import React from 'react';
import HomeLeft from './Components/Home/HomeLeft';
import HomeRight from './Components/Home/HomeRight';

const Home = () => {

    document.body.style.marginTop = "0%";
    document.body.style.marginRight = "0%";
    document.body.style.marginLeft = "0%";
    document.body.style.marginBottom = "0%";
    document.body.style.backgroundColor = "#ecf2f4";

    return (
        <div id="home">
            <div className="row" id="mainContainer">
                <HomeLeft />
                <HomeRight />
            </div >

            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p className="text-justify">A weather app using location and weather apis to send notifications at a
                                preset time of what the weather is like and give out clothing recommendations as a result of the
                                weather</p>
                        </div>
                    </div>
                    <hr className="small" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-12">
                            <p className="copyright-text">Copyright © 2022 All Rights Reserved by WeatherApp Team
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div >
    );
};

export default Home;