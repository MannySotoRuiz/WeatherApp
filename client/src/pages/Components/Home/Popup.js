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
            75: "short sleeves.",
            65: "long sleeves.",
            55: "a hoodie.",
            45: "a thin jacket.",
            30: "a wool sweater.",
            25: "a cotton jacket.",
            20: "a thin down jacket.",
            5: "a thick down jacket.",
          }
          break;
        case 20:
          list = {
            80: "short sleeves.",
            70: "long sleeves.",
            60: "a hoodie.",
            50: "a thin jacket.",
            35: "a wool sweater.",
            30: "a cotton jacket.",
            25: "a thin down jacket.",
            10: "a thick down jacket.",
          }
          break;
        case 40:
          list = {
            85: "short sleeves.",
            75: "long sleeves.",
            65: "a hoodie.",
            55: "a thin jacket.",
            40: "a wool sweater.",
            35: "a cotton jacket.",
            30: "a thin down jacket.",
            15: "a thick down jacket.",
          }
          break;
        case 60:
          list = {
            90: "short sleeves.",
            80: "long sleeves.",
            70: "a hoodie.",
            60: "a thin jacket.",
            45: "a wool sweater.",
            40: "a cotton jacket.",
            35: "a thin down jacket.",
            20: "a thick down jacket.",
          }
          break;
        case 80:
          list = {
            95: "short sleeves.",
            85: "long sleeves.",
            75: "a hoodie.",
            65: "a thin jacket.",
            50: "a wool sweater.",
            45: "a cotton jacket.",
            40: "a thin down jacket.",
            25: "a thick down jacket.",
          }
          break;
        case 100:
          list = {
            100: "short sleeves.",
            90: "long sleeves.",
            80: "a hoodie.",
            70: "a thin jacket.",
            55: "a wool sweater.",
            50: "a cotton jacket.",
            45: "a thin down jacket.",
            30: "a thick down jacket.",
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
        if (parseInt(getTemps[index]) >= parseInt(arr[i])) {
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