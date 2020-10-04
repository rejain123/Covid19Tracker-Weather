import React from 'react'
import "./BottomInfo.css"

function BottomInfo({aqi,windspeed,feelsLikeTemp,uv,windDirection,cloudCoverage,visibility,precipitation}) {
    console.log(visibility,"visibility")
    return (

        <div className="app__bottomInfo">

        <div className="app__col">
        <p > <bold className="app__data">AQI: </bold>{aqi}</p>
        <p > <bold className="app__data">UV Index: </bold>{uv}</p>
        </div>

        <div className="app__col">
        <p  > <bold className="app__data">Wind Speed: </bold>{windspeed} mph</p> 
        <p  > <bold className="app__data">Wind Direction: </bold>{windDirection}</p>        </div>

        <div className="app__col">
        <p  > <bold className="app__data">Feels Like Temp: </bold>{feelsLikeTemp}°</p>
        {/* <p  > <bold className="app__data">Visibility: </bold>{visibility} km</p>        </div> */}
        <p  > <bold className="app__data">Precipitation: </bold>{precipitation} in</p>        </div>

    

        </div>
   






    // <div  className="app__bottom">
    //    <div className="app__bottom__circle">
    //     {/* <h3>AQI: {currData.aqi}</h3> */}

    //     <p className="app__data1"> <bold className="app__data">AQI: </bold>{aqi}</p>
    //     <p  className="app__data1"> <bold className="app__data">Wind Speed: </bold>{windspeed} mph</p>
    //     <p  className="app__data1"> <bold className="app__data">Feels Like Temp: </bold>{feelsLikeTemp}</p>


        
    //     {/* <h3>Wind Speed: {currData.windspeed} mph</h3> */}

    //    </div>
    //    <div className="app__bottom__circle">
    //    <p  className="app__data1"> <bold className="app__data">UV Index: </bold>{uv}</p>
    //    <p className="app__data1" > <bold className="app__data">Wind Direction: </bold>{windDirection}</p>
    //    <p className="app__data1" > <bold className="app__data">Cloud Coverage: </bold>{cloudCoverage}</p>

 
    //    </div>  

    //     </div>
    )
}

export default BottomInfo
