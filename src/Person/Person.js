import React from 'react';
import './Person.css'
const person = (props) =>{
    console.log(props);
    return (
        <div className="Person">
            <p onClick={props.click}>  I'm a {props.name} and I am {props.age} years old! </p>
            <p><b>{props.children}</b></p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person; 