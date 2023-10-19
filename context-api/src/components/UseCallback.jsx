import React, { useState } from 'react'
import ChildA from './ChildA'

function UseCallback() {
    const [count, setCount] = useState(0)
    function learning() {
        // 
    }
    return (
        <>
            <ChildA myFunction={learning} />
            <h3>{count}</h3>
            <button onClick={(() => setCount(count + 1))}>incrise</button>
        </>

    )
}

export default UseCallback