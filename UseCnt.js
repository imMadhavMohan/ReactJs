import React,{useEffect} from 'react'

export function UseCnt(count) {
    useEffect(()=>{
        document.title = `Cnt is ${count}` 
    },[count])
}

