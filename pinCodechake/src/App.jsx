
import { useState } from 'react';
import './App.css'

function App() {
  const [pincode, setPincode] = useState(1234)
  const [result, setResult] = useState([])


  async function getData(pin) {
    let result = await fetch(`https://api.postalpincode.in/pincode/${pin}`)
    result = await result.json()
    setResult(result)
  }




  function hendleChange(e) {
    setPincode(e.target.value)
  }


  return (
    <>
      <h1>Enter pin Code</h1>
      <input type="number" value={pincode} id='3' onChange={hendleChange} />
      <button onClick={() => getData(pincode)}>Submit</button>

      {/* <h3>Pincode is :{result}</h3> */}
      <h5>Post Office Name : {result[0].PostOffice[0].Name}</h5>
      <h5>State : {result[0].PostOffice[0].State}</h5>
      <h5>Distric : {result[0].PostOffice[0].District}</h5>
      <h5>Block : {result[0].PostOffice[0].Block}</h5>


    </>
  )
}






export default App
