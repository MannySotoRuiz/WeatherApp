import React from 'react'
// import "./Popup.css"
import "../../../popup.css";

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

const Popup = () => {

    const closePopup = e => {
        let userClicked = e.currentTarget;
        userClicked.parentNode.parentNode.classList.add("hidden");
    };

    return (
        <div className="hidden popupDisplay">
            {/* <button>Close</button> */}
            {/* <h3>Recommended Clothing</h3> */}
            <div className="innerPopup">
                <button onClick={closePopup}>Close</button>
                <h3>Recommended Clothing</h3>
                <div className='clothes mt-10'>
                    <i className='iconfont icon-yurongfu3 f100'></i>
                    <i className='iconfont icon-TROUSERS f100'></i>
                    <span className='mt-10'>Today's weather is good for cotton coat</span>
                </div>
            </div>
            <div className="backgroundPopup"></div>
        </div>
    );
};

export default Popup;