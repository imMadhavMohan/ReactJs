import React, { useState, useRef, useEffect } from 'react'

export function useCntOne(count) {
    const [cnt, setCnt] = useState(count)
    const timer = useRef()

    const start = () =>{
        timer.current = setInterval(()=>{
            setCnt(prev=> prev+1)
        },1000)
      }
    
    useEffect(()=>{     // mimic componentWillUnmount
        return ()=> clearInterval(timer.current)
    },[])
      
    const stop = () => {
        clearInterval(timer.current) 
        timer.current = 0       
    }

    const reSet = () => {
        setCnt(0)
        clearInterval(timer.current) 
        timer.current = 0
    }

    return [cnt, start, reSet, stop]
}

