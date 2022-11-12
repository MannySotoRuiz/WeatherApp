import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../accountsettings.css';
import LeftPanel from './Components/AccountSettings/LeftPanel';
import RightPanel from './Components/AccountSettings/RightPanel';

const AccountSettings = () => {

    document.body.style.marginTop = "4%";
    document.body.style.marginRight = "8%";
    document.body.style.marginLeft = "8%";
    document.body.style.marginBottom = "6%";
    document.body.style.backgroundColor = "#BCCEF8";

    let navigate = useNavigate();

    return (
        <div id="settings">
            <h1>Account Settings</h1>
            <h3 onClick={() => {
                navigate("/");
            }}>Home</h3>
            <div id="settingsDiv">
                <LeftPanel />
                <RightPanel />
            </div>
        </div>
    );
};

export default AccountSettings;