import React from 'react';
import './App.css';

const validation = (props) => {
  let size=''
  if (props.name.length > 8) size = 'Name too long'
  if (props.name.length < 4) size = 'Name too short'
  return (<div>
    <p className = 'Validation'>{size}</p> 
</div>)
}

export default validation;
