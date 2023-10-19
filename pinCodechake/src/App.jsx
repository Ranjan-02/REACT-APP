
import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [pincode, setPincode] = useState(Number)
  const [output, setOutput] = useState("")
  const [data, setData] = useState([])

  useEffect((pincode) => {

    fetch(`https://api.postalpincode.in/pincode/${pincode}`).then((result) => {
      result.json().then((resp) => {
        setData(resp.PostOffice)

      })
    })
  }, [])

  console.log(data);

  function hendleSubmit() {
    setOutput(pincode)
  }

  return (
    <>
      <h1>Enter pin Code</h1>
      <input type="number" value={pincode} id='3' onChange={(e) => setPincode(e.target.value)} />
      <button onClick={hendleSubmit}>Submit</button>

      <h3>Pincode is : {output}</h3>

      <div>
        {
          data.map((item) => (
            <>
              <h5>Post Office Name :{item.name}</h5>
              {/* <h5>State : West-Bengal</h5>
              <h5>Distric : Purulia</h5>
              <h5>Block : Raghunathpur</h5> */}
            </>

          ))
        }
      </div>
    </>
  )
}






export default App
