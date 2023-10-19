import React, { useContext } from 'react'
import { data1, data2, data3 } from "../App"


function ChildC() {
    const myName = useContext(data2)
    const age = useContext(data1)
    const gender = useContext(data3)

    return (
        <h3>my name :{myName} my age:{age} my gender:{gender}</h3>
    )
}

export default ChildC