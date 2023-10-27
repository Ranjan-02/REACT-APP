
import { useState } from 'react';
import './App.css'

function App() {
  const [pincode, setPincode] = useState(1234)
  const [result, setResult] = useState([])


  async function hendleSubmit() {
    let result = await fetch(`https://api.postalpincode.in/pincode/${pincode}`)
    result = await result.json()
    setResult(result[0].PostOffice[0])

  }



  return (
    <>
      <h1>Enter pin Code</h1>
      <input type="number" value={pincode} id='3' onChange={(e) => setPincode(e.target.value)} />
      <button onClick={hendleSubmit}>Submit</button>

      <h3>Pincode is :{Name}</h3>
      <h5>Post Office Name : 723133</h5>
      <h5>State : West-Bengal</h5>
      <h5>Distric : Purulia</h5>
      <h5>Block : Raghunathpur</h5>


    </>
  )
}






export default App
