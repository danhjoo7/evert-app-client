import React from 'react';
import './App.css';

class App extends React.Component {

  componentDidMount = () => {

  }


  render() {
    return (
      <div className="App">
        <header className="urban-grind-app"></header>
        <Router>
          <NavBar />
          <Switch>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
