import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
// import { throwStatement } from '@babel/types';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }  

    this.handleChange = this.handleChange.bind(this);

  }

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(jsonResponse => this.setState({ monsters: jsonResponse}));
    console.log(this.state.monsters)
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value})
  }

  render() {

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())); 

    console.log(filteredMonsters, 'filteredMonesters');

    return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='Search Monsters'
          handleChange={this.handleChange}
        ></SearchBox> 
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    )
  }
}

export default App;
