import React from 'react'

function Hero({heroName}) {
  if(heroName === 'Joker')  
   throw new Error('Something Wrong')
  return (
    <div>    
       <h1>{heroName}</h1> 
    </div>
  )
}

export default Hero