import React,{useEffect,useState} from 'react'

function useEffectHook1() {
  const [cnt,setCnt] = useState(0)
  useEffect(()=>{
    document.title = `Hey Click's - ${cnt}`
  },[cnt]) // Re-render only when cnt is changing & not dependes upon State or Props
  return (
    <div>
        <button onClick={()=>{
            setCnt(cnt+1)
        }}>{cnt}-Clicked</button>
    </div>
  )
}

export default useEffectHook1