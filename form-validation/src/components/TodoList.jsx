import React, { useState } from 'react'

function TodoList() {
    const [avtivity, setActivity] = useState("")
    const [tolist, setTodoList] = useState([])

    function addList() {

    }

    return (
        <>
            <h1>Todo List</h1>
            <input type="text" placeholder='yours activity' value={avtivity} onChange={(e) => setActivity(e.target.value)} />
            <button onClick={addList}>Addd</button>
        </>

    )
}

export default TodoList