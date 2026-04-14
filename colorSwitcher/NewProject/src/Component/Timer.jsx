import React, { useEffect, useState } from 'react'

const Timer = (props) => {
    const [leftTime, setleftTime] = useState(2);
    const [DisplayTime, setDisplayTime] = useState('');
    useEffect(() => {
        let intervalId = setInterval(() => {
            setleftTime(prevTime => {
                if (prevTime <= 0) {
                    clearInterval(intervalId);
                    return 0;
                }
                return prevTime - 1;
            })
        }, 1000);
        return () => (clearInterval(intervalId))
    }, [])
    useEffect(()=>{
        if(leftTime ===0){props.setIsover(true);}
        let formattedTime = `${Math.floor(leftTime/60).toString().padStart(2,0)} : ${Math.floor(leftTime%60).toString().padStart(2,0)}`
        setDisplayTime(formattedTime);
    },[leftTime])

    return (
        <div>
            Time Left {DisplayTime}
        </div>
    )
}

export default Timer
