import { createContext, useState } from "react";



export let Cartcontext = createContext()

export function Ccp(props){
    let [userdata,setuserdata] = useState('');
    let [counter,setcounter] = useState(0);
    return <Cartcontext.Provider value={{userdata , counter}}>
        {props.children}
    </Cartcontext.Provider>
}