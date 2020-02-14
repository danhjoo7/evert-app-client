import React from 'react'
import { Link } from 'react-router-dom'
import SearchContainer from '../search/searchContainer'
import './navbar.scss'

class NavBar extends React.Component {

    loginOrOut() {
        if (this.props.currentUser) {
            return (<button className="site-nav-item-logout" onClick={this.props.logout} id="log-out">LOG OUT</button>)
        } else {
            return (<Link className="site-nav-item-login" to="/login">LOG IN</Link>);
        }
    }

    showIfLoggedIn() {
        if (this.props.currentUser) {
            return (<Link className="site-nav-item" id="my-favorites" to="/my-favorites">ME</Link>)
        }
    }

    render() {
        return (
            <nav className="navbar" >
                <div className="leftnav">
                    <a className="app-name" href="/">Evert</a>
                    <SearchContainer />
                </div>
                <div className="rightnav">
                    <div className="explore-logo">
                        <Link className="site-nav-item-discover" to="/discover">
                            <img className="explore" src="http://res.cloudinary.com/noah-s-kang/image/upload/v1501275950/compass-icon-3_ixdm3h.svg" />
                        </Link>
                    </div>
                    {this.loginOrOut()}
                    {this.showIfLoggedIn()}
                    <div className="site-nav-item-sell-container">
                        <Link className="site-nav-item-sell" id="sell-item" to="/sell-item">SELL AN ITEM</Link>
                    </div>
                    {/* <Link className="site-nav-item-sell" id="sell-item" to="/sell-item">SELL AN ITEM</Link> */}
                </div>
            </nav >
        )
    }
}

export default NavBar