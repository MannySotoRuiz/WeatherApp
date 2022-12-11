import { useLogout } from "../../../hooks/useLogout";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useSliderValue } from '../../../hooks/useSliderValue';
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

    const [passwordShown, setPasswordShown] = useState(false);

    const { updateSliderValue, error: updateError, isLoading: updateIsLoading } = useSliderValue();
    const user = JSON.parse(localStorage.getItem("user"));
    let getSliderValue = JSON.parse(localStorage.getItem("sliderValue"));
    if (!getSliderValue) {
        getSliderValue = 60;
        console.log(getSliderValue);
    }
    let chan = async (a) => {
        // setValue(a);
        console.log(a);
        // store.dispatch({type:'change',value:a})
        // localStorage.setItem("sliderValue", JSON.stringify(a));
        await updateSliderValue(user.email, a);
    };

    // Password toggle handler
    const togglePassword = () => {
        // when the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShown(!passwordShown);
    }

    const handleClick = () => {
         logout();
         navigate("/");
    }

    return (
        <div id="editProfileDisplay">
            <h2>Edit Profile</h2>
            <div id="profileInfo">
                <div id="firstName">Email<br></br><br></br>
                    <input type="text" id="femail" name="femail" placeholder="email"></input><br></br><br></br>
                </div>
                {/* <div id="passwordDisplay">
                    <div id="currentPassword">Current Password<br></br><br></br>
                        <input type={passwordShown ? "text" : "password"} id="fcurrentpassword" name="fcurrentpassword" /><br></br><br></br>
                    </div>
                    <div id="newPassword">New Password<br></br><br></br>
                        <input type={passwordShown ? "text" : "password"} id="fnewpassword" name="fnewpassword" /><br></br><br></br>
                    </div>
                    <button onClick={togglePassword}>Show Passwords</button>
                    <button type="submit" value="Submit">Save</button>
                    <button type="submit" value="Submit" onClick={handleClick}>Log Out</button>
                </div> */}
                <h2>Weather & Clothes Preference</h2>
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