import React,{useRef,useState,useEffect} from 'react'

function StopWatchUseRef() {
  const [cnt,setCnt] = useState(0)
  const cntref = useRef(0)

  useEffect(()=>{ // mimic componentWillUnmount
    return ()=> clearInterval(cntref.current)
  },[])  

  const start = () =>{
    cntref.current = setInterval(()=>{
        setCnt(prev=> prev+1)
    },1000)
  }

  const stop = () =>{
    clearInterval(cntref.current)   
    cntref.current = 0
  } 

  const reset = () =>{
    setCnt(0);
    cntref.current = 0
  }

  console.log('ClickMe')
  return (
    <div>
       <h4>Hi Count is: {cnt} and ref is: {cntref.current}</h4> 
       <button onClick={start}>Start</button>
       <button onClick={stop}>Stop</button>
       <button onClick={reset}>Reset</button>
    </div>
  )
}

export default StopWatchUseRef