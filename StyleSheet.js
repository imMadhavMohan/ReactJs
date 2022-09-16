import React from 'react'
import '../Components/Style.css'

function StyleSheet(props) {
    let className = props ? 'secondry': ''
    return (
        <div className={`${className} font-xl`}>
             <h1 >
                StyleSheet- Madhav Mohan React Developer
            </h1>
        </div>
  )
}

export default StyleSheet