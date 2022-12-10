import React, { useEffect, useState } from "react";
// import "./Popup.css"
import "../../../popup.css";
//import PubSub from "pubsub-js";
import store from "../../../redux/store";
import { useAuthContext } from "../../../hooks/useAuthContext";

// function Popup(props) {
//   return (props.trigger) ? (
//     <div className="popup">
//         <div className="popup-inner">
//             <button className="close-bttn" onClick={() => props.setTrigger(false)}>close</button>
//             { props.children }
//         </div>
//     </div>
//   ) : "";
// };
const Popup = ({ open, onClose }) => {
  const [message, setMessage] = useState("");
  const { user } = useAuthContext();
  useEffect(() => {
    if (open) {
      let getTemps = JSON.parse(localStorage.getItem("highestTemp7Days"));
      let index = JSON.parse(localStorage.getItem("dayClickedOn"));
      console.log(getTemps[index])
      const state = +store.getState().value;
      let list = {};
      let getSliderValue = JSON.parse(localStorage.getItem("sliderValue"));
      console.log(getSliderValue, 'getSliderValue');

      switch (getSliderValue) {
        case 0:
          list = {
            75: "Short sleeve",
            65: "Long sleeve",
            55: "Hoodie",
            45: "Thin jacket",
            30: "Wool sweater",
            25: "Cotton jacket",
            20: "Thin down jacket",
            5: "Thick down jacket",
          }
          break;
        case 20:
          list = {
            80: "Short sleeve",
            70: "Long sleeve",
            60: "Hoodie",
            50: "Thin jacket",
            35: "Wool sweater",
            30: "Cotton jacket",
            25: "Thin down jacket",
            10: "Thick down jacket",
          }
          break;
        case 40:
          list = {
            85: "Short sleeve",
            75: "Long sleeve",
            65: "Hoodie",
            55: "Thin jacket",
            40: "Wool sweater",
            35: "Cotton jacket",
            30: "Thin down jacket",
            15: "Thick down jacket",
          }
          break;
        case 60:
          list = {
            90: "Short sleeve",
            80: "Long sleeve",
            70: "Hoodie",
            60: "Thin jacket",
            45: "Wool sweater",
            40: "Cotton jacket",
            35: "Thin down jacket",
            20: "Thick down jacket",
          }
          break;
        case 80:
          list = {
            95: "Short sleeve",
            85: "Long sleeve",
            75: "Hoodie",
            65: "Thin jacket",
            50: "Wool sweater",
            45: "Cotton jacket",
            40: "Thin down jacket",
            25: "Thick down jacket",
          }
          break;
        case 100:
          list = {
            100: "Short sleeve",
            90: "Long sleeve",
            80: "Hoodie",
            70: "Thin jacket",
            55: "Wool sweater",
            50: "Cotton jacket",
            45: "Thin down jacket",
            30: "Thick down jacket",
          }
          break;
        //default:
          //break;
      }
      
      console.log(index)
      console.log(getTemps)
      console.log(getTemps[index])

      const arr = Object.keys(list).reverse();
      console.log(arr)

      for (let i = 0; i < arr.length; i++) {
        if (getTemps[index] >= arr[i]) {
          console.log(arr[i])
          setMessage(`Today's weather is good for ${list[arr[i]]}`);
          break;
        }
      }
    }
  }, [open]);
  //});
  const closePopup = (e) => {
    // let userClicked = e.currentTarget;
    // userClicked.parentNode.parentNode.classList.add("hidden");
    onClose();
  };

  return (
    <div>
      {user && (
        <div className={`${open ? '' : 'hidden'} popupDisplay`}>
          {/* <button>Close</button> */}
          {/* <h3>Recommended Clothing</h3> */}

          <div className="innerPopup">
            <button onClick={closePopup}>Close</button>
            <h3>Recommended Clothing</h3>
            <div className="clothes mt-10">
              <i className="iconfont icon-yurongfu3 f100"></i>
              <i className="iconfont icon-TROUSERS f100"></i>
              <span className="mt-10">{message}</span>
            </div>
          </div>
          <div className="backgroundPopup"></div>
        </div>
      )}
      {!user && (
        <div className={`${open ? '' : 'hidden'} popupDisplay`}>
          <div className="innerPopup">
            <button onClick={closePopup}>Close</button>
            <h3>Login to use this feature</h3>
          </div>
          <div className="backgroundPopup"></div>
        </div>
      )}
    </div>
  );
};

export default Popup;