import React, { useState, useEffect } from 'react'
import "./Table.css"
import Linegraph from './Linegraph'
import numeral from "numeral";
import CountiesData from "./CountiesData"
export default function Table() {
    const [caseData,SetCaseData]=useState([])
    const[lineData,SetLineData]=useState([])
    const[temp,SetTemp]=useState([])
    const[tempCountry,SetTempCountry]=useState([])

     const sort1=(data)=>{
         console.log(data)
        const sorted=[...data]
        console.log(data)

        console.log(sorted)
        sorted.sort((a,b)=>a.cases>b.cases?-1:1)
        return sorted
    }

    useEffect(() => {
       const getCountryCases=async()=>{
           await fetch("https://disease.sh/v3/covid-19/countries")
           .then(response=>response.json())
           .then(data=>{
               
               const caseData= data.map(eachCountry=>(
                {
                    cases:eachCountry.cases,

                    country:eachCountry.country,
                    deaths:eachCountry.deaths
                }
                
               ))
             
                   
               

                const sorted= sort1(caseData)
                SetCaseData(sorted)
            
          

               
           })
       }
       getCountryCases()
    }, [])

    function getLineData(){
        {caseData.map(data=>(
        
            temp.push((data.cases)) &&
            tempCountry.push(data.country)
        ))}
        return temp,tempCountry

    }


    return (
        <div>
        
 <div className="table">
        <tr className="table__label">Ranking of Worldwide Cases</tr>
        <hr className="horizontalLine2"/>
        {caseData.map(data=>(
            <div >
       
        <tr className="table__row">
            <td className="table__country">{data.country} </td>
            <td className="table__number">{(numeral(data.cases).format("0,0"))} </td>
     </tr>
        
            
        </div>
       
        ))
    }

   
        </div>


        {/* {getLineData()}
        <Linegraph 
        case1={temp[0]}
        case2={temp[1]}
        case3={temp[2]}
        case4={temp[3]}
        case5={temp[4]}
        case1Country={tempCountry[0]}
        case2Country={tempCountry[1]}
        case3Country={tempCountry[2]}
        case4Country={tempCountry[3]}
        case5Country={tempCountry[4]}



    /> */}

        </div>
       



    )
}
