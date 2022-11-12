const EditPassword = () => {
    return (
        <div className="hidden" id="passwordDisplay">
            <h2>Password</h2>
            <div id="currentPassword">Current Password<br></br><br></br>
                <input type="password" id="fcurrentpassword" name="fcurrentpassword"></input><br></br><br></br>
            </div>
            <div id="newPassword">New Password<br></br><br></br>
                <input type="password" id="fnewpassword" name="fnewpassword"></input><br></br><br></br>
            </div>
            <button type="submit" value="Submit">Save</button>
        </div>
    );
};

export default EditPassword;