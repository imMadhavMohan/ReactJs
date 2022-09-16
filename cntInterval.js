import React,{useState, useEffect} from 'react'

function CntInterval() {
  const [cnt, setCnt] = useState(0)

  const tick = ()=>{
    // setCnt(cnt + 1) here we can't leave arr [] empth in useEffect
    // Prevstate will also work fine, here we can leave arr [] empth in useEffect
    setCnt((prev)=>prev+1)
  }

  useEffect(()=>{
    const interval = setInterval(tick, 1000)
    return ()=> clearInterval(interval)
  }, []) // dont keep array empty else the useEffect will run once will not update the val with time

  return (
    <div>{cnt}</div>
  )
}

export default CntInterval