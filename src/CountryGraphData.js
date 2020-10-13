

import React, { useRef } from 'react'
import Select from '@material-ui/core/Select';
import { useEffect } from 'react';
import { useState } from 'react';
import { MenuItem, InputLabel } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import {Line} from 'react-chartjs-2';
import numeral from "numeral";
import "./CountiesData.css"
import Linegraph from './Linegraph';

function CountryGraphData({city,state}) {
    const [country,setCountry]=useState([])

    const[countryCases,setCountryCases]=useState([])
const[countryDates,setCountryDates]=useState([])
const[countryName,setCountryName]=useState("")
    useEffect(() => {
        setCountryCases([])
        setCountryDates([])
        const getData1=async()=>{
            const url1="https://disease.sh/v3/covid-19/countries"
            await fetch(url1)
            .then(response=>response.json())
            .then(data=>{
                  const country=data.map(each_country=>(
                      {
                        country1:each_country.country


                      }
    
                ))
                setCountry(country)
            })

    
        }
        getData1()
        setCountry([])
        
        }, [city,state])

        const getdataCountry = async  (event)=>{
            var listDates=[]
            var listCases=[]
            // setCountryCases(listCases)
            // setCountryDates(listDates)
        //    const listDate=[]
        //     listCases=[]
            var countryName=event.target.value;
            setCountryName(countryName)
            
            console.log(countryName,"countryName")
            const url2=`https://disease.sh/v3/covid-19/historical/${countryName}?lastdays=30`;
            console.log(url2)
            
            await fetch(url2)
            .then(response=>response.json())
            .then(data=>{
                
                // console.log(data.timeline.cases,"cases")
                for(let date in data.timeline.cases){
                        listCases.push(data.timeline.cases[date])
                      listDates.push(date)
                        
                     
                }
                console.log(listDates,"dateee")
                event.target.value=""
               
    
               
                
    
            })
    
            .catch(e=>alert("Data not found for this country"))
            setCountryCases(listCases)
            setCountryDates(listDates)
    
    
            // console.log(listCases,"listcasesss")
            // console.log(listCases,"listcases") 
        }
    
        function CountryCasesDate(){
            // console.log(listCases,"listcasesimpt")
            console.log(countryCases,"countryCases")
    
            if(countryCases.length!==0){
                return (
                    <div> 
                    <h2>{countryName}</h2>
                    {console.log(country,"countryyyy")}
                    <Linegraph 
                    case1={countryCases[25]}
                    case2={countryCases[26]}
                    case3={countryCases [27]}
                    case4={countryCases[28]}
                    case5={countryCases[29]}
                    case1Country={countryDates[25]}
                    case2Country={countryDates[26]}
                    case3Country={countryDates[27]}
                    case4Country={countryDates[28]}
                    case5Country={countryDates[29]}
                    /></div>
                   
                
                    
                
                    
                )
            }       
    
        }
    return (
        <div>
         <p className="Counties__title"> Graph of Country Covid Data - Last 5 Days</p>
        <p className="Counties__subtitle">Pick your country to get the latest visualize trend on Covid 19 cases</p>
        <FormControl>
        <InputLabel className="selectLabel">Countries</InputLabel>
        <Select className="selectLabel button" onChange={getdataCountry}   variant="standard" > 
        {country.map(data=>(
        
            <MenuItem value={data.country1}>{data.country1}</MenuItem>
         ))}
       
             {/* {console.log(county.county_data)} */}
        </Select>          
        
        </FormControl>

        {CountryCasesDate()}
        
            
        </div>
    )
}

export default CountryGraphData
