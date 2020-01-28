import { connect } from 'react-redux'
import NavBar from './navbar'
import logOut from '../actions/logOut'


const mapStatetoProps = state => {
    return {
        currentUser: state.currentUser
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        logOut: () => dispatch(logOut())
    }
}


export default connect(mapStatetoProps, mapDispatchtoProps)(NavBar)