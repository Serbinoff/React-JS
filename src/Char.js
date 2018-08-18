import React from 'react';
import './App.css';

const char = (props) => {
	
  return (
  	<div className='Line'>
  	  
		    
		    <p className = 'Char'  onClick = {props.click}>{props.char}</p>
		    
		    
  			    	
	</div>
  )
}  
export default char;
