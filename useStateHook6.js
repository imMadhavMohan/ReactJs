import React , {useState} from 'react'

function useStateHook6() {
    // array of object
  const [items, setItems] = useState([])
  const addItems = () =>{
    setItems([...items, {   // spreading the current items array of Obj & inserting a new obj 
        id: items.length,
        value: Math.floor(Math.random()*10)+1
    }])
  }

  return (
    <div>        
        <button onClick={addItems}>Add a number</button>
        <ul>
            {items.map(item =>(
                <li key={item.id}>{item.value}</li>
            ))}
        </ul>
    </div>
  )
}

export default useStateHook6