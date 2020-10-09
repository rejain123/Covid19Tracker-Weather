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






// import {states} from "./InfoBox"
// import {getStateName} from "./InfoBox"



function CountiesData({state,city}) {
    const [county,setCounty]=useState([])
    const [country,setCountry]=useState([])
    const[countryCases,setCountryCases]=useState([])
    const[countryDates,setCountryDates]=useState([])
    const[countryName,setCountryName]=useState("")
    const[countyName,setCountyName]=useState("")

    

    const [specificData,setSpecificData]=useState([])
console.log(state,"state123")
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
    function getStateNameShort (states,stateNameLong){
        for (var i=0;i<states.length;i++){
            if (states[i][0]===stateNameLong){
                return (states[i][1])
            }
        }
    } 

  
    

    // var state_longName=getStateName(state,states)
    // console.log({state_longName},"this is the state")
    let stateName;
        var urlState=useRef(null)
    useEffect(() => {
        console.log(state,"stateee")
        state!=null? stateName=getStateName(states,state)?.toLowerCase(): stateName=null
        console.log(stateName,'statename')
        if (stateName!=null){
            console.log(stateName)
            const countiesUrl=`https://disease.sh/v3/covid-19/historical/usacounties/${stateName}?lastdays=30`
            console.log(stateName,"this is the state")
                console.log(stateName)

                const getCountiesName=async()=>{
                    console.log(countiesUrl,"urll")

                    await fetch(countiesUrl)
                    .then(response=>response.json())
                    .then(data=>{
                        console.log(data)
                        const county=data.map(eachState=>(
                            {
                                county_value:eachState.county,
                                case1:eachState.cases
            
                            }
                        ))
                        setCounty(county)

 
        
                    })
                }
                getCountiesName()
                

        }
       
 
        function onCountyChange(event){


            const county_name=event.target.value
            
            if(county.county_value===county_name){
                console.log()

            }
            // const getCounty_data=async()=>{
            //     await fetch()
    
            // }
        }

        
     


        
    }, [city,state])
    console.log(county)

    useEffect(() => {
        const getData1=async(event)=>{
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
        
        }, [])
   
   const getData=async (event)=>{
        const countyName=event.target.value
        setCountyName(countyName)

        
        const url=`https://disease.sh/v3/covid-19/nyt/counties/${countyName}?lastdays=30`
        console.log(countyName)
        console.log(url,"URL")
            await fetch(url)

            .then(response=>response.json())
            
            .then(data=>{
                
                const specificData=data.map(each_county=>(
                    {
                        county:each_county.county,
                        state:each_county.state,
                        cases:each_county.cases,
                        date:each_county.date,
                    }
    
                
                ))
                setSpecificData(specificData)

            })
            .catch(e=>alert("Data not found for this county"))

            console.log(event.target,"event.targ")
            event.target.value=""
        

    }
        function testing(){
            specificData.map(county_sample=>{
                if (county_sample.county===county){
                    var cases=specificData.cases
                    console.log(cases)
                    return cases
                }}
            )
}
        
    console.log(specificData)

    function sameCounties(){
        const list1=[];
        const list2=[];
        var stateName1;
        specificData.map((each_state)=>{
                console.log(state,"state")
                each_state.state?  stateName1=getStateNameShort(states,each_state.state):stateName1=null
                console.log(stateName1,"each_state")

            if (stateName1===state){
                console.log("congrats")
                // list1.push(each_state.state)
                
                list1.push(each_state.cases  )
                list2.push(each_state.date  )


                // return(
                //     <h1>hiiii</h1>
                    // <div className="data">
                    // <p>{each_state.cases} </p>
                    // <p> {each_state.state}</p>
                    // <p>{each_state.date} </p>
                   
                    // </div>

                    
           
    }
    
    
})
console.log(list1,"list1")
console.log(list1,"list1 is here")
if(list1.length!==0){
    return (
        <div>
        <h2>{countyName}</h2>
<Linegraph 


case1={list1[25]}
case2={list1[26]}
case3={list1 [27]}
case4={list1[28]}
case5={list1[29]}
case1Country={list2[25]}
case2Country={list2[26]}
case3Country={list2[27]}
case4Country={list2[28]}
case5Country={list2[29]}
/>

        </div>
        
        
    
        
    )
}
// else{
//     return (
//         <h1>No counties Data available </h1>
//     )
// }



        
    }
    // const[listDates,setListDates]=useState([])
    // const[listCases,setListCases]=useState([])
    var listDates=[]
    var listCases=[]
    

    const getdataCountry = async  (event)=>{
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
        console.log(listCases,"listcasesimpt")
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
        <div className="Counties">
        <p className="Counties__title"> Counties/Country Covid Data - Last 5 Days</p>
        <p className="Counties__subtitle">Pick your county or country to get the latest trend on Covid 19 cases</p>
      
            <FormControl>
        <InputLabel>Counties</InputLabel>

        <Select className="selectButton" onChange={getData} variant="standard" value={state}> 

        {county.map(data=>(
            
            <MenuItem value={data.county_value}>{data.county_value}</MenuItem>
         ))}
             {/* {console.log(county.county_data)} */}
        </Select>          
        
        </FormControl>
       
        <FormControl>
        <InputLabel>Countries</InputLabel>
        <Select className="selectButton" onChange={getdataCountry}  variant="standard" > 
        {country.map(data=>(
            
            <MenuItem value={data.country1}>{data.country1}</MenuItem>
         ))}
             {/* {console.log(county.county_data)} */}
        </Select>          
        
        </FormControl>
        {sameCounties()}

        {CountryCasesDate()}
        {/* {getdataCountry()} */}
            
        </div>
    )
}



export default CountiesData
