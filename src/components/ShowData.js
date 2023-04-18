import React from 'react'
import './ShowData.css'
const ShowData = (props) => {
    console.log(props.alldata.name)
  return (
    <div className='show-data'>
    
    <p>{props.alldata.name} <span>({props.alldata.age} years old)</span></p>
   
    </div>
  )
}

export default ShowData
