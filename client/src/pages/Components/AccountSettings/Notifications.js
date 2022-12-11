import { useEffect, useState } from "react";
// import { useAuthContext } from "../../../hooks/useAuthContext";
// import { useNotificationContext } from "../../../hooks/useNotificationContext";
import trashIocn from '../../../images/trash.png';

// date fns
import { format } from 'date-fns';

const Notifications = () => {

    // const { user } = useAuthContext();

    // const [fit, setFit] = useState("");
    // const [highTemp, setHighTemp] = useState(0);
    // const [lowTemp, setLowTemp] = useState(0);
    // const [desc, setDesc] = useState("");
    // const [error, setError] = useState(null);
    // const [emptyFields, setEmptyFields] = useState([]);

    // const handleFitChange = (event) => {
    //     setFit(event.currentTarget.value);
    // }
    // const handleHighTempChange = (event) => {
    //     setHighTemp(event.currentTarget.value);
    // }
    // const handleLowTempChange = (event) => {
    //     setLowTemp(event.currentTarget.value);
    // }
    // const handleDescChange = (event) => {
    //     setDesc(event.currentTarget.value);
    // }

    // const handleCreateNoti = async (e) => {

    //     if (!user) {
    //         setError('You must be logged in');
    //         return;
    //     }

        // const current = new Date();
        // const currentMonth = current.getMonth() + 1;
        // const currentDate = current.getDate();
        // const currentYear = current.getFullYear();
        // const date = `${currentMonth}/${currentDate}/${currentYear}`;
        // console.log(date);

    //     const userEmail = user.email;
    //     const notification = {userEmail, fit, highTemp, lowTemp, desc};
    //     console.log(notification)

        // const response = await fetch('/api/notifications', {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify(notification)
        // })

        // const json = await response.json();
        // if (!response.ok) {
        //     setError(json.error);
        //     setEmptyFields(json.emptyFields);
        // }
        // if (response.ok) {
        //     setFit('');
        //     setHighTemp(0);
        //     setLowTemp(0);
        //     setDesc('');
        //     setError(null);
        //     setEmptyFields([]);
        //     console.log("successfully created notification");
        // }
    // }

    const [notis, setNotis] = useState([]);

    useEffect(() => {
        const fetchNotifications = async () => {
            const getUser = JSON.parse(localStorage.getItem("user"));
            const userEmail = getUser.email;
            const params = {param1: userEmail};

            const response = await fetch(`/api/notifications?${new URLSearchParams(params)}`);
            const json = await response.json();

            if (response.ok) {
                setNotis(json);
                console.log(json);
            }
        }
        fetchNotifications();
    }, [])

    const deleteNoti = async (event, id) => {

        const response = await fetch('/api/notifications/' + id, {
            method: 'DELETE'
        })
        const json = await response.json();

        if (response.ok) {
            event.target.parentNode.parentNode.parentNode.remove(); // delete the content from screen
            console.log("succcessfully deleted notification");
            console.log(json);
        }
    }

    return (
        <div className="hidden" id="notificationDisplay">
            <h2>Notifications</h2>

            {/* <input type="text" placeholder="recommended fit" value={fit} onChange={handleFitChange}></input><br></br><br></br>
            <input type="text" placeholder="hightemp" value={highTemp} onChange={handleHighTempChange}></input><br></br><br></br>
            <input type="text" placeholder="lowtemp" value={lowTemp} onChange={handleLowTempChange}></input><br></br><br></br>
            <input type="text" placeholder="description" value={desc} onChange={handleDescChange}></input><br></br><br></br>
            <button type="submit" value="Submit" onClick={handleCreateNoti}>Submit</button>
            {error && <div className="error">{error}</div>} */}
            {notis.map((currentNoti, idx) => {
                return (
                    <div className="eachNotification" key={idx}>
                        <div className="notiTitle">
                            <h5 className="notiCreatedAt">{format(new Date(currentNoti.createdAt), 'MM/dd/yyyy, eeee')}, {currentNoti.location}</h5>
                            <div className="trashIcon"><img src={trashIocn} alt="delete icon" onClick={event => deleteNoti(event, currentNoti._id)}/></div>
                        </div>
                        <div className="notiTemps">
                            <img src={currentNoti.icon} alt="today's img desc"/>
                            <p className="notiHighTemp">Highest: {currentNoti.hightemp}<span>&#176;</span>F</p>
                            <p className="notiLowTemp">Lowest: {currentNoti.lowtemp}<span>&#176;</span>F</p>
                        </div>
                        <p className="notiDesc">Description: {currentNoti.description}</p>
                        <p className="notiFit">Recommended Fit: {currentNoti.recommendedfit}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default Notifications;