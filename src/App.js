
import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import ShowData from './components/ShowData';

function App() {
  const details=[]
  const [detail, setdetail] = useState(details);
  const addDetailsHandler=(formdetail)=>{
    setdetail([formdetail,...detail])
  }
  console.log(details)
  return (
    <div className="App">
      <div className='app-form'>
      <Form adddetails={addDetailsHandler}/>
      </div>
      <div className='appShowData'>
      {detail.map((ele)=>{
        return<ShowData key={Math.random()} alldata={ele}/>
      })}
      </div>
    
  
      
    </div>
  );
}

export default App;
