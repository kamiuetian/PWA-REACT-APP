import React,{useState, useEffect } from 'react'


const Timer = props => {
    const [time, setTime] = useState(function(){var t_start=new Date();
        t_start.setHours('07');
        t_start.setMinutes('0');
        t_start.setSeconds('0');
        var c_t=new Date();
        var diff=msToTime(c_t-t_start);
    return diff});

useEffect(() => {
  const interval = setInterval(() => setTime(function(){var t_start=new Date();
    t_start.setHours('07');
    t_start.setMinutes('0');
    t_start.setSeconds('0');
    var c_t=new Date();
    var diff=msToTime(c_t-t_start);
return diff}), 1000);
  return () => {
    clearInterval(interval);
  };
}, []);
    function msToTime(duration) {
        
          seconds = Math.floor((duration / 1000) % 60),
          minutes = Math.floor((duration / (1000 * 60)) % 60),
          hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
      
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
      
        return hours + ":" + minutes + ":" + seconds;
      }
      

    return (
        <div id="center">
            <h1>{time}</h1>
        </div>
    )
}

export default Timer