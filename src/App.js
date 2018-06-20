import React, { Component } from 'react';
import CreateFamily from './Components/CreateFamily';
import FamilyList from './Components/FamilyList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    singleFamilies: [
      {
        "lastName": "Smith",
        "parent": "Lisa",
        "children": 1
      }
    ]
  }

  createFamily = (values) => {
    this.setState(state => ({
      singleFamilies: state.singleFamilies.concat([values])
    }))
  }

  removeFamily = (family) => {
    this.setState((state) => ({
      singleFamilies: state.singleFamilies.filter((c) => c.id !== family.id)
    }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Single Family</h1>
        </header>
        <CreateFamily
          onCreateFamily={this.createFamily}
        />
        <FamilyList
          onDeleteFamily={this.removeFamily}
          singleFamilies={this.state.singleFamilies}
        />
      </div>
    );
  }
}

export default App;
