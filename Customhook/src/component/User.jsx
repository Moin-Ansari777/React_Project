import React, { useEffect, useState } from 'react'

const User = () => {

    const [data, setData] = useState(JSON.parse(localStorage.getItem('data')) || [])
    useEffect(() => {
        (async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
           // console.log(await response.json())
            const data = await response.json();
            setData(data)
            localStorage.setItem('data',JSON.stringify(data))
        })()
        console.log(localStorage.getItem('data'))
        return ()=>{
            setData([])
            localStorage.clear()
        }
    }, [])
    return (
        <div>
            {data.map(item =>{
                return (
                    <div key={item.id}>{item.name}</div>
                )
            })}
        </div>
    )
}

export default User
