import { createContext } from "vm";



let context=createContext()


let contextProvider=({children})=>{
    return(
        <context.provider value={{}}>
            {
                children
            }
        </context.provider>
    )
}