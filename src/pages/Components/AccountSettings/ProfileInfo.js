import { useLogout } from "../../../hooks/useLogout";
import { useNavigate } from 'react-router-dom';


const ProfileInfo = () => {

    let navigate = useNavigate();

    const { logout } = useLogout();

    const handleClick = () => {
         logout();
         navigate("/");
    }

    return (
        <div id="editProfileDisplay">
            <h2>Edit Profile</h2>
            <div id="profileInfo">
                <div id="firstName">First Name<br></br><br></br>
                    <input type="text" id="ffirstname" name="ffirstname" placeholder="Manny"></input><br></br><br></br>
                </div>
                <div id="lastName">Last Name<br></br><br></br>
                    <input type="text" id="flastname" name="flastname" placeholder="Soto Ruiz"></input><br></br><br></br>
                </div>
                <div id="city">City<br></br><br></br>
                    <input type="text" id="fcity" name="fcity" placeholder="New York"></input><br></br><br></br>
                </div>
                <div id="state">State<br></br><br></br>
                    <input type="text" id="fstate" name="fstate" placeholder="New York"></input><br></br><br></br>
                </div>
                <div id="country">Country<br></br><br></br>
                    <input type="text" id="fcountry" name="fcountry" placeholder="United States"></input><br></br><br></br>
                </div>
                <button type="submit" value="Submit">Save</button>
                <button style={{ marginLeft: "4%" }}type="submit" value="Submit" onClick={handleClick}>Log Out</button>
            </div>
        </div>
    );
};

export default ProfileInfo;