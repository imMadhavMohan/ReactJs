import React,{useEffect, useState} from 'react'

function useEffectHook() {
  const [info, setData] = useState({name:'Mady', age:22})
  
  useEffect(() =>{
    console.log(`${info.name} and ${info.age}`)
    setData({name:'Madhav_Mohan', age:23})
  }, [])
  return (
    <div>
        <h1>My name is: {info.name}</h1>
        <h1>My name is: {info.age}</h1>
    </div>
  )
}

export default useEffectHook