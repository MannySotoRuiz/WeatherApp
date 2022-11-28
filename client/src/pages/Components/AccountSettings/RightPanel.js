import ProfileInfo from "./ProfileInfo";
import Notifications from "./Notifications";
import Preference from "./Preference";

const RightPanel = () => {

    return (
        <div id="rightPanel">
            <ProfileInfo />
            <Notifications />
            <Preference />
        </div>
    );
};

export default RightPanel;