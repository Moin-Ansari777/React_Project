import React, { useState } from 'react'
import QuestionData from './Question.json'

const Question = (props) => {
    const [currentIndex, setcurrentIndex] = useState(0)
    const [Score,setScore] = useState(0);
    let handleClickOption = (option) => {
        if(option === QuestionData[currentIndex].answer)
        {
            setScore(prevScore=>prevScore+1)
        }
        if(currentIndex < QuestionData.length)
        {
            setcurrentIndex(prevIndex => prevIndex+1)
        }
        else{
            props.setIsover(true)
        }
    }
    return (
        <div>
            <h1>{QuestionData[currentIndex].question}</h1>
            <div className='flex flex-col gap-4 mt-2'>
                {QuestionData[currentIndex].options.map((item, index) => (
                    <button key={index} onClick={()=>handleClickOption(item)}>{item}</button>
                ))}
            </div>
        </div>
    )
}

export default Question
