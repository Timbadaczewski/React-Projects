import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  state = {
    persons: [
        {id: 'asdmasadf', name:'Tim', age: '27'},
        {id: 'mslkfnfkf', name:'Marimba', age:'25'},
        {id: 'mdmdkdlds', name:'Uncle Tony', age:'28'}
    ],
      otherState: 'some other value',
      showPersons: false
  }

  nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
          return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons:!doesShow});
  }



  render() {

        let persons = null;

        if (this.state.showPersons){
            persons = <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler} />;
        }

        return (

          <div className={classes.App}>
              <Cockpit
                appTitle={this.props.title}
                showPersons={this.state.showPersons}
                persons={this.state.persons}
                clicked={this.togglePersonsHandler}
              />
              {persons}
          </div>
        );
  }
}

export default App;
