import React from 'react';
import {Bar} from 'react-chartjs-2';
import "./Linegraph.css"
import numeral from "numeral"
function Linegraph({case1,case2,case3,case4,case5,case1Country,case2Country,case3Country,case4Country,case5Country}) {
 
  

const highestCases=[]
const state = {
  labels: [case1Country,case2Country,case3Country,case4Country,case5Country],
  datasets: [
    {
      label: '# of Cases',
    //   backgroundColor: 'rgba(75,192,192,1)',
      backgroundColor:"rgb(169,169,169)",
    //   borderColor: 'rgba(0,0,0,1)',
      borderColor:"rgb(0,100,180)" ,

      borderWidth: 2,
     
      minBarLength:5,

      data: [case1,case2,case3,case4,case5]
    }
  ]
}


    return (
      <div className="lineGraph">
        <Bar
          data={state}
         
          
          options={{
            title:{
              display:true,
              text:'# of Coronavirus Cases in the last 5 days',
              fontSize:5,
              scales: {
                            yAxes: [{
                            
                                ticks: {
                                    min: 50,
                                    // stepSize:200
                                }
                            }]
                        }
              
              
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }

export default Linegraph;