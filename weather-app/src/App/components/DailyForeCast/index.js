import React from 'react'
import style from "./DailyForeCast.module.css"
const DailyForecast = ({day ,temp ,low, descrip, picture}) => {
    return (
 <div className={style.wrapper}>
<ul className={style.ul}>
<li>{day}</li>
<li>{`High: ${Math.floor(temp)}°`}</li>
<li>{`Low: ${Math.floor(low)}°`}</li>

 </ul>
<div>
<p>{descrip}</p>
<img className={style.icon} src={`http://openweathermap.org/img/wn/${picture}@2x.png`} alt="icon"/>
</div>
</div>
    )
}

export default DailyForecast