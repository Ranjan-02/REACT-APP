import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContuctPage from "./ContuctPege";
import HomePage from "./HomePage";


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<h1>About Component</h1>} />
          <Route path="/contuct" element={<ContuctPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
