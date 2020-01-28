import React from 'react'
import {connect} from 'react-redux'
import signUpUser from '../actions/signUp'

class Signup extends React.Component {
    constructor() {
        super() 

        this.state = {
            name: '',
            location: '',
            username: '',
            password:''
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target 
        this.setState({
            [name]: value
        })
    }

    render() {
        const { name, location, username, password } = this.state
        return (
            <div className="signup-form">
                <h1>Sign Up for an Account</h1>
                <form onSubmit={(e) => this.props.signUpUser(e, this.state, this.props.history)}>
                    <label htmlFor="name">Name</label>
                    <br/><input name="name" value={name} onChange={this.handleChange}/>
                    <br/><label htmlFor="location">Location</label>
                    <br/><input type='location' name="location" value={location} onChange={this.handleChange}/>
                    <br/><label htmlFor="username">Username</label>
                    <br/><input type='username' name="username" value={username} onChange={this.handleChange}/>
                    <br/><label htmlFor="password">Password</label>
                    <br/><input type='password' name="password" value={password} onChange={this.handleChange}/>
                    <br/><input type="submit" value="Next"/>
                </form>
            </div>
        )
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        signUpUser: (e, state, history) => dispatch(signUpUser(e, state, history))
    }
}

export default connect(null, mapDispatchtoProps)(Signup)