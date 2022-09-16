import React from 'react'

function Count({count, children}) {
  console.log(`rendering Age: ${count}`)
  return (
    <div>       
       <h3>{children} - {count}</h3> 
    </div>
  )
}

export default React.memo(Count)