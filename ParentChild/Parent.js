import React,{useState} from 'react'
import {Child} from '../ParentChild/Child' 

// react recursively called all its child components as parent is re-renders

export const Parent = () => {
  const [cnt, setCnt] = useState(0)
  const [cnt1, setCnt1] = useState(5)
  console.log('Parent Component')
  return (
    <div>
      <button onClick={()=>setCnt(prev=>prev+1)}>Clicked: {cnt} </button>            
      <Child />
      <button onClick={()=>setCnt1(prev=>prev)}>Clicked: {cnt1} </button>   
         {/*we know if the new state = old state so react bails out that component from re-rendering.*/}       
    </div>
  )
}


