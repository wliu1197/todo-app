//to create a context share between all it's child components
import { createContext, useContext, useState } from "react";

const ShareContext = createContext();

//export const useSahreContext = () => useContext(ShareContext);
export const useSahreContext = () => useContext(ShareContext);
/*
export function useSahreContext(){
    return useContext(ShareContext);
}
*/

export default function ShareContextProvider({children}){
    const [shareObj,setShareObj] = useState({loginUser: '', basicAuthUser:'wen', basicAuthPwd:'comein22'})

    function setLoginUser(username){
        setShareObj({...shareObj,loginUser: username})
    }

    function setLogout(){
        setShareObj({...shareObj,loginUser: ''})
    }

    function isAuthenticated(){
        return shareObj.loginUser !== '';
    }

    return (
        <ShareContext.Provider value={ {shareObj , setLoginUser, setLogout, isAuthenticated} }>
            {children}
        </ShareContext.Provider>
    )
}