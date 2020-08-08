import React from 'react'

const Days = () => {

    const day = {
        count: 0
    }

    function changeDay(e) {
        day.count = parseInt(e.target.value)
        console.log(day.count);
    }

    return(
        <div className="card-action">
                        <button className="days" onClick={(e) => changeDay(e)} value="8">Thursday</button>
                        <button className="days" onClick={(e) => changeDay(e)} value="16">Friday</button>
                        <button className="days" onClick={(e) => changeDay(e)} value="24">Saturday</button>
                        <button className="days" onClick={(e) => changeDay(e)} value="32">Sunday</button>
                        <button className="days" onClick={(e) => changeDay(e)} value="40">Monday</button>
        </div>
   
    )

}

export default Days.day