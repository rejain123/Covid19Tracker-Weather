import React from 'react'
import "./Weather.css"

import background1 from "./images/rain.jpg" 
import background2 from "./images/snow.jpg" 
import background3 from "./images/foggy.jpg" 
import background4 from "./images/clearCloudy.jpg" 
import background5 from "./images/sunnyDay.jpg"
import background6 from "./images/dark_night.jpg"
import background7 from "./images/cloudyNight.jpg"


// import { Container,Card, CardContent } from '@material-ui/core'
import {Card,Row,Col} from 'react-bootstrap'
//     Card,  CardText, CardBody, 
//   } from 'reactstrap';



function Weather({name, country,state,date,cur_min,cur_max,cur_temp,description,icon_code,info,pod}) {
    console.log(cur_temp,"current temp-weather")
   
    console.log(pod+"pod")

    let backgroundImage;
    
    const weekday ={
        0:"Sunday",
        1:"Monday",
        2:"Tuesday",
        3:"Wednesday",
        4:"Thursday",
        5:"Friday",
        6:"Saturday"
    }
    console.log(date,"date today")
    const weekdayNum= new Date().getDay()
    const weekdayName= weekday[weekdayNum]

    // var divStyle = 
    let divStyle;

         if(icon_code>=200 && icon_code<=233) //thunderstorm
        {
            divStyle={
                backgroundImage: `url(${background1})`
                

            }
        }
        else if (icon_code>=300 && icon_code<=522){ //rain
            divStyle={
                backgroundImage: `url(${background1})`

            }
        }
        else if (icon_code>=600 && icon_code<=623){ //snow
            divStyle={
                backgroundImage: `url(${background2})`

            }
        }
        else if (icon_code>=700 && icon_code<=751){ //foggy
            divStyle={
                backgroundImage: `url(${background3})`

            }
        }
       
        
        else if (pod==="d" && icon_code==800   ){
            //sunny
            divStyle={
                backgroundImage: `url(${background5})`


            }


        }

        else if (pod==="n" && icon_code==800 ){ //sunny
            divStyle={
                backgroundImage: `url(${background6})`

            }
        }

        
        
        else if (pod==="d"&&icon_code>=801 && icon_code<=804){ //cloudy
            console.log(icon_code)
            divStyle={
                backgroundImage: `url(${background4})`
            

            }
    
        }
         
        else if (pod==="n" && icon_code>=801 && icon_code<=804){ //cloudy
            console.log(icon_code)
            divStyle={
                backgroundImage: `url(${background7})`

            }
    
        }
        
     
   
  
 
    
    return (
       
    
    


        <div className="weather" style={divStyle}>

        <link
    href="https://fonts.googleapis.com/css2?family=Hind+Madurai&display=swap" rel="stylesheet"
    >
    </link>


        <div className="weather__top">
            <p className="name font_fam">{name}</p>
            <p className="description font_fam">{description}</p>
            <p className="cur__temp font_fam">{cur_temp}°</p>
        
        </div>
        
            
        <div className="headLine">
       
           <div className="labels">
            <h6 className="high">high</h6>
            <h6 className="low">low</h6> 

           </div>
            <div className="temp">
            <h2 className="max">{cur_max}°</h2>

                <h2 className="min">{cur_min}°</h2> 
            </div>
            <h2 className="date">{weekdayName} </h2>

           
        
        </div>
        {/* <hr />   */}
     
        </div>
        
    )
        }

export default Weather
