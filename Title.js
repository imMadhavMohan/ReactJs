import React from 'react'

function Title() {
  console.log(`rendering Title`)
  return (        
    <div>
       <p>UseMemo Hook</p> 
    </div>
  )
}

export default React.memo(Title)