import React, { Component } from 'react';
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
  switchNameHandler = (newName) =>{
    this.setState({
      perons:[
        {
          name:newName,
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
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I am React APP!</h1>
        <p>This is really Working for Me!!!!</p>
        <button onClick={this.switchNameHandler.bind(this,'Tiger')}>Switch Name</button>
        <Person click={()=>{this.switchNameHandler('KITIGER')}} 
          name={this.state.perons[0].name} 
          age={this.state.perons[0].age}/>
        <Person 
          name={this.state.perons[1].name} 
          age={this.state.perons[1].age}>My Hobby: PUBG</Person>
        <Person 
          name={this.state.perons[2].name} 
          age={this.state.perons[2].age}/>
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1','','KUNAL'));
  }
}

export default App;
