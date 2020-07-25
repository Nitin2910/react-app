import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";
import Person from "./Person/Person";

const StyledButton = styled.button`
  background-color: ${props => (props.alt ? "red" : "green")};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover: {
    background-color: ${props => (props.alt ? "salmon" : "lightgreen")};
    color: black;
  }
`;

class App extends Component {
  state = {
    persons: [
      { id: "asda", name: "Stoks", age: 28 },
      { id: "grrr", name: "Buttler", age: 31 },
      { id: "vgb", name: "Root", age: 32 }
    ],
    showPersons: false
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Brooks", age: 31 },
        { name: "Campbell", age: 32 }
      ]
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = index => {
    //const person = this.state.persons.slice();
    const person = [...this.state.persons];
    person.splice(person, 1);
    this.setState({ persons: person });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangeHandler(event, person.id)}
              ></Person>
            );
          })}
        </div>
      );
      // style.backgroundColor = "red";
      // style[":hover"] = {
      //   backgroundColor: "salmon",
      //   color: "black"
      // };
    }

    const classes = []; //['red','bold'].join(' '); //"red bold"
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }
    return (
      <div className="App">
        <h1>Hi React</h1>
        <p className={classes.join(" ")}>This is really working</p>
        <StyledButton
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}
        >
          Switch Name
        </StyledButton>
        {persons}
      </div>
    );
    // return React.createElement('div',null,'h1','Hi React!!');
    //return React.createElement('div',null,React.createElement('h1',null,'Hi React!!!'));
    //return React.createElement('div',{className : 'App'},React.createElement('h1',null,'Hi React!!!'));
  }
}

export default App;
