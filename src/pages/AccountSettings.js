import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../accountsettings.css';

const AccountSettings = () => {

    // function to make left panel buttons interactive
    const handleClick = e => {
        let userClicked = e.currentTarget.innerText;
        let rightPanelChildren = e.currentTarget.parentNode.parentNode.children[1].children;
        for (let i = 0; i < rightPanelChildren.length; i++) {
            let currentChild = rightPanelChildren[i];
            currentChild.classList.add("hidden");
        }
        if (userClicked === "Edit Profile") {
            rightPanelChildren[0].classList.remove("hidden");
        } else if (userClicked === "Password") {
            rightPanelChildren[1].classList.remove("hidden");
        } else if (userClicked === "Notifications") {
            rightPanelChildren[2].classList.remove("hidden");
        } else if (userClicked === "Weather & Clothes Preference") {
            rightPanelChildren[3].classList.remove("hidden");
        }
    };

    let navigate = useNavigate();

    return (
        <div id="settings">
            <h1>Account Settings</h1>
            <h3 onClick={() => {
                navigate("/");
            }}>Home</h3>
            <div id="settingsDiv">
                <div id="leftPanel">
                    <div className="buttonText" onClick={handleClick}><p style={{ marginTop: "30px", marginBottom: "30px" }}>Edit Profile</p></div>
                    <div className="buttonText" onClick={handleClick}><p style={{ marginTop: "30px", marginBottom: "30px" }}>Password</p></div>
                    <div className="buttonText" onClick={handleClick}><p style={{ marginTop: "30px", marginBottom: "30px" }}>Notifications</p></div>
                    <div className="buttonText" onClick={handleClick}><p style={{ marginTop: "30px", marginBottom: "30px" }}>Weather & Clothes Preference</p></div>
                    <div id="verticalLine"></div>
                </div>
                <div id="rightPanel">
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
                            <button style={{ marginLeft: "4%" }}type="submit" value="Submit">Log Out</button>
                        </div>
                    </div>

                    <div className="hidden" id="passwordDisplay">
                        <h2>Password</h2>
                        <div id="currentPassword">Current Password<br></br><br></br>
                            <input type="text" id="fcurrentpassword" name="fcurrentpassword"></input><br></br><br></br>
                        </div>
                        <div id="newPassword">New Password<br></br><br></br>
                            <input type="text" id="fnewpassword" name="fnewpassword"></input><br></br><br></br>
                        </div>
                        <button type="submit" value="Submit">Save</button>
                    </div>
                    <div className="hidden" id="notificationDisplay">
                        <h2>Notifications</h2>
                    </div>
                    <div className="hidden" id="preferenceDisplay">
                        <h2>Weather & Clothes Preference</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountSettings;