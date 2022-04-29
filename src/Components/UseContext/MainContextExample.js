import React from 'react'
import UseContextHook from './UseContextHook'
import UserContextProvider from './UserContext'

const MainContextExample = () => {
  return (
    <div>
    <UserContextProvider>
        <UseContextHook />
    </UserContextProvider>
    
    </div>
  )
}

export default MainContextExample