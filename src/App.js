import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    perons:[
      {
        name:'Ricky',
        age:36
      },
      {
        name:'Khusi',
        age:30
      },
      {
        name:'Dimple',
        age:30
      },
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I am React APP!</h1>
        <p>This is really Working for Me!!!!</p>
        <button>Switch Name</button>
        <Person name={this.state.perons[0].name} age={this.state.perons[0].age}/>
        <Person name={this.state.perons[1].name} age={this.state.perons[1].age}>My Hobby: PUBG</Person>
        <Person name={this.state.perons[2].name} age={this.state.perons[2].age}/>
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1','','KUNAL'));
  }
}

export default App;
