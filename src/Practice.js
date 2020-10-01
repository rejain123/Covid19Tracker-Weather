import React from 'react'
import { sizing,Card,CardContent} from '@material-ui/core';


function Practice(testing,sample) {
    console.log(testing)
   console.log(sample)
//    testing.map(data=>(
//        console.log(data)
//    ))
    return (
        <div>
        <Card className="app__hourlyCard">
          <CardContent>
            <h3>{testing}</h3>
            <h3>{sample}</h3>
          </CardContent>
        </Card>
        {/* <Card>
            <CardContent>
                {testing}
                {sample}
            </CardContent>
        </Card> */}
            
        </div>
    )
}

// if ((city!=="") && (state!=="")){
//     url=`https://api.weatherbit.io/v2.0/forecast/daily?city=${city},${state}&key=${apikey}${unit}`;
//     url1=`https://api.weatherbit.io/v2.0/forecast/hourly?city=${city},&key=${apikey}&hours=48${unit}`;
//     url2=`https://api.weatherbit.io/v2.0/current?city=${City},${state}&key=8734036032b349389e0f99405a265d38&units=I`

//  }
//  else if ((city!=="") && (state==="")){
//    url= `https://api.weatherbit.io/v2.0/forecast/daily?city=${city},&key=${apikey}${unit}`;
//    url1=`https://api.weatherbit.io/v2.0/forecast/hourly?city=${city},${state}&key=${apikey}&hours=48${unit}`
//    url2=`https://api.weatherbit.io/v2.0/current?city=${city}&key=8734036032b349389e0f99405a265d38&units=I`
//  }
//  else{
   
//    url=`https://api.weatherbit.io/v2.0/forecast/daily?city=Dublin,CA&key=8734036032b349389e0f99405a265d38${unit}`;
//    url1=`https://api.weatherbit.io/v2.0/forecast/hourly?city=Dublin,CA&key=8734036032b349389e0f99405a265d38&hours=48${unit}`

//  }

export default Practice



