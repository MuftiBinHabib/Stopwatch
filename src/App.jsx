import React, { useState } from 'react'

const App = () => {
  let [count , setNumber] = useState(0)



  function handleIncrement() {
    const interval = setInterval(() => {
      setNumber(count => count + 1)
    }, 1000)
  }
  


  return (
  <>
  <h1 className='text-center bg-blue-500 text-white text-2xl pb-2'>Timer</h1>
    <h2 className='text-center'>{count}</h2>
    <button className=' relative left-1/2 -translate-x-1/2 mt-5 outline ps-5 pe-5 pt-2 pb-2' onClick={handleIncrement}>Start</button>
    
    </>
  )
}

export default App