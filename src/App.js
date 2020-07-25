import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Stoks", age: 28 },
      { name: "Buttler", age: 31 },
      { name: "Root", age: 32 }
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

  deletePersonHandler = (index) => {
    //const person = this.state.persons.slice();
    const person = [...this.state.persons];
    person.splice(person ,1);
    this.setState({persons : person });

  }

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 31 },
        { name: "Campbell", age: 32 }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person , index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name}
             age={person.age}></Person>;
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi React</h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div',null,'h1','Hi React!!');
    //return React.createElement('div',null,React.createElement('h1',null,'Hi React!!!'));
    //return React.createElement('div',{className : 'App'},React.createElement('h1',null,'Hi React!!!'));
  }
}

export default App;
