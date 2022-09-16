import React,{useState} from 'react'

function useStateHook3() {
    const initialCnt = 0

    const [cnt, setCnt] = useState(0)

    const increaseCnt = ()=>{
        setCnt(cnt+1)
    }
    const decreaseCnt = ()=>{
        if(cnt==0) 
            setCnt(initialCnt)
        else
            setCnt(cnt-1)
    }
    const resetCnt = ()=>{    
        setCnt(initialCnt)
    }
    const IncreaseY5 = ()=>{
        for(let i=0; i<5; i++)      // setCnt(cnt+1) wont increase the value in Ui,
            setCnt(prev => prev+1)   // so we'll use prev state val                                                       
    }

    return (
    <div>
        <h1>Count-{cnt}</h1>
        <button onClick={increaseCnt}>Increase</button>        
        <button onClick={decreaseCnt}>Decrease</button>        
        <button onClick={resetCnt}>Reset</button>
        <button onClick={IncreaseY5}>IncreaseY5</button>
    </div>
  )
}

export default useStateHook3