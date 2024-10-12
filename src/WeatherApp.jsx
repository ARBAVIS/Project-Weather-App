
import { useState } from "react"
import SearchBox from "./SearchBox"
import InfoBox from "./infoBox"
export default function WeatherApp(){
    const[weatherInfo,setWeatherInfo]=useState({
        city:"chopda",
        feelsLike: 10.17,
        humidity: 93,
        temp: 10.62,
        temMax:11.05,
        tempMin: 11.05,
        weather: "fog"
    })
    let updateInfo=(result)=>{
        setWeatherInfo(result);
    }
    return(
        <div> 
            <h2>Weather App by Delta</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo} />
        </div>
    ) 

}