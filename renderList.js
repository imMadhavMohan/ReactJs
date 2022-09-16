import React from 'react'
import Person from '../Components/Person'
// import Stylecss from '../Components/Style.css'

function namelist() {
    const data = ['Mohan', 'Sam','Maddy','Mukund']
    const person = [{
                name: 'Maddy', age: 24, id:1
                },{
                name: 'Mohan', age: 26, id:2
                },{
                    name: 'Rocky', age: 28, id:3
                },
                {
                    name: 'Sam', age: 26, id:4
            }]
    const val = data.map(v => <h3 className=''>{v}</h3>)
    // Key arent props so not accessible in childComp Person.js, keys are-
    //  used to just do proper updation in the lists and help react to trace modification in dom
    const info = person.map(p => <Person key={p.id} props={p}/>)

    const names = data.map((name,index) => <h2 key={index}>{index} {name}</h2>)
    return (
        <div>           
                {
                    // 1st way
                    // (name)=>{
                    //     <h3>{name}</h3>
                    //     console.log(name)
                    // }
                }

                {   
                    // 2nd way
                }
                <h3>{val}</h3>    
                <h1>{info}</h1>    
                <h3>{names}</h3>                                                    
        </div>
  )
}

export default namelist