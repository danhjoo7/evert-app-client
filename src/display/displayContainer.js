import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ItemCard from './itemCard'


class Display extends React.Component {
    constructor() {
        super()
    }

    render() {

        const StyledContainer = styled.div`
            position: relative;
            height: 1200px;
            width: 100%;
            background: #F7F2F0;
            top: 90px;

            .main-app-image-container {
                position: absolute;
                left: 50%;
                width: 50%;
                top: 40px;
                img {
                    position: absolute;
                    width: 550px;
                    height: 400px;
                    right: 80px;
                    top: 15px;
                    border-radius: 5px;
                }
            }
        `
        const DisplayHeader = styled.div`
            position: absolute;
            font-size: 33px;
            width: 400px;
            left: 50px;
            padding: 30px;
            .shop-collections-button {

            }
        `
        const StyledButton = styled.button`
            position: relative;
            bottom: 10px;
            background-color: #6495ED;
            height: 50px;
            width: 170px;
            border-width: 2px;
            border-radius: 30px;
            border-color: #6495ED;
            font-family: F Grotesk,Helvetica,sans-serif;
            font-size: 16px;
            font-color: white;
            
            .shop-collections-button {
                text-decoration: none;
                color: white;
            }
        `
        return (
            <StyledContainer>
                <div className="main-app-image-container">
                    <img alt="ecommerce and vintage items" src="http://advertisementfeature.cnn.com/2017/tokyo-tourism/dist/images/story/experience/carousel-2/4-1024.jpg" />
                </div>
                <DisplayHeader>
                    <h1>The ideal place for secondhand, vintage items.</h1>
                    <StyledButton>
                        <Link to="/shop/collections" className="shop-collections-button">Shop Items</Link>
                    </StyledButton>
                </DisplayHeader>
                <div className="display-item-cards">
                    {/* <hr size="2" align="center"></hr> */}
                    {this.props.items.filter((item) => item.name.toLowerCase().startsWith(this.props.search.toLowerCase()) ||
                        item.brand.toLowerCase().startsWith(this.props.search.toLowerCase())).map(item => {
                            return (<ItemCard key={item.id} item={item} />)
                        }
                        )}
                </div>
            </StyledContainer >
        )
    }
}


const mapStatetoProps = state => {
    return {
        items: state.items,
        search: state.search
    }
}

export default connect(mapStatetoProps, null)(Display)

