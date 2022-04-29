import React, { useContext } from 'react'
import { UserContext } from './UserContext';


const UseContextHook = () => {

  const [users, setUsers] = useContext(UserContext);

  const updateData = () =>{
    setUsers(prevState => {
      return{
        ...prevState,
        name: "Vikash",
        age: 20
      }
    })
  }


  return (
    <div>
      <h2>Example of Use Context</h2>
      <p>{users.name} || {users.age} || {users.dept} || {users.salary} </p>

      <button onClick={ updateData }>Click to update data</button>
    </div>
  )
}

export default UseContextHook


//useContext:-
// This hook is used to use the context API.

// Props drilling : If you have four components, and you need to pass the data from one component to second then to third then to fourth component. But this data will be used only in first and fourth component. So over here second and third component is having or recieving props data which they are not even using, this is known as props drilling.

// Solution of props driling : Context API

// Context API: Lets you store the data at a single place and then in whatsevere component you want to recieve the data you need to make sure that the component is wrapped with the context API.

// Now to use the context api data in the component you need useContext hook.
