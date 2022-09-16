import React,{useState, useCallback} from 'react'
import Button from '../Components/Button'
import Count from '../Components/Count'
import Title from '../Components/Title'

function UseCallback() {
  const [age,setAge] = useState(25)
  const [salary, setSalary] = useState(50000)

  const incrementAge = useCallback(()=>{
    setAge(age+1)
  }, [age])
  
  const incrementSalary = useCallback(()=>{
    setSalary(salary+1000)
  }, [salary])
  // Here, when we click on Age button or Salary button both button gets executed this will be
  // prevented by useCallback() hook
  return (
    <div>
        <Title />
        <Count text='age' count={age} />
        <Button handleClick={incrementAge}>Increase Age</Button>        
        <Count text='salary' count={salary} />
        <Button handleClick={incrementSalary} count={salary}>Increase Salary</Button> 
    </div>
  )
}

export default UseCallback