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
        if (this.props.currentUser){
            return <a>Account</a>
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
                position: relative;
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
        `

        return (
            <StyledContainer>
                <LeftNav>

                </LeftNav>
                <RightNav>
                    <ul>
                        <li><a href="">Cart</a></li>
                        <li><a href="/sign-in">Account</a></li>
                    </ul>
                  
                    
                </RightNav>

            </StyledContainer>
        )
    }
}

export default NavBar