import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import reAuth from './actions/reAuth'
import fetchAllItems from './actions/fetchAllItems'
import fetchSearchItems from './actions/fetchSearchItem'
import navbar from './navbar/navbar'
import searchContainer from './search/searchContainer'
import sellContainer from './sell/sellContainer'
import navbarContainer from './navbar/navbarContainer'

import './App.css'

class App extends React.Component {

  componentDidMount() {
    this.props.reAuth()
    this.props.fetchAllItems()
    this.props.fetchSearchItems()
  }

  render() {
    return (
      <div className="app">
        <h1 className="evert-app">
          Evert 
        </h1>
        <Router>
          {/* <NavBar /> */}
          <Switch>
            {/* <Route exact path='/' component={} /> */}
            {/* <Route path='/login' render={} /> */}
            {/* <Route path='/signup' render={} /> */}

          </Switch>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    items: state.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    reAuth: () => dispatch(reAuth()),
    fetchAllItems: () => dispatch(fetchAllItems()),
    fetchSearchItems: () => dispatch(fetchSearchItems())
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(App)
