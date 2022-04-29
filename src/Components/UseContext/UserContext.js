import React, { createContext, useState } from 'react'

export const UserContext = createContext();

const UserContextProvider = (props) => {

    const[users, setUSers] = useState({Id: 1, name: "Deepak", age:23, dept:"CSE", salary:20000 })

  return (
    <div>
        <UserContext.Provider value={[users, setUSers]}>
            {props.children}
        </UserContext.Provider>
    </div>
  )
}

export default UserContextProvider

// In this file we are creating a context for users.

// Very first step is that you need to create the context using createContext function.

// we will be creating a functional component which will return Context.Provider. props.children is a component