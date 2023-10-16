import React, { createContext, useContext } from "react"
export const theamContext = createContext({
    theamMode: "Light",
    darkTheam: () => { },
    lightTheam: () => { }
})

export const TheamProvider = theamContext.Provider;

export default function useTheam() {
    return useContext(theamContext)
}
