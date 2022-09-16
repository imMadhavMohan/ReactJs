import React,{useState} from 'react' 

export const ParentOne = (props) => {  // NOT CAUSING PROPS(CHILD) TO RENDER AGAIN AND AGAIN
  const [cnt, setCnt] = useState(0)  
  console.log('ParentOne Component')
  return (
    <div>
      <button onClick={()=>setCnt(prev=>prev+1)}>Clicked: {cnt} </button>                        
      {props.children}      
    </div>
  )
}


// CAUSING PROPS(CHILD) TO RENDER AGAIN AND AGAIN

// export const ParentOne = ({Child}) => {  // already extracted (Destructured)
//   const [cnt, setCnt] = useState(0)  
//   console.log('ParentOne Component')
//   return (
//     <div>
//       <button onClick={()=>setCnt(prev=>prev+1)}>Clicked: {cnt} </button>                              
//       <Child />
//     </div>
//   )
// }

