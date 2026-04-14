import React, { useState } from "react";

const DataFlow = (props)=>{
    let obj = {username: 'orhan',phoneNo : 12432,age:32,passion : 'fjja'}

    const [Obj , setObj] = useState(obj)

    console.log(Obj)

    function Increament (){
        setObj((prevData)=>({
            ...prevData,
            username: 'Khushi',
            age : 19
        }));
    }
    return (
        <>
    <h1 className="text-3xl text-center">{Obj.username}</h1>
    <button onClick={Increament} className="p-4 bg-amber-400 rounded-2xl">Increment</button>
        </>
    )
}
export default DataFlow;