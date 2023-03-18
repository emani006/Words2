import React, { createContext , useState , useEffect} from "react"
import wordlist from "../components/wordlist"


export const MyContext = createContext();

export const MyContextProvider = ({children}) => {
    const [context, setContext] = useState(wordlist)
    const values = {context, setContext}

    useEffect(() => {
        
    })

    return (
        <MyContext.Provider value={values}>
            {children}
        </MyContext.Provider>
    );
}