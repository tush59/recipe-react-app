import React from 'react';

const person =(props) => {
return(
<div>
    this is from person component, I am {props.name} and {props.age} years old
    <p>{props.children}</p>

</div>
)
};

export default person;