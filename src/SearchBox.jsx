import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
export default function SearchBox({updateInfo}){
    let[city,setCity]=useState("");
   let UPI= "https://api.openweathermap.org/data/2.5/weather";
   let UPI_key="bb8c9c6eaa3945d2e6ee50d39b306e7b";
   let getWeatherInfo=async()=>{
    let response=await fetch(`${UPI}?q=${city}&appid=${UPI_key}&units=metric`);
    let jsonResponse=await response.json();
    console.log(jsonResponse);
    let result={
        temp:jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        feelsLike:jsonResponse.main.feels_like,
        weather:jsonResponse.weather[0].description,
    }
    console.log(result);
    return(result);

   }

    let handleChange=(evt)=>{
        setCity(evt.target.value);
    }
    let handleSubmit=async(evt)=>{
        evt.preventDefault();
        console.log(city);
        setCity("");
       let result= await getWeatherInfo();
       updateInfo(result);
    }
    return(
        <div> 
           
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="city name" variant="outlined"  value={city}  onChange={handleChange} required/>
            <br /><br />
            <Button variant="contained"  type='submit'>
                search
                 
            </Button>

            </form>
        </div>
        
    )
}