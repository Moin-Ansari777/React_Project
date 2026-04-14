import React, { useMemo } from 'react'

function UseMemo() {
    const arr = [1, 2, 3, 3, 44, 4]
    function sum() {
        arr.forEach(element => {

        });
        return 2;
    }
const memo = useMemo(()=>{
    const local = sum()
    console.log('ret')
    return local
},[])
    return (
        <div>
<button>Click me</button>
        </div>
    )
}

export default UseMemo
