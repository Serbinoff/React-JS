import React from 'react';
import './App.css';

const input = (props) => {
	return <input type="text" className = "Input" onChange = {props.changed} value = {props.name}/> 

}

export default input;
