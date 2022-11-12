import ProfileInfo from "./ProfileInfo";
import EditPassword from "./EditPassword";
import Notifications from "./Notifications";
import Preference from "./Preference";

const RightPanel = () => {

    return (
        <div id="rightPanel">
            <ProfileInfo />
            <EditPassword />
            <Notifications />
            <Preference />
        </div>
    );
};

export default RightPanel;