import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom'
// import NavBar from 
import './App.css';

class App extends React.Component {

  componentDidMount = () => {

  }


  render() {
    return (
      <div className="evert-app">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path='/' component={} />
            <Route path='/login' render={} />
            <Route path='/signup' render={} />

          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
