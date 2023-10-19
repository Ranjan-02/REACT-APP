import React, { useState, useEffect } from 'react'

function UseState() {

    const [count, setCount] = useState(10)
    const [data, setData] = useState("ramesh")
    useEffect(() => {
        console.log('create side Effect');
    }, [data, count])

    function hendleClick() {
        setCount(count + 1)
    }
    function updateData() {
        setData("sonamoni")
    }
    return (
        <>
            <h1>Use Effect Hook</h1>

            <h3>Number Count:{count}</h3>
            <button onClick={hendleClick}>Click me</button>
            <h3>update data :{data}</h3>
            <button onClick={updateData}>Click me</button>
        </>
    )
}

export default UseState