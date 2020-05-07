import React from 'react'
import { Link } from 'react-router-dom'
import SearchContainer from '../search/searchContainer'
import styled from 'styled-components'


class NavBar extends React.Component {
    // constructor() {
    //     super()

    //     this.state = {

    //     }
    // }
    logInOrOut = () => {
        if (!this.props.currentUser) {
            return <a>Account</a>
        } else {
            return <a>Hi, ${this.props.currentUser.name}</a>
        }
    }

    render() {
        const StyledContainer = styled.div`
            display: flex;
            flex-direction: row;
            position: relative;
            height: 90px;
            align-items: center;
        `
        const RightNav = styled.div`
            position: absolute;
            right: 40px;
            ul {
                display: inline-block;
                display: flex;
                flex-direction: row;
                list-style-type: none;
                margin-right:20px;
                li {
                    margin-left: 43px;
                    a {
                        text-decoration: none;
                        font-family: F Grotesk,Helvetica,sans-serif;
                        font-weight: 500;
                        font-size: 16px;
                        line-height: 22px;
                        color: black;
                    }
                }
            }    
        `
        const LeftNav = styled.div`
            position: absolute;
            ul {
                display: inline-block;
                display: flex;
                flex-direction: row;
                list-style-type: none;
                
                li {
                    margin-left: 43px;
                    a {
                        text-decoration: none;
                        font-family: F Grotesk,Helvetica,sans-serif;
                        font-weight: 500;
                        font-size: 16px;
                        line-height: 22px;
                        color: black;
                    }
                }
            }
        `

        const CenterNav = styled.div`
            position: absolute;
            left: 47%;
            .evert-logo {
                font-family: F Grotesk,Helvetica,sans-serif;
                font-weight: 550;
                font-size: 25px;
                line-height: 22px;
                text-decoration: none;
                color: black;
            }
        `
        

        return (
            <StyledContainer>
                <LeftNav>
                    <ul>
                        <li><Link to="/shop-items">Shop</Link></li>
                        <li><Link to="/about-us">Why Evert</Link></li>
                        <li><Link to="/reviews">Reviews</Link></li>
                    </ul>
                </LeftNav>
                <CenterNav>
                    <Link className="evert-logo" to="/">Evert</Link>
                </CenterNav>
                <RightNav>
                    <ul>
                        <li><Link to="/my-cart">Cart</Link></li>
                        <li><Link to="/account">Account</Link></li>
                    </ul>
                </RightNav>
            </StyledContainer>
        )
    }
}

export default NavBar