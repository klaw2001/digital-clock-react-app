import React, { useState } from 'react'

const Clock = () => {
    var time = new Date().toLocaleTimeString({hour12:true});


        const [currentTime , setTime] = useState(time)
        const onChangeTime = () =>{
            time = new Date().toLocaleTimeString();
            setTime(time)
        }
        setInterval(onChangeTime,1000)

  return (
    <>
        <h1>{currentTime}</h1>
    </>
  )
}

export default Clock