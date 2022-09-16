import React from 'react'

function Memo({props}) {
  console.log('React Memo')
  return (
    <div>
        Memo
        <h1>{props}</h1>
    </div>

  )
}

export default React.memo(Memo)