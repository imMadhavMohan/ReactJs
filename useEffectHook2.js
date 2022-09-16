import React, {useState, useEffect} from 'react'
// mimick componentDidUpdate
function useEffectHook2() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const onMouseMove = e => {
    console.log('ueEffect is called')
    setX(e.clientX) // clientX or Y will give the coordinate of pointer
    setY(e.clientY)
  }
  useEffect(()=>{
    console.log('MouseMove event')
    window.addEventListener('mousemove',onMouseMove)
  }, [x,y])     // rerender only x or y changes

  return (
    <div>
        x pos-{x} & y pos-{y}
    </div>
  )
}

export default useEffectHook2