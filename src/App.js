import React, { useState, useEffect } from 'react';
import './App.css';
import weather from "../src/images/Weather2.png"
import { Container,TextField, Button,Box, Card,CardContent,Grid,Icon } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Weather from "./Weather.js"
 
import Practice from "./Practice.js"
// import { Card } from 'react-bootstrap';
import InfoBox from "./InfoBox"
import Table from "./Table"
import Linegraph from './Linegraph';
import BottomInfo from './BottomInfo';
function App() {
const[info,SetInfo]=useState([])
const[city,setCity]=useState("")
const[state,setState]=useState("")
const[hourData,SetHourData]=useState([]);
const[hourTemp,SetHourTemp]=useState([]);
const[farenheit,SetFarenheit]=useState(false)
const[celsius,SetCelsius]=useState(null)
const[dailyData,setDailyData]=useState([])
// const[icon,SetIcon]=useState([])
const [unit,SetUnit]=useState("&units=I")
const [input,SetInput]=useState("");
const [time,setTime]=useState([]);
const[currData,setcurrData]=useState([])
const[sunset1,setSunset1]=useState("")
const[sunset2,setSunset2]=useState("")

 
function testing(city_name){
  return ( /\s/g.test(city_name))
  
}
const getcityInfo1=(event)=>{
  console.log(event)
 console.log(input)
 if (input!=""){
  var temp1=input.split(",")
  
   setCity(temp1[0])
    // testing(temp1[0])===true? setCity(temp1[0].replace(/\s/g, '')):setCity(temp1[0])

   temp1[1]? setState(temp1[1]):setState("");
  //  event.target.value="";
 
 }

}


 const getcityInfo=(event)=>{
  
   if(event.key==="Enter" ){
     
     var temp=event.target.value.split(",")
     // event.preventDefault()
     console.log(temp)
     setCity(temp[0])
    //  testing(temp[0])===true? setCity(temp[0].replace(/\s/g, '')):setCity(temp[0])
     // setState(temp[1])
      temp[1]? setState(temp[1]):setState("");
      event.target.placeholder="Enter City,State"
      event.target.value="";

 
     
   }
   console.log(city,"cityyy")

   

   
  

  
 }
 
 const getcityInfoSearchIcon=(event)=>{
   console.log("EVENT",event.target.value)
 
   const temp1=event.target.value.split(",")
   console.log(temp1)
     setCity(temp1[0])
      temp1[1]? setState(temp1[1]):setState("");
 }
 
 
 function getFarenheit(){
   SetUnit("&units=I")
   SetFarenheit(true)
   return unit
 }
 function getCelsius(){
   SetUnit("&units=M")
   SetCelsius(true)
 
 
   return unit
 
 }
 console.log(celsius)
 
 
 // const unit="&units=I"
 
 useEffect(() =>  {
   console.log(city)
       const apikey="0402e9bd1c384a0ab953752fc904c7d2	"
   // console.log(celsius===true)
   // console.log(celsius)
   //   const a="&units=M"
   //   celsius?unit=a:unit="&units=I"
   //   console.log(unit)
   
      
    
   let url;
   let url1;
   let url2;
   if ((city!=="") && (state!=="")){
      url=`https://api.weatherbit.io/v2.0/forecast/daily?city=${city},${state}&key=${apikey}${unit}`;
      url1=`https://api.weatherbit.io/v2.0/forecast/hourly?city=${city},${state}&key=${apikey}&hours=48${unit}`;
      url2=`https://api.weatherbit.io/v2.0/current?city=${city},${state}&key=${apikey}${unit}`;
 
   }
   else if ((city!=="") && (state==="")){
     url= `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${apikey}${unit}`;
     url1=`https://api.weatherbit.io/v2.0/forecast/hourly?city=${city}&key=${apikey}&hours=48${unit}`
     url2=`https://api.weatherbit.io/v2.0/current?city=${city}&key=${apikey}${unit}`
   }
   else{
    
     url=`https://api.weatherbit.io/v2.0/forecast/daily?city=Chicago,IL&key=${apikey}${unit}`;
     url1=`https://api.weatherbit.io/v2.0/forecast/hourly?city=Chicago,IL&key=${apikey}&hours=48${unit}`
     url2=`https://api.weatherbit.io/v2.0/current?city=Chicago,IL&key=${apikey}${unit}`
   }
   console.log(url)
   console.log(city,"CITY")
 
   const getCityData=async()=>{
   
      await fetch(url)
 
     .then(response=>response.json())
 
     // if(setAlert===True){
     //   return "hi"
     // }
   
    
    
 
     .then(data=>{
       const info=
       {
         name:data.city_name,
         country:data.country_code,
         state:data.state_code,
         cur_min:data.data[0].min_temp,
         cur_max:data.data[0].max_temp,
         
 
       
 
       }
 
 
 
 
       const dailyData =
       data.data.map(eachDay=>(
         {
           dateDaily:eachDay.datetime,
           low:eachDay.low_temp,
           high:eachDay.high_temp,
           icon:eachDay.weather.icon,
           description:eachDay.weather.description,
           urlIcon:`https://www.weatherbit.io/static/img/icons/${eachDay.weather.icon}.png`
 
 
 
         }
       ))
       
       dailyData.splice(0,1)
       dailyData.splice(13,2)
       setDailyData(dailyData)
       setDailyData(dailyData)
       SetInfo(info)
       console.log(url,"url")

     })
 
     .catch(e=>console.log(e.message))
 
       // .catch(e=>alert("no results found"))
 
    
 
 
   }
   const getCurrData=async()=>{
  
     await fetch(url2)


      .then(response=>response.json())
      .then(data=>{

        
         const currData=
  
 
          
           {
             description:data.data[0].weather.description,
 
             date:data.data[0].datetime,
             cur_temp:data.data[0].temp,
             icon_code:data.data[0].weather.code,
             // cur_min:data.data[0].min_temp,
             // cur_max:data.data[0].max_temp,
            aqi:data.data[0].aqi,
            windDirection:data.data[0].wind_cdir_full,
            pod:data.data[0].pod,
            feelsLikeTemp:data.data[0].app_temp,
            cloudCoverage:data.data[0].clouds,
            visibility:data.data[0].vis,
            //  sunset:parseFloat(data.data[0].sunset,10) + 5 ,
             uv:data.data[0].uv,
             windspeed:data.data[0].wind_spd,
             precipitation:data.data[0].precip
 
 

 
           }
           setcurrData(currData)

           console.log(url2,"url2")

          
        
         
        
        
      })
      .catch(e=>console.log(e.message))
 
  
    
    }

   
 
   
   const gethourlyData=async()=>{
     const i=0
     await fetch(url1)

      .then(response=>response.json())
      .then(data=>{
         const hourData=data.data.map(each_hour=>(
           // console.log(each_country.datetime)
           {
             // date:each_hour.datetime,
             temp:each_hour.temp,
             time:each_hour.timestamp_local,
             urlIcon:`https://www.weatherbit.io/static/img/icons/${each_hour.weather.icon}.png`
 
          
 
 
 
           }))
 
           SetHourData(hourData)
           console.log(url1,"url1")

        
         
        
        
      })
      .catch(e=>alert("no results found"))
 
 
  
    
    }
    SetCelsius(false)
    SetFarenheit(false)

      getCurrData()

      getCityData()
      gethourlyData()
    
 
  
   // setTime([])
 
 }, [city,state,farenheit,celsius])

 // console.log(hourData.timestamp_local)
 console.log(hourData.date)
 console.log(hourData)
 console.log(hourTemp)
 console.log(dailyData)
 
 console.log(currData.cur_temp,"current temp")
 
 function isState(state) {
   if (isNaN(state)!=true){
       state=null
   }
   console.log(state)
   return state
 }
 
    function getTime(time) {
     time=parseInt(time)
     console.log(time)
     if (time === 0) {
       const totalTime = "12am";
       return totalTime;
     }  if (time === 12) {
       const totalTime = "12pm";
       return totalTime;
     } else if (time >= 1.0 && time <= 11.0) {
       const totalTime = time + "am";
       return totalTime;
     } else if (time >= 13 && time <= 23) {
       const time_sample = time - 12;
       const totalTime = time_sample + "pm";
       return totalTime;
     }
   }
 
 
 
  
 
   // useEffect(() => {
   //  const Icon=async()=>{
   //    await fetch(iconLink)
   //    .then(data=>{
   //      SetIcon(data)
   //    })
   //  }
   
   // }, [city,state])
   // console.log(Icon)
   // const urlIcon= `https://www.weatherbit.io/static/img/icons/${data.icon}.png`
   function sample(){
     return(
       <TextField  onChange={e=> SetInput(e.target.value)} onKeyPress={getcityInfo} placeholder="Enter city,state" value="" variant="outlined" ></TextField>
 
     )
 
   }
  
 return (
  
   <div className="App">
 
 
     <div className="app__header">
     <img className="logo" src={weather}  alt="hi"/>
     <div className="app_input">
     {/* <large className="app__enterInput">Enter City, State</large> */}
     {/* <Button type="input" onKeyPress={getcityInfo} placeholder="Enter city,state"  variant="outlined"></Button> */}
     <div className="app__search">
 
     <TextField   id="textField" onChange={e=> SetInput(e.target.value)} onKeyPress={getcityInfo}  placeholder="Enter City, State" variant="outlined"></TextField>
    
     <SearchIcon id="searchIcon" fontSize="large" onClick={getcityInfo1} size="lg" className="app__searchIcon"  />
     
 
     </div>
 
   
     </div> 
     {console.log("input",input)}
 
 
    
    
     <div className="app__buttons">
     <Button  onClick={getCelsius} color="primary" >
       Celsius
     </Button>
     <Button  onClick={getFarenheit} color="primary" >
       Farenheit
     </Button>
     </div>
    
     </div>
     <hr />
     <div className="app_seperation">
     <div className="app__left">
     <div className="app_weather">
     {console.log(hourData.date,"date")}
     {/* {setTime(getTime(hourData.date.split("T")[1]))}
     {console.log(time)} */}
    
     <Weather
     // cur_min="70"
     // cur_max="80"
     // icon_code="200"
     // name="dublin"
     // date="08-07-2020"
     // cur_temp="79"
     // description="thunderstorm"
 
     // real data
    
      name ={info.name}
      country={info.country}
       state={info.state}
       date={currData.date}
       cur_min={info.cur_min}
       cur_max={info.cur_max}
       pod={currData.pod}
       // description={currData.description}
       // cur_temp={info.cur_temp}
       cur_temp={currData.cur_temp}
        description={currData.description}
       icon_code={currData.icon_code}
       // icon_code={info.icon_code}
       // time={time[0]}
      
    />
    
     <div className="all_hours">
     <Box display="flex">
     {hourData.map(sample=>(
 
       <Grid 
       container
       direction="row"
   justify="flex-start"
 
   alignItems="center"
       item="true">
    
 
       <Card className="app__hourlyCard">
      <CardContent>
         {/* {<h3>{sample.date1}</h3>} */}
  
        {<h3>{getTime(sample.time.split("T")[1])}</h3>}
        <img width="50" height="50" src={sample.urlIcon} alt=""/>
 
        {<h3>{sample.temp}°</h3>}
       
 
      </CardContent>
    
    </Card> 
    {/* {time.push(getTime(sample.date.split("T")[1]))} */}
    {/* {setTime(sample.date.split("T")[1])} */}
 
    </Grid>
 
))}
    
     </Box>   
     </div>
 
       <hr/>
       <div className="container">
     <Container  maxWidth="lg"  />
    
      {/* {setDailyData(dailyData.splice(0,14))} */}
       {dailyData.map(data=>(
      <div className="Bottom">
       <h3>{data.dateDaily}</h3>
     
       <img width="50" height="50" src={data.urlIcon} alt=""/>
         <div className="minMax">
         <h3>{data.high}°</h3>
         <h3 className="dayMin">{data.low}°</h3>
 
         </div>
        
       
      </div>
        ))}
       </div>
 
      
     
 
   </div>

{console.log(currData.visibility,"visibilityyy")}
 <BottomInfo //Circle with uv index info, etc
 aqi={currData.aqi}
 windspeed={currData.windspeed}
 feelsLikeTemp={currData.feelsLikeTemp}
 uv={currData.uv}
 windDirection={currData.windDirection}
 cloudCoverage={currData.cloudCoverage}
 visibility={currData.visibility}
 precipitation={currData.precipitation}
  />
  
 
 
     </div>
     <div className="app__right">
       <InfoBox state={isState(info.state)}
 //test commit dhhdhd
country={info.country} city={city} info={info}/>
 
   <Table />
     </div>
     </div>
 
 
 
   </div>
  
 );
 
 }
 
 
 
export default App;
 

