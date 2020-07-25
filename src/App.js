import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Stoks", age: 28 },
      { name: "Buttler", age: 31 },
      { name: "Root", age: 32 }
    ]
  };

  switchNameHandler = (newName) => {
    
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Brooks", age: 31 },
        { name: "Campbell", age: 32 }
      ]
    });
  }; 

  render() {
    return (
      <div className="App">
        <h1>Hi React</h1>
        <button onClick={()=>this.switchNameHandler('WI')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this,'ENG')}>
          My Hobby : TimePass
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    // return React.createElement('div',null,'h1','Hi React!!');
    //return React.createElement('div',null,React.createElement('h1',null,'Hi React!!!'));
    //return React.createElement('div',{className : 'App'},React.createElement('h1',null,'Hi React!!!'));
  }
}

export default App;
