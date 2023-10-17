import React, { useState } from "react";

function Counter() {

    let [count, setCount] = useState(15)


    function hendelIncriment() {
        console.log('incriment Hendle');

        setCount(count + 1)
    }

    function hendelDecriment() {
        console.log('decriment Hendle');
        setCount(count - 1)
        if (count <= 10) {
            setCount(10)

        }


    }
    return (
        <>
            <h1>Counter : {count}</h1>
            <button onClick={hendelIncriment} >Incriment</button>
            <button onClick={hendelDecriment} disabled={count === 10}>Decriment</button>
        </>

    )
}


export default Counter;