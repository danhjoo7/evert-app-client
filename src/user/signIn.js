import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import signIn from '../actions/signIn'
import './user.scss'

class Login extends React.Component {
    constructor() {
        super()

        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        const { username, password } = this.state
        return (
            <div className="sign-in-form">
                <h1>Sign in</h1>
                <form onSubmit={(e) => this.props.signIn(e, this.state, this.props.history)}>
                    <label htmlFor="username">Username</label>
                    <br /><input type='username' name="username" value={username} onChange={this.handleChange} />
                    <br /><label htmlFor="password">Password</label>
                    <br /><input type='password' name="password" value={password} onChange={this.handleChange} />
                    <br /><input type="submit" value="Sign In"></input>
                </form>
                <p>
                    Don't have an account? <Link to="/signup">Sign up</Link>
                </p>
            </div>
        )
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        signIn: (e, state, history) => dispatch(signIn(e, state, history))
    }
}

export default connect(null, mapDispatchtoProps)(Login)