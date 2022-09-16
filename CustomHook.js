import React,{useEffect, useState} from 'react'
import Count from './Count'
import {UseCnt} from './UseCnt'

function CustomHook() {
    const [cnt,setCnt] = useState(0)     
    // useEffect(()=>{ // if we dont pass dependency then useEffect will only run once
    //     console.log('ji')
    //    document.title = `Cnt is ${cnt}` 
    // },[cnt])

    console.log('click me')
    UseCnt(cnt)
    return (
        <div>
            {/* <button type="button" onClick={()=>setCnt(cnt+1)}>Count is {cnt}</button> */}
            <button type="button" onClick={()=>setCnt(cnt+1)}>Count is {cnt}</button>
        </div>
    )
}

export default CustomHook