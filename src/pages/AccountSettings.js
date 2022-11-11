import React from 'react';
import '../accountsettings.css';

const AccountSettings = () => {
    return (
        <div id="settings">
            <h1>Account Settings</h1>
            <div id="settingsDiv">
                <div id="leftPanel">
                    <div className="buttonText"><p style={{ marginTop: "30px", marginBottom: "30px" }}>Edit Profile</p></div>
                    <div className="buttonText"><p style={{ marginTop: "30px", marginBottom: "30px" }}>Password</p></div>
                    <div className="buttonText"><p style={{ marginTop: "30px", marginBottom: "30px" }}>Notifications</p></div>
                    <div className="buttonText"><p style={{ marginTop: "30px", marginBottom: "30px" }}>Weather & Clothes Preference</p></div>
                    <div id="verticalLine"></div>
                </div>
                <div id="rightPanel">
                    <div className="hidden" id="editProfileDisplay">
                        <h2>Edit Profile</h2>
                        <div id="profileInfo">
                            <div id="firstName">First Name<br></br><br></br>
                                <input type="text" id="ffirstname" name="ffirstname" placeholder="Manny"></input><br></br><br></br>
                            </div>
                            <div id="firstName">Last Name<br></br><br></br>
                                <input type="text" id="flastname" name="flastname" placeholder="Soto Ruiz"></input><br></br><br></br>
                            </div>
                            <div id="firstName">City<br></br><br></br>
                                <input type="text" id="fcity" name="fcity" placeholder="New York"></input><br></br><br></br>
                            </div>
                            <div id="firstName">State<br></br><br></br>
                                <input type="text" id="fstate" name="fstate" placeholder="New York"></input><br></br><br></br>
                            </div>
                            <div id="firstName">Country<br></br><br></br>
                                <input type="text" id="fcountry" name="fcountry" placeholder="United States"></input><br></br><br></br>
                            </div>
                            <button type="submit" value="Submit">Save</button>
                        </div>
                    </div>

                    <div id="passwordDisplay">
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