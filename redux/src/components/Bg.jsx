import { useReducer } from 'react'
import './App.css'


let intialState = 0
function reducerFunction(state, action) {

    if (action === "green") {
        return "green"
    }

    if (action === "blue") {
        return "blue"
    }
    if (action === "yellow") {
        return "yellow"
    }
    if (action === "cyan") {
        return "cyan"
    }


}
function App() {


    const [state, reducer] = useReducer(reducerFunction, intialState)
    return (
        <>
            <div className='box' style={{ backgroundColor: state }}></div>
            <button style={{ backgroundColor: "green" }} onClick={() => reducer("green")}>green</button>
            <button style={{ backgroundColor: "blue" }} onClick={() => reducer("blue")}>blue</button>
            <button style={{ backgroundColor: "yellow", color: "black" }} onClick={() => reducer("yellow")}>yellow</button>
            <button style={{ backgroundColor: "cyan", color: "black" }} onClick={() => reducer("cyan")}>cyan</button>
        </>
    )
}

export default App
