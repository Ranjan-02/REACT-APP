import React, { createContext } from "react"
import ChildA from "./components/ChildA";


const data = createContext()
const data1 = createContext()
const data2 = createContext()

function App() {

  let myname = "Ranjan Maji"
  let age = 25;
  let gender = "Male"
  return (
    <>
      <data.Provider value={myname}>
        <data1.Provider value={age}>
          <data2.Provider value={gender}>

            <ChildA />
          </data2.Provider>

        </data1.Provider>

      </data.Provider>


    </>

  )

}

export default App;

export { data, data1, data2 }