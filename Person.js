import React from 'react'

function Person({props}) {
  return (
    <div>My name is: {props.name} and age is: {props.age}</div>
  )
}

export default Person                               