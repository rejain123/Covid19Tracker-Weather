import React, { useRef } from 'react'
import Select from '@material-ui/core/Select';
import { useEffect } from 'react';
import { useState } from 'react';
import { MenuItem } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import {Line} from 'react-chartjs-2';
import numeral from "numeral";
import "./CountiesData.css"
import Linegraph from './Linegraph';


const options={
    legend:{
        display:false
    },
    elements:{
        point:{
            radius:0,
        },
    },
    maintainAspectRatio:true,
    tooltips:{
        mode:"index",
        intersect:false,
        callbacks:{
            label:function(tooltipItem,data){
                return numeral(tooltipItem.value).format("+0,0");
            },
        },
    },
    scales:{
        xAxes:[
            {
                type:"time",
                time:{
                    format:"MM/DD/YY",
                    tooltipFormat:"ll",
                },
            },
            
                ],
                yAxes:[
                    {
                        gridlines:{
                            display:false,
                        },
                        ticks:{
                            callback:function(value,index,values){
                                return numeral(value).format("0a");
                            },
                        },
                    },
                ],
    }
}



// import {states} from "./InfoBox"
// import {getStateName} from "./InfoBox"



function CountiesData({state,city}) {
    const [county,setCounty]=useState([])
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
        state!=null? stateName=getStateName(states,state).toLowerCase(): stateName=null
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

   const getData=async (event)=>{
        const countyName=event.target.value
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
if(list1.length!==0){
    return (
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
    )
}
else{
    return (
        <h1>No counties Data available </h1>
    )
}



        
    }
    


    return (
        <div>
        <FormControl>
        <Select onChange={getData} variant="outlined" value={state}> 
        {county.map(data=>(
            
            <MenuItem value={data.county_value}>{data.county_value}</MenuItem>
         ))}
             {/* {console.log(county.county_data)} */}
        </Select>          
        
        </FormControl>
        {sameCounties()}
        {/* {console.log(sameCounties())} */}
        {/* <Linegraph 
        case1={list1[0]}
        case2={list1[1]}
        case3={list1 [2]}
        case4={list1[3]}
        case5={list1[4]}
        case1Country={list2[0]}
        case2Country={list2[1]}
        case3Country={list2[2]}
        case4Country={list2[3]}
        case5Country={list2[4]}
        /> */}

        {/* {specificData.map((each_state)=>{
            if (each_state===state){
                <div className="data">
            <p>{each_state.cases} </p>
            <p> {each_state.state}</p>
            <p>{each_state.date} </p>
           
            </div>
            }
               


        })} */}

            
        </div>
    )
}

export default CountiesData
