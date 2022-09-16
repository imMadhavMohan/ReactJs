import React from 'react'

const heading = {
    color: 'purple',
    fontSize: '40px',
    backgroundColor: 'gray'
}

function Inline() {
  return (
    <div>
        {/* Globally defined the css in src for success */}
        <h1 className='success'>Success</h1>  

        <h1 style={heading}>
            Inline Css
        </h1>
    </div>
  )
}

export default Inline