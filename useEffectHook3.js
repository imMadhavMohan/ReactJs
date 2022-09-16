import React, {useState, useEffect} from 'react'
// mimick componentWillUnmount to clean up the dom when unmount any componenet
function useEffectHook3() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const mouseMove = (e)=>{
    console.log('Mouse Move')
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(()=>{
    console.log('UseEffect Run')
    window.addEventListener('mousemove', mouseMove) // add event listener while mounting

    return ()=>{
        console.log('component unmounting code')
        window.removeEventListener('mousemove', mouseMove) // remove event listener while unmounting
      }
  },[x,y])
  
  return (
    <div>              
        x- {x} & y- {y} 
    </div>
  )
}

export default useEffectHook3