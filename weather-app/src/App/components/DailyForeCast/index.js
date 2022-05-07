import React from 'react'

const DailyForecast = ({day ,temp ,low, descrip, picture}) => {
    return (
        <div>
            <ul>
<li>{day}</li>
<li>{temp}</li>
<li>{low}</li>

            </ul>
            <div>
<p>{descrip}</p>
<img src={`http://openweathermap.org/img/wn/${picture}@2x.png`} alt="icon"/>
            </div>
        </div>
    )
}

export default DailyForecast