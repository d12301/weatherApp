import { useState } from 'react';
import '../weatherApp/WeatherApp.css';
import search from '../assets/search.png';
import clear from '../assets/clear.png';
import cloud from '../assets/cloud.png';
import drizzle from '../assets/drizzle.png';
import rain_icon from '../assets/rain.png';
import snow from '../assets/snow.png';
import wind from '../assets/wind.png';
import humi from '../assets/humidity.png';
const WeatherApp=()=>{

   let apiKey="5fe59e0df96d31aaedfce5801b7fd367";
   const [wicon,setWicon]= useState(cloud);
   const search1= async ()=>{
  const element=document.getElementsByClassName("cityInput");
     if(element[0].value==='')
     {
      return 0;
      }
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apiKey}`;
   let response=await fetch(url);
   let data= await response.json();
   const humi=document.getElementsByClassName('humi')
   const wind=document.getElementsByClassName('wind')
   const temp=document.getElementsByClassName('temp');
   const location =document.getElementsByClassName('location');

   humi[0].innerHTML=data.main.humidity+'%';
   wind[0].innerHTML=data.wind.speed+'km/h';
   temp[0].innerHTML=data.main.temp+ "°C";
   location[0].innerHTML=data.name;

   if(data.weather[0].icon==='01d'||data.weather[0].icon==='01n'){
       setWicon(clear);
   }
   else if(data.weather[0].icon==='02d'||data.weather[0].icon==='02n')
   {
    setWicon(cloud);
   }
   else if(data.weather[0].icon==='03d'||data.weather[0].icon==='03n')
   {
    setWicon(drizzle);
   }
   else if(data.weather[0].icon==='09d'||data.weather[0].icon==='09n')
   {
    setWicon(rain_icon);
   }
   else if(data.weather[0].icon==='10d'||data.weather[0].icon==='10n')
   {
    setWicon(rain_icon);
   }
   else if(data.weather[0].icon==='13d'||data.weather[0].icon==='13n')
   {
    setWicon(snow);
   }
   else{
    setWicon(clear);
   }
  }
    return (
        
        <div  className='conatiner'>
            <div className='top_bar'>
                <input type="text" className='cityInput' placeholder='Search' />
                <div className='serach' onClick={()=>{search1()}}>
                    <img src={search} alt="" />

                </div>
            </div>
            <div className='weather_image'>
                <img src={wicon} alt="" />

            </div>
            <div className='temp'> 24 &deg;C </div>
            <div className="location">London</div>
            <div className="data_conatiner">
                <div className="element">
                    <img src={humi} alt=""  className='icon'/>
                    <div className="data">
                        <div className="humi">64%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind} alt="" className='icon' />
                    <div className="data">
                        <div className="wind">18 km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default WeatherApp