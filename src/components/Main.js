import React from 'react'
import { useNavigate } from 'react-router-dom'
 


function Main() {
  const navigate = useNavigate();
  const clickHandler = () =>{
    navigate('/',{replace:true});
  }
  return (
    <div className="App-header">
      <div>Main</div>
      <p>อีหยังว่ะ</p>

        <button className='Submit' onClick={clickHandler} >Back</button>

      
      </div>
    
    
  );
}

export default Main