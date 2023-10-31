import React, { useState } from 'react'

function TodoList() {
    const [count, setCount] = useState(10)

    setInterval(() => {
        // setCount(count + 1)
    }, 2000);
    return (
        <>

            <h1>todo list:{count}</h1>
            <p>Lorem ipsum dolor sit amet {count} consectetur adipisicing elit. Adipisci provident in laborum eius expedita ab cumque tempora quia at temporibus.</p>
        </>
    )
}

export default TodoList
