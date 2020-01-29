import React from 'react'
import { Link } from 'react-router-dom'
import SearchContainer from '../search/searchContainer'

class NavBar extends React.Component {

    loginOrOut() {
        if (this.props.currentUser) {
            return (<button className="site-nav-item" onClick={this.props.logout} id="log-out">LOG OUT</button>);
        } else {
            return (<Link className="site-nav-item" to="/login">LOG IN</Link>);
        }
    }

    showIfLoggedIn() {
        if (this.props.currentUser) {
            return (<Link className="site-nav-item" id="my-favorites" to="/my-favorites">ME</Link>);
        }
    }

    render() {
        return (
            <nav className="navbar" >
                <div className="leftnav">
                    <a className="nav-logo site-nav-item" href="/">
                        <img className="logo" src="http://res.cloudinary.com/noah-s-kang/image/upload/v1500577997/impetus_logo_wndm0c.svg" />
                    </a>
                </div>
                <div className="centernav">
                    <SearchContainer />
                </div>
                <div className="rightnav">
                    <div className="explore-logo">
                        <Link className="site-nav-item" to="/discover">
                            <img className="explore" src="http://res.cloudinary.com/noah-s-kang/image/upload/v1501275950/compass-icon-3_ixdm3h.svg" />
                        </Link>
                    </div>
                    {this.loginOrOut()}
                    {this.showIfLoggedIn()}
                    <Link className="site-nav-item" id="sell-item" to="/items/new">SELL AN ITEM</Link>
                </div>
            </nav >
        )
    }
}

export default NavBar