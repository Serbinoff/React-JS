import React from 'react';
import './App.css';

const output = (props) => {
	return (
<div>
		<p className="Output">Hello {props.name}!</p> 
		<p>Size: {props.size} symbols</p> 
</div>)
}

export default output;
