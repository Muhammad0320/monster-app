import './App.css';

import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.components';
import { SearchBox } from './components/search-box/search-box.components';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ monsters: data }));
  }

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1> Monster Rolodex </h1>
        <SearchBox
          placeholder="search monsters"
          controlEvent={this.handleChange}
        />
        <CardList monsters={filteredMonters}></CardList>
      </div>
    );
  }
}

export default App;
