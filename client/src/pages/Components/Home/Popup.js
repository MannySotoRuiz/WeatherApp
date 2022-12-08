import React, { useEffect, useState } from "react";
// import "./Popup.css"
import "../../../popup.css";
//import PubSub from "pubsub-js";
import store from "../../../redux/store";

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
  useEffect(() => {
    if (open) {
      //PubSub.subscribe("openPopup", (e, data) => {
      console.log(store.getState().value);
      //0,20,40,60,80,100
      let getTemps = JSON.parse(localStorage.getItem("highestTemp7Days"));
      let index = JSON.parse(localStorage.getItem("dayClickedOn"));
      //let tem_c = 
      let list = {};
      let arr = [];
      //let getSliderValue = JSON.parse(localStorage.getItem("sliderValue"));
      if (store.getState().value == 60) {
        list = {
          100: "Short sleeve",
          90: "Long sleeve",
          80: "Hoodie",
          70: "Thin jacket",
          55: "Wool sweater",
          50: "Cotton jacket",
          45: "Thin down jacket",
          30: "Thick down jacket",
        };

        arr = [100, 90, 80, 70, 55, 50, 45, 30];
      } else if (store.getState().value == 100) {
        list = {
          100: "Short sleeve",
          90: "Long sleeve",
          80: "Hoodie",
          70: "Thin jacket",
          55: "Wool sweater",
          50: "Cotton jacket",
          45: "Thin down jacket",
          30: "Thick down jacket",
        };

        arr = [100, 90, 80, 70, 55, 50, 45, 30];
      } else if(store.getState().value == 20){
        list = {
          95: "Short sleeve",   //35
          89: "Long sleeve",    //32
          86: "Hoodie",         //30
          80: "Thin jacket",    //27
          77: "Wool sweater",   //25
          73: "Cotton jacket",  //23
          68: "Thin down jacket",   //20
          62: "Thick down jacket",  //17
        };

        arr = [95, 89, 86, 80, 77, 73, 68, 62];
      }

      for (let i = 0; i < arr.length; i++) {
        if (getTemps[index] >= arr[i]) {
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
  );
};

export default Popup;