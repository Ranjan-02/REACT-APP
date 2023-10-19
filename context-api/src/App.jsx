import React, { createContext } from "react"
import ChildC from "./components/ChildC";
import Forms from "./components/Forms";
import UseState from "./components/UseState";
import UseCallback from "./components/UseCallback";
import ChildA from "./components/ChildA";


const data1 = createContext()
const data2 = createContext()
const data3 = createContext()
function App() {



  let myname = "Ranjan Maji"
  let age = 25;
  let gender = "Male"
  return (
    <>
      {/* <data1.Provider value={age}>
        <data2.Provider value={myname}>
          <data3.Provider value={gender}>
            <ChildC></ChildC>

          </data3.Provider>

        </data2.Provider>

      </data1.Provider>

    </> */}
      {/* <Forms /> */}
      {/* <UseState /> */}
      <UseCallback />


    </>

  )

}

export default App;

export { data1, data2, data3 }