import { createContext } from "react"
import wordlist from "../components/wordlist"
import App from '../App'


export const TableContext = createContext({});

export default function TableProvider () {


return (
    <>
        <TableContext.Provider value={wordlist}>
            <App/>
        </TableContext.Provider>
    </>
)
}