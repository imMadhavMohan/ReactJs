import React,{useRef, useState, useEffect}  from 'react'

function UseRef() {
  const [cnt, setCnt] = useState(0)
  const ref = useRef()
  useEffect(()=>{
        ref.current = setInterval(()=>setCnt(cnt+1),1000)
        return () =>  clearInterval(ref.current)            
        }  , [cnt])
  return (
    <div>
        <h1>Current Count is: {cnt}</h1>
        {/* <button onClick={()=>clearInterval(interval)}>Pause</button> will scope error so here useref will help */}  
        <button onClick={()=>clearInterval(ref.current)}>Pause</button>
    </div>

  )
}

export default UseRef