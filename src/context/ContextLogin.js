import React, { useState } from 'react'

export const ContextLogin = React.createContext({
    
    isLoggedIn:false,
    setLoggedIn : (state) =>{},
})

export const LoginContextprovider = (props) => {

    let [isLoggedIn, setLoggedIn] = useState(JSON.parse(localStorage.getItem("logged_in")));


  return (
    <ContextLogin.Provider
    value={{
        isLoggedIn:isLoggedIn,
        setLoggedIn:setLoggedIn
    }}
    >
        {props.children}
    </ContextLogin.Provider>
  )
}
