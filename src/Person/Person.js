import React from "react";

const person = props => {
  return (
    <div>
      <p onClick={props.click}>
        My name is a {props.name} and I am My age is {props.age} years old!!
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
