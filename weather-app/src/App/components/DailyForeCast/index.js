import React from 'react'
import style from "./DailyForeCast.module.css"
import FadeIn from "react-fade-in/lib/FadeIn"
const DailyForecast = ({day ,temp ,low, descrip, picture}) => {
    return (
 <div className={style.wrapper}>
<ul className={style.ul}>
<FadeIn delay={300}>
<li>{day}</li>
</FadeIn>
<FadeIn delay={500}>
<li>{`High: ${Math.floor(temp)}°`}</li>
</FadeIn>
<FadeIn delay={650}>
<li>{`Low: ${Math.floor(low)}°`}</li>
</FadeIn>
 </ul>
<div>
<p>{descrip}</p>
<FadeIn delay={1650} transitionDuration={1500}>
<img className={style.icon} src={`http://openweathermap.org/img/wn/${picture}@2x.png`} alt="icon"/>
</FadeIn>
</div>
</div>
    )
}

export default DailyForecast