import React, {Component} from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component'
// use a class to give us object to the state of the object thanks to JS
class App extends Component {
  constructor(){
    super(); // gives us access to this.state
    
    this.state = {
      monsters: [],
      searchField: ''
    };
    // .bind is a method on any function that returns a new function where this is 
    // now bound whatever is passed thru a function were gonna use arrow functions tho

}

// Populate our monsters array with names
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monsters: users})) 
}

handleChange = e => {
  this.setState({searchField: e.target.value})
  // arrow function automatically binds where function was called
}
  render(){

    //destructoring 
  const { monsters, searchField} = this.state;
  const filteredmonsters = monsters.filter(monster =>
        monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox
        placeholder = 'search monsters'
        handleChange = {this.handleChange}
      />
      <CardList monsters = {filteredmonsters} /> 
    </div>

  );
  }

}


export default App;
