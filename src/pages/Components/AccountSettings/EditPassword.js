import { useState } from "react";

const EditPassword = () => {

    const [passwordShown, setPasswordShown] = useState(false);

    // Password toggle handler
    const togglePassword = () => {
        // when the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShown(!passwordShown);
    }

    return (
        <div className="hidden" id="passwordDisplay">
            <h2>Password</h2>
            <div id="currentPassword">Current Password<br></br><br></br>
                <input type={passwordShown ? "text" : "password"} id="fcurrentpassword" name="fcurrentpassword" /><br></br><br></br>
            </div>
            <div id="newPassword">New Password<br></br><br></br>
                <input type={passwordShown ? "text" : "password"} id="fnewpassword" name="fnewpassword" /><br></br><br></br>
            </div>
            <button onClick={togglePassword}>Show Passwords</button>
            <button type="submit" value="Submit">Save</button>
        </div>
    );
};

export default EditPassword;