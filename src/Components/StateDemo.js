import React, { useState } from "react";

const StateDemo = () => {

    const [name, setName] = useState("Rahul");
    const [user, setUser] = useState({ Name: "Deepak", Age: 23, Profession: "Student" })

    //arrow function
    const updateState = () => {
        setName("Deepak");
    }

    const updateObjState = () => {
        setUser((prevState) => ({
            ...prevState,
            Name: "Chandan",
            Age: 32,
            Profession: "Developer"
        }))
    }


    return (
        <div>
            <h2>Example of Use State</h2>
            <p>My name is: <strong> {name} </strong></p>
            <button onClick={updateState}>Click to update the state variable using seperate arrow function</button>
            <button onClick={() => setName("Vikash")}>Click to update the state variable using arrow function in the same line</button>

            <p>HELLO <b>{user.Name}</b> !!! , You are a <b>{user.Age}</b> years old <b>{user.Profession}</b></p>
            <button onClick={updateObjState}>Click to update the object state variable</button>
        </div>
    )
}

export default StateDemo