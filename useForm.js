import React,{useState} from 'react'

export function useForm(x) {  
  const [value, setName] = useState(x)
  const reset = ()=>{
    setName(x)
  }
  const bind = { // object returns
    value,
    onChange : e=>{
        setName(e.target.value)
    }
  }
  return [value, bind, reset]
}

