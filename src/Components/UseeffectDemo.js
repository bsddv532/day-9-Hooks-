import React, { useState, useEffect } from 'react'

const UseeffectDemo = () => {

  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [show, hide] = useState(true)

  

  ////ComponentDidMount & ComponentDidUpdate

  // useEffect(()=>{
  //   console.log("This is same as ComponentDidMount & ComponentDidUpdate");
  // })




  //// ComponentDidMount

  // useEffect(()=>{
  //   console.log("This is same as ComponentDidMount");
  // }, [])



  //// In this case useEffect will work like componentDidMount and will work like componentDidUpdate for count1 state variable only.

  // useEffect(()=>{
  //   console.log("This is same as ComponentDidMount & ComponentDidUpdate for count1 state variable only");
  // }, [count1])



  ////ComponentWillUnmount 
  ////We call it cleanup function in useEffect

  useEffect(() => {
    return function cleanup() {
      console.log("This is same as ComponenWillUnmount");
    }
  }, [show])


  return (
    <div>
      <h2>Example of Use Effect</h2>

      <p><b>NOTE:- </b>To see the effect of useEffect please open the console first and for the code please open the <b>UseeffectDemo.js</b> File in sources</p>

      <span>Button 1 output: <b> {count1} </b></span>
      <button onClick={() => setCount1(count1 + 1)}>BUTTON 1</button>

      <br />
      <span>Button 2 output : <b> {count2}</b></span>
      <button onClick={() => setCount2(count2 + 1)}>BUTTON 2</button>

      <br />
      {show ? <p>It is a demo paragraph to check the cleanup Function in useEffect</p> : null}
      <button onClick={() => hide(!show)}>Click to check the unmount useEffect Component</button>

    </div>
  )
}

export default UseeffectDemo



// alternative of lifecycle methods
// componentDidMount, componentDidUpdate, componentWillUnmount
// hook which accepts first parameter as a callback function, and second parameter is dependency array.
// if you do not want that useEffect should run like a componentDidUpdate then : pass an empty dependency array.
// clean up function - this function gets executed when the component is unmounted from the screen. This is mostly used for memory leaks.