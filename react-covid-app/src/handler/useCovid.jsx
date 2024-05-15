import { useState } from "react";
import data from "../utils/constants/provinces";

const useCovid = () => {
    
    const [covidData, setCovidData] = useState(() => {
        
        const storedData = JSON.parse(localStorage.getItem('provinsiData'));
        
        return storedData ? storedData : data.provinces;
    });

    const updateProvinsiData = (newcovidData) => {
        setCovidData(newcovidData);
    };
    
    return { covidData, updateProvinsiData };

};

export default useCovid;

