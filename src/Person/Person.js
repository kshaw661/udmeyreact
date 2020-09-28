import React from 'react';

const person = (props) =>{
    console.log(props);
    return (
        <div>
            <p onClick={props.click}>  I'm a {props.name} and I am {props.age} years old! </p>
            <b>{props.children}</b>
        </div>
    )
}

export default person; 