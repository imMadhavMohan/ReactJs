import React from 'react'
import ReactDOM from "react-dom";

function Childcompo(props){  
    return (
      <div>            
          <button onClick={() => props.greetHandler('Mumma','Papa')}>Greet Parent</button>      
      </div>
    )  
}

export default Childcompo