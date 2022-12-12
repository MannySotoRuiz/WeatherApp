import { useLogout } from "../../../hooks/useLogout";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useSliderValue } from '../../../hooks/useSliderValue';
import { useUpdateUserLocation } from "../../../hooks/useUpdateUserLocation";
import { Slider } from "antd-mobile";

const marks = {
    0: "wear less",
    20: "",
    40: "",
    60: "",
    80: "",
    100: "wear more",
};


const ProfileInfo = () => {

    let navigate = useNavigate();

    const { logout } = useLogout();

    const [writtenLocaiton, setLocation] = useState("");
    const [oldLocation, setOldLocation] = useState("");

    const { updateSliderValue, error: updateError, isLoading: updateIsLoading } = useSliderValue();
    const { updateUserLocation, error: locationError, isLoading: locationLoading } = useUpdateUserLocation();

    const user = JSON.parse(localStorage.getItem("user"));
    let getSliderValue = JSON.parse(localStorage.getItem("sliderValue"));
    if (!getSliderValue) {
        if (getSliderValue !== 0) {
            getSliderValue = 60;
            console.log(getSliderValue)
        }
    }
    let chan = async (a) => {
        // setValue(a);
        console.log(a);
        // store.dispatch({type:'change',value:a})
        // localStorage.setItem("sliderValue", JSON.stringify(a));
        await updateSliderValue(user.email, a);
    };

    const handleClick = () => {
         logout();
         navigate("/");
    }

    const handleLocationChange = (e) => {
        setLocation(e.currentTarget.value);
    }

    const updateLocation = async () => {

        if (writtenLocaiton.length === 0) {
            document.getElementById("updateLocationError").innerHTML = "Location missing";
            document.getElementById("updateLocationError").classList.remove("hidden");
            return;
        }

        let ifVerified = true;

        let end = `https://api.openweathermap.org/geo/1.0/direct?q=${writtenLocaiton}&appid=a63f9e77a7e5b1e6d12da2311068e37d`; // to get new coordinates for new city with api call
        const res = await fetch(end);
        if (res.status !== 200) {
            document.getElementById("updateLocationError").innerHTML = "Openweathermap API crashed. Please try again later";
            ifVerified = false;
        }
        const resData = await res.json();
        console.log(resData);
        if (resData.length === 0) {
            document.getElementById("updateLocationError").innerHTML = "Openweathermap API could not get latitude and longitude for your city";
            ifVerified = false;
        }

        if (ifVerified) {
            await updateUserLocation(user.email, writtenLocaiton);
            if (!updateError) {
                document.getElementById("locationInput").value = "";
                document.getElementById("locationInput").placeholder = writtenLocaiton;
                document.getElementById("updateLocationError").classList.add("hidden");
                document.getElementById("updateLocationSuccess").classList.remove("hidden");
            }
        } else {
            document.getElementById("updateLocationError").classList.remove("hidden");
        }
    }

    useEffect(() => {
        const getUser = JSON.parse(localStorage.getItem("user"));
        setOldLocation(getUser.userLocation);
    }, []);

    return (
        <div id="editProfileDisplay">
            <h2>Edit Profile</h2>
            <div id="profileInfo">
                <div id="savedLocation"><h4>Update Location</h4><p>(notification results are based on your primary location)</p>
                    <input type="search" placeholder={oldLocation} onChange={handleLocationChange} id="locationInput"></input>
                    <button type="submit" value="Submit" onClick={updateLocation} id="updateLocationBtn" disabled={locationLoading}>Update</button><br></br><br></br>
                    <div className="hidden error" id="updateLocationError"></div>
                    <div className="hidden primary" id="updateLocationSuccess">Successfully updated location</div>
                    {locationError && <div className="errorUpdatingLocation">{locationError}</div>}
                </div>
                
                <h4>Weather & Clothes Preference</h4>
                <p id="sliderNote">(recommended clothes are suggested based on this value)</p>
                <Slider
                    style={{ "--fill-color": "#00b578" }}
                    defaultValue={getSliderValue}
                    marks={marks}
                    ticks
                    onChange={chan}
                    disabled={updateIsLoading}
                />
                {updateError && <div className="errorUpdatingValue">{updateError}</div>}
                <button type="submit" value="Submit" onClick={handleClick} id="logoutBtn">Log Out</button>
            </div>
        </div>
    );
};

export default ProfileInfo;