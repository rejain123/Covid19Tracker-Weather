import React, { useState,useEffect, useRef } from 'react'
import {Card,CardContent} from '@material-ui/core';
import "./InfoBox.css"



function InfoBox({state,country,city,info}) {
    const [covidData,setCovidData]= useState([])
    const [covidDataCountry,setCovidDataCountry]= useState([])
    const[isThereState,setIsThereState]=useState(true)
    console.log(state)

    const states = [
        ['Arizona', 'AZ'],
        ['Alabama', 'AL'],
        ['Alaska', 'AK'],
        ['Arkansas', 'AR'],
        ['California', 'CA'],
        ['Colorado', 'CO'],
        ['Connecticut', 'CT'],
        ['Delaware', 'DE'],
        ['Florida', 'FL'],
        ['Georgia', 'GA'],
        ['Hawaii', 'HI'],
        ['Idaho', 'ID'],
        ['Illinois', 'IL'],
        ['Indiana', 'IN'],
        ['Iowa', 'IA'],
        ['Kansas', 'KS'],
        ['Kentucky', 'KY'],
        ['Louisiana', 'LA'],
        ['Maine', 'ME'],
        ['Maryland', 'MD'],
        ['Massachusetts', 'MA'],
        ['Michigan', 'MI'],
        ['Minnesota', 'MN'],
        ['Mississippi', 'MS'],
        ['Missouri', 'MO'],
        ['Montana', 'MT'],
        ['Nebraska', 'NE'],
        ['Nevada', 'NV'],
        ['New Hampshire', 'NH'],
        ['New Jersey', 'NJ'],
        ['New Mexico', 'NM'],
        ['New York', 'NY'],
        ['North Carolina', 'NC'],
        ['North Dakota', 'ND'],
        ['Ohio', 'OH'],
        ['Oklahoma', 'OK'],
        ['Oregon', 'OR'],
        ['Pennsylvania', 'PA'],
        ['Rhode Island', 'RI'],
        ['South Carolina', 'SC'],
        ['South Dakota', 'SD'],
        ['Tennessee', 'TN'],
        ['Texas', 'TX'],
        ['Utah', 'UT'],
        ['Vermont', 'VT'],
        ['Virginia', 'VA'],
        ['Washington', 'WA'],
        ['West Virginia', 'WV'],
        ['Wisconsin', 'WI'],
        ['Wyoming', 'WY'],
    ];
    

    function getStateName (states,abbrev){
        for (var i=0;i<states.length;i++){
            if (states[i][1]===abbrev){
                return (states[i][0])
            }
        }
    } 

   
    
   
   
   
    let stateName;
        var urlState=useRef(null)
        useEffect(() => {
            console.log(state)
            state? stateName=getStateName(states,state): stateName=null
            console.log(stateName===null)
            console.log(stateName)
            if (stateName!=null){

                console.log(stateName)
                urlState=`https://disease.sh/v3/covid-19/states/${stateName}`
            
            const getCovidData = async()=>{
                await fetch(urlState)
                .then(response=>response.json())
                .then(data=>{
                    const covidData=
                    {
                        todayStateCases:data.todayCases,
                        todayStateDeaths:data.todayDeaths,
                        todayTotalCases:data.cases,
                        todayTotalDeaths:data.deaths
                    }
                    setCovidData(covidData)

                })

            }
            getCovidData() 

        }
       
        
        }, [city,state])
    console.log(urlState.current===null)
    console.log(covidData)
    console.log(country)

    var urlCountry=("https://disease.sh/v3/covid-19/countries/USA?strict=true")

    useEffect(() => {
        
        // const urlCountry=`https://disease.sh/v3/covid-19/countries/uk?strict=true`
        urlCountry=`https://disease.sh/v3/covid-19/countries/${country}?strict=true`


        const getCovidDataCountry= async()=>{
            await fetch(urlCountry)
            .then(response=>response.json())
            .then(data=>{
                const covidDataCountry={
                    todayCountryCases:data.todayCases,
                        todayCountryDeaths:data.todayDeaths,
                        todayCountryTotalCases:data.cases,
                        todayCountryTotalDeaths:data.deaths

                }
                setCovidDataCountry(covidDataCountry)
            })

        }
            getCovidDataCountry()
     
    }, [city,state])
   console.log(covidDataCountry)
   console.log(country)
   console.log(urlCountry)
   console.log(covidDataCountry.todayCountryTotalCases)
   
    

   function stateval(){
       console.log(urlState)
       console.log(urlState? true:false)
       console.log(urlState,"urlState")
    if (urlState){
        return (
            <div>
            <h2>{state}</h2>
            <h3>Cases Today: {covidData.todayStateCases}</h3>
          <h3>Deaths Today: {covidData. todayStateDeaths}</h3>
          <h4>Total Cases: {covidData.todayTotalCases}</h4>
          <h4>Total Deaths: {covidData.todayTotalDeaths}</h4>
            </div>
        
          )
   
    }
    else if (urlState.current===null){
    
        return false
    }
}
        
var temp="true"

   function isState(){
       console.log(isThereState)

       console.log(state,"state12")
       if (state){
        // setIsThereState(true)

           return stateval()
       }
       else if (state===null){
           console.log("hii")
           temp="false"
        //    return temp
        // setIsThereState(false)
        // return isThereState


       }
          
       
       
       
   }
    return (
        <div className="covid__info"  >
        
       
        <Card >
        <CardContent>
            <h1 className="covid_label">Covid 19 Tracker</h1>
            <hr className="horizontal"/>
        </CardContent>
        <div className="covidData">

        
        <div className="stateData">
        <CardContent  >
        {isState()}

       {/* {{state?stateval():continue}} */}
            
        
        </CardContent>
        </div>
        <div className="countryData">
        {console.log(stateval())}
        {console.log(stateval()===false + "statevalll")}
       {/* <CardContent className={`${stateval()===false && "countryData--selected"}`} >   */}
       {/* <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`} > example */}
       <CardContent className={`coivdData ${temp==="false" && "countryData--selected"}`} >  

        <h2>{country}</h2>        
        <h3>Cases Today: {covidDataCountry.todayCountryCases}</h3>
        <h3>Deaths Today: { covidDataCountry.todayCountryDeaths}</h3>
        <h4>Total Cases: {covidDataCountry.todayCountryTotalCases}</h4>
        <h4>Total Deaths: {covidDataCountry.todayCountryTotalDeaths}</h4>

  

        </CardContent>
        </div>
       
       
        </div>
       
        </Card>
            
        </div>
    )
}

export default InfoBox
