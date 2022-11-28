import { useLogout } from "../../../hooks/useLogout";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";


const ProfileInfo = () => {

    let navigate = useNavigate();

    const { logout } = useLogout();

    const [passwordShown, setPasswordShown] = useState(false);

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
                <div id="passwordDisplay">
                    <div id="currentPassword">Current Password<br></br><br></br>
                        <input type={passwordShown ? "text" : "password"} id="fcurrentpassword" name="fcurrentpassword" /><br></br><br></br>
                    </div>
                    <div id="newPassword">New Password<br></br><br></br>
                        <input type={passwordShown ? "text" : "password"} id="fnewpassword" name="fnewpassword" /><br></br><br></br>
                    </div>
                    <button onClick={togglePassword}>Show Passwords</button>
                    <button type="submit" value="Submit">Save</button>
                    <button type="submit" value="Submit" onClick={handleClick}>Log Out</button>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;