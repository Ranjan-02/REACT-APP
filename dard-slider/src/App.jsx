import React from "react"

import './App.css'
import { TheamProvider } from "./contexts/Them"
function App() {


  return (
    <>
      <TheamProvider value={{ theamMode, darkTheam, lightTheam }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              {/* theam button */}
            </div>

            <div className="w-full max-w-sm mx-auto">
              {/* Card */}
            </div>
          </div>
        </div>
      </TheamProvider>


    </>
  )
}

export default App
