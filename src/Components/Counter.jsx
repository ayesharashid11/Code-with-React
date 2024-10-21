import { useState } from 'react'

function Counter() {

  const [counter, setCounter]  = useState(15)

  const addValue = () => {
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1 )
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    console.log(counter);
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter + 1);
    // console.log(counter);
  }
  
  return (
    <>
     
      <h2>Counter value: {counter}</h2>

      <button
      onClick={()=>addValue()}
      >Add </button> 
      <br />
      <button
      onClick={()=>setCounter(counter - 1)}
      >SuB</button>
     
    </>
  )
}

export default Counter