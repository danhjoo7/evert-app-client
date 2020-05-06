import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import reAuth from './actions/reAuth'
import fetchAllItems from './actions/fetchAllItems'
import fetchSearchItems from './actions/fetchSearchItem'
import searchContainer from './search/searchContainer'
import SellContainer from './sell/sellContainer'
import NavBar from './navbar/navbar'
import DisplayContainer from './display/displayContainer'
import Favorites from './favorites/favoritesContainer'
import Show from './show/Show'
import Login from './user/signIn'
import Signup from './user/signUp'
import './App.css'


class App extends React.Component {

  componentDidMount() {
    this.props.reAuth()
    this.props.fetchAllItems()
  }

  render() {
    return (
      <div className="evert-app">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path='/' render={(props) => <DisplayContainer {...props} />} />
            <Route path='/login' render={(props) => <Login {...props} />} />
            <Route path='/signup' render={(props) => <Signup {...props} />} />
            {/* <Route path='/my-favorites' render={(props) => <Favorites {...props} />} /> */}
            {/* <Route path='/my-profile' render={(props) => <Profile {...props} />} /> */}
            <Route path='/sell-item' render={(props) => <SellContainer {...props} />} />
            <Route path='/discover' render={(props) => <DisplayContainer {...props} />} />
            <Route path='/item/:id' render={(props) => <Show {...props} />} />
          </Switch>
        </Router>
      </div>
    )
  }
}

const mapStatetoProps = state => {
  return {
    currentUser: state.currentUser,
    items: state.items,
    // displayItems: state.displayItems,
    // showItem: state.showItem
  }
}

const mapDispatchtoProps = dispatch => {
  return {
    reAuth: () => dispatch(reAuth()),
    fetchAllItems: () => dispatch(fetchAllItems())
    // display item 
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(App)
