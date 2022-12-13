import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../accountsettings.css';
import LeftPanel from './Components/AccountSettings/LeftPanel';
import RightPanel from './Components/AccountSettings/RightPanel';
import hamburger from "../images/hamburger.png";
import closeImg from "../images/close.png";
import { useLogout } from '../hooks/useLogout';

const AccountSettings = () => {

    document.body.style.marginTop = "4%";
    document.body.style.marginRight = "8%";
    document.body.style.marginLeft = "8%";
    document.body.style.marginBottom = "6%";
    document.body.style.backgroundColor = "#BCCEF8";

    let navigate = useNavigate();
    const { logout } = useLogout();

    const handleBurgerClick = () => {
        document.querySelectorAll(".displayNotiMenu")[0].classList.remove("hidden");
    }
    const handleCloseMenu = () => {
        document.querySelectorAll(".displayNotiMenu")[0].classList.add("hidden");
    }
    const handleOpenEditProfile = () => {
        document.getElementById("notificationDisplay").classList.add("hidden");
        document.getElementById("editProfileDisplay").classList.remove("hidden");
    }
    const handleOpenNotifications = () => {
        document.getElementById("notificationDisplay").classList.remove("hidden");
        document.getElementById("editProfileDisplay").classList.add("hidden");
    }
    const handleLogout = () => {
        logout();
        navigate("/");
    }

    return (
        <div id="settings">

            <div className="notiMenu" onClick={handleBurgerClick}>
                <img src={hamburger} alt="hamburger menu icon"/>
            </div>
            <div className="displayNotiMenu hidden">
                <img src={closeImg} alt="close menu" onClick={handleCloseMenu}/>
                <h4 onClick={() => {navigate("/");}}>Home</h4>
                <h4 onClick={handleOpenEditProfile}>Edit Profile</h4>
                <h4 onClick={handleOpenNotifications}>Notifications</h4>
                <h4 onClick={handleLogout}>Log out</h4>
            </div>


            <h1>Account Settings</h1>
            <h3 id="backHomeBtn" onClick={() => {
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