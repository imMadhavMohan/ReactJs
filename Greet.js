import React from "react";

// function GreetName(name) {
//   return <h1>Hi Madhav</h1>;
// }

// const GreetName = (props)=>{
//     console.log(props.name)
//     return ( 
//         <div>
//             <h1>Hi {props.name} a.k.a {props.heroName}</h1>
//             {props.children}
//         </div>
//     );
// }

// Destructuring: using 1st way

// const GreetName = ({name,heroName}) => {
// //   console.log(props.name);
//   return (
//     <div>
//       <h1>
//         Hi {name} a.k.a {heroName}
//       </h1>
//     </div>
//   );
// };

// Destructuring: 2nd way
const GreetName = (props)=>{
    // console.log(props.name)
    const {name, heroName} = props

    return ( 
        <div>
            <h1>Hi {name} a.k.a {heroName}</h1>
        </div>
    );
}

export default GreetName;
 