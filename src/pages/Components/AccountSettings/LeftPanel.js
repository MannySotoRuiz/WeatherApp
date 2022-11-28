const LeftPanel = () => {

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

    return (
        <div id="leftPanel">
            <div className="buttonText" onClick={handleClick}><p style={{ marginTop: "30px", marginBottom: "30px" }}>Edit Profile</p></div>
            {/* <div className="buttonText" onClick={handleClick}><p style={{ marginTop: "30px", marginBottom: "30px" }}>Password</p></div> */}
            <div className="buttonText" onClick={handleClick}><p style={{ marginTop: "30px", marginBottom: "30px" }}>Notifications</p></div>
            <div className="buttonText" onClick={handleClick}><p style={{ marginTop: "30px", marginBottom: "30px" }}>Weather & Clothes Preference</p></div>
            <div id="verticalLine"></div>
        </div>
    );
};

export default LeftPanel;