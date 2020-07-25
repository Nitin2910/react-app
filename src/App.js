import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = props => {
 
  const [personState,setPersonState] = useState( {
    persons: [
      { name: "Stoks", age: 28 },
      { name: "Buttler", age: 31 },
      { name: "Root", age: 32 }
    ]
  });

  const [otherState,setOtherState] = useState(
    'some other values'
  ); 
  
  const switchNameHandler = () => {
    setPersonState({
      persons: [
        { name: "Holder", age: 28 },
        { name: "Brooks", age: 31 },
        { name: "Campbell", age: 32 }
      ]
    });
  };
  
    return (
      <div className="App">
        <h1>Hi React</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person
          name={personState.persons[0].name}
          age={personState.persons[0].age}
        />
        <Person
          name={personState.persons[1].name}
          age={personState.persons[1].age}
        >
          My Hobby : TimePass
        </Person>
        <Person
          name={personState.persons[2].name}
          age={personState.persons[2].age}
        />
      </div>
    );
    // return React.createElement('div',null,'h1','Hi React!!');
    //return React.createElement('div',null,React.createElement('h1',null,'Hi React!!!'));
    //return React.createElement('div',{className : 'App'},React.createElement('h1',null,'Hi React!!!'));
  }


export default app;
