import store from "../../redux/store";

export default function getRecommendation(getTemp) {
    // let getTemps = JSON.parse(localStorage.getItem("highestTemp7Days"));
    // let index = 0;
    const state = +store.getState().value;
    let list = {};
    let getSliderValue = JSON.parse(localStorage.getItem("sliderValue"));

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

    const arr = Object.keys(list).reverse();

    let resultFit;

    for (let i = 0; i < arr.length; i++) {
        if (parseInt(getTemp) >= parseInt(arr[i])) {
            resultFit = `${list[arr[i]]}`;
            break;
        }
    }
    
    // console.log(resultFit);
    return resultFit;
}