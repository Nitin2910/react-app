import React from "react";
//import "./Person.css";
import styled from "styled-components";

const StyleDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3 px #eee;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

const person = props => {
  const style = {
    "@media (min-width : 500px)": {
      width: "450 px"
    }
  };

  return (
    //<div className="Person" style={style}>
    <StyleDiv>
      <p onClick={props.click}>
        My name is a {props.name} and I am My age is {props.age} years old!!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}></input>
    </StyleDiv>
  );
};

export default person;
