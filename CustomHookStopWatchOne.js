import React,{useEffect, useState} from 'react'
import {useCntOne} from './useCntOne'

function CustomHookOne() {  
  const [count,start, reSet, stop] = useCntOne(0) // array destructuring
  useCntOne(0) // Just to run useEffect here we call it like this
  return (
    <div>
        <h4>Count is : {count}</h4>
        <button onClick={start}>Start</button>
        <button onClick={reSet}>Reset</button>
        <button onClick={stop}>Stop</button>
    </div>
  )
}

export default CustomHookOne