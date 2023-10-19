import React, { useState } from "react";

function Forms() {
    const [name, setName] = useState("jone")
    const [pass, setPass] = useState("jone")

    function hendleChange(e) {
        console.log(e.target.value)
        const CapsVal = (e.target.value).toUpperCase()
        setName(CapsVal)


    }

    function hendlePass(e) {
        setPass(e.target.value)
        console.log(e.target.value)
    }
    return (
        <>
            <h1>Usinng Forms</h1>

            <input type="text" placeholder="Enter Text" value={name} onChange={hendleChange} />
            <input type="text" placeholder="Enter Text" value={pass} onChange={hendlePass} />
        </>

    )
}

export default Forms;