import React, { useState } from "react";
import { Slider } from "antd-mobile";
// import { DemoBlock } from 'demos'
import store from '../../../redux/store';

const marks = {
  0: "wear less",
  20: "",
  40: "",
  60: "",
  80: "",
  100: "wear more",
};

const Preference = () => {
  let [value, setValue] = useState("60");
  
  let chan = (a) => {
    setValue(a);
    console.log(a);
    store.dispatch({type:'change',value:a})
    localStorage.setItem("sliderValue", JSON.stringify(a));
  };
  return (
    <div id="preferenceDisplay">
      {/* <div className="hidden" id="preferenceDisplay"> */}
      <h2>Weather & Clothes Preference</h2>
      <Slider
        style={{ "--fill-color": "#00b578" }}
        defaultValue={value}
        marks={marks}
        ticks
        onChange={chan}
      />
    </div>
  );
};

export default Preference;
