import React, { Component } from 'react';
import './App.css';
import person from './Person/Person';
import Person from './Person/Person';

class App extends Component {
  state = {
    perons: [
      {
        id:1,
        name: 'Ricky',
        age: 36
      },
      {
        id:2, 
        name: 'Luka',
        age: 36
      },
      {
        id:3,
        name: 'Khusi',
        age: 30
      },
      {
        id:4,
        name: 'Dimple',
        age: 30
      },
    ],
    showPerson: false
  }

  deletePersonHandler = (index) =>{
    console.log(index);
    //const persons = this.state.perons.slice();
    const persons = [...this.state.perons]
    persons.splice(index,1);
    this.setState({
      perons:persons
    })
  }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.perons.findIndex(p=>{
      return p.id === id
    })
    const person = {...this.state.perons[personIndex]}
    person.name = event.target.value;
    const persons = [...this.state.perons]
    persons[personIndex] = person;
    this.setState(
      {
        perons: persons
      }
    )

  }
  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState(
      {
        showPerson: !doesShow
      }
    )
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.perons.map((person,index) => {
            return <Person 
                      click={()=>this.deletePersonHandler(index)}
                      name={person.name} 
                      age={person.age}
                      key={person.id}
                      changed={(event)=>this.nameChangedHandler(event,person.id)}
                    />
          })}
          
        </div>
      )
    }
    return (
      <div className="App">
        <h1>Hi, I am React APP!</h1>
        <p>This is really Working for Me!!!!</p>
        <button style={style} onClick={this.togglePersonHandler}>Toggel Persons</button>

        {persons}
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1','','KUNAL'));
  }
}

export default App;
