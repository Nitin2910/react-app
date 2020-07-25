import React from "react";
import "./Person.css";
import Radium from 'radium';

const person = props => {
  const style = {
    '@media (min-width : 500px)': {
      width : '450 px'
    }
  };

  return (
    <div className="Person" style={style}>
      <p onClick={props.click}>
        My name is a {props.name} and I am My age is {props.age} years old!!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
  );
};

export default Radium(person);
