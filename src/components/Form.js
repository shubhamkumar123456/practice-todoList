import React, { useState } from 'react'
import './Form.css'
const Form = (props) => {
    const [nameValue, setnameValue] = useState("");
    const [ageValue, setageValue] = useState("");

const handleNameChange=(e)=>{
    setnameValue(e.target.value)
// console.log(e.target.value)
}
const handleAgeChange=(e)=>{
    setageValue(e.target.value)
// console.log(e.target.value)
}

const handleSubmit=(e)=>{
    e.preventDefault()
    let inputFields={
        name:nameValue,
        age:ageValue,
      }
      props.adddetails(inputFields)
    //   console.log(inputFields)
}

  return (
    <form className='form'>
      <label >Username</label>
      <input type="text"  onChange={handleNameChange} value={nameValue}/>
      <label >Age(years)</label>
      <input type="text" onChange={handleAgeChange} value={ageValue}/>
      <button onClick={handleSubmit}>Add User</button>
    </form>
  )
}

export default Form
