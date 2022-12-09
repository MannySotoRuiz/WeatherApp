import React from "react";
import { Slider } from "antd-mobile";
// import store from '../../../redux/store';
import { useSliderValue } from '../../../hooks/useSliderValue';

const marks = {
  0: "wear less",
  20: "",
  40: "",
  60: "",
  80: "",
  100: "wear more",
};

const Preference = () => {
  // let [value, setValue] = useState("60");
  
  const { updateSliderValue, error: updateError, isLoading: updateIsLoading } = useSliderValue();
  const user = JSON.parse(localStorage.getItem("user"));
  let getSliderValue = JSON.parse(localStorage.getItem("sliderValue"));
  if (!getSliderValue) {
    getSliderValue = 60;
    console.log(getSliderValue);
  }
  let chan = async (a) => {
    // setValue(a);
    console.log(a);
    // store.dispatch({type:'change',value:a})
    // localStorage.setItem("sliderValue", JSON.stringify(a));
    await updateSliderValue(user.email, a);
  };
  return (
    <div id="preferenceDisplay">
      {/* <div className="hidden" id="preferenceDisplay"> */}
      <h2>Weather & Clothes Preference</h2>
      <Slider
        style={{ "--fill-color": "#00b578" }}
        defaultValue={getSliderValue}
        marks={marks}
        ticks
        onChange={chan}
        disabled={updateIsLoading}
      />
      {updateError && <div className="errorUpdatingValue">{updateError}</div>}
    </div>
  );
};

export default Preference;
